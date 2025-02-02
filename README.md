# MQTT Broker & Web Client

This project sets up an MQTT broker using **Aedes** and a simple web client to subscribe to MQTT topics and display messages.

## Packages Used
- **Aedes**: MQTT broker
- **mqtt.js**: MQTT client for WebSockets
- **websocket-stream**: WebSocket server integration

## Requirements
- **Node.js**: Ensure that Node.js is installed on your system.

## Setup & Running the Broker  

> **Note:** All commands should be executed in the **VS Code terminal**.
 
### 1. Clone the repository
```bash
git clone https://github.com/C-S-Darshan/Basic-JS-MQTT-Broker.git
```
```bash
cd Basic-JS-MQTT-Broker
```

### 2. Install dependencies (if not already included)
If the project does not include the `node_modules` folder, run the following command to install the dependencies:
```bash
npm install aedes mqtt websocket-stream
```

### 3. Run the MQTT broker
```bash
node broker.js
```

### 4. Open the Web Client  
Open `client.html` in a web browser. To subscribe to a topic, enter the topic name and click the **"Subscribe"** button.  


