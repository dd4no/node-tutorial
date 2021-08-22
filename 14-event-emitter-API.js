// Event Emitter API

// Create server
const http = require('http')
const server = http.createServer()
server.listen(5000)

// Subscribe to event, listen for it, and respond to it
server.on('request', (req, res) => {
    res.end('Welcome')
})
