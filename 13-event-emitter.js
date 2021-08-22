// Event Emitter

const EventEmitter = require('events')
const customEmitter = new EventEmitter()

// Listen for event
customEmitter.on('response', (name, id) => {
    // What to do when emitted
    console.log(`data received: user ${name} with id: ${id} `);
})

// Listen for event
customEmitter.on('response', () => {
    // What to do when emitted
    console.log(`some other logic`);
})

// Emit the event
customEmitter.emit('response', 'dave', 53)
