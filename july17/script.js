// EVENT EMITTER
const EventEmitter = require('node:events')

const e1 = new EventEmitter();

e1.on('start', (arg)=>{
    console.log('Event started with data:', arg);
})

// starting the event using emit

e1.emit('start', {id: 1, name: 'John'});