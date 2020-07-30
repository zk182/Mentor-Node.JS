const { EventEmitter } = require('events');

const hiEmitter = new EventEmitter();

hiEmitter.on('hi', () => {console.log('te acabo de decir hola boludito')});

hiEmitter.emit('hi', console.log('hola'));