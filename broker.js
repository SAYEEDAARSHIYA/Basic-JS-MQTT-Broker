const aedes = require('aedes')();
const net = require('net');
const http = require('http');
const ws = require('websocket-stream');

// Define ports for MQTT and WebSocket
const MQTT_PORT = 1883;
const WS_PORT = 3000;

// Create a TCP server for the MQTT broker
const tcpServer = net.createServer(aedes.handle);
tcpServer.listen(MQTT_PORT, () => {
    console.log(`MQTT broker is running on TCP port ${MQTT_PORT}`);
});

// Create an HTTP server for WebSocket connections
const httpServer = http.createServer();
ws.createServer({ server: httpServer }, aedes.handle);
httpServer.listen(WS_PORT, () => {
    console.log(`WebSocket server running on ws://localhost:${WS_PORT}`);
});

// Handle client connections
aedes.on('client', (client) => {
    console.log(`Client connected: ${client.id}`);
});

// Handle client disconnections
aedes.on('clientDisconnect', (client) => {
    console.log(`Client disconnected: ${client.id}`);
});

// Handle subscriptions
aedes.on('subscribe', (subscriptions, client) => {
    console.log(`Client ${client.id} subscribed to topics:`, subscriptions.map(s => s.topic));
});

// Handle publish
aedes.on('publish', (packet, client) => {
    if (client) {
        console.log(`Client ${client.id} published to topic ${packet.topic}: ${packet.payload.toString()}`);
    } else {
        console.log(`Message published to topic ${packet.topic}: ${packet.payload.toString()}`);
    }
});
