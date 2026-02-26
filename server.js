const websocket = require('ws');
const wss = new websocket.Server({port:8080});

// logs that a new client  in connected
wss.on('connection', ws =>{
        console.log('new client connected, total no of client :'+ wss.clients.size);


    
    // to recive the data from the client
    ws.on('message',(message) =>{
        console.log('Received:', message.toString());
        wss.clients.forEach(client => {
                client.send(message.toString());
        });
    });



    ws.on('close', () => console.log('client disconnected, total no of clients:'+ wss.clients.size));

});
console.log('server is running..............');
console.log('ws://localhost:8080');
