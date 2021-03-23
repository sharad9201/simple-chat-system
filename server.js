const io = require('socket.io')(3000)

io.on('conection',socket =>{

    socket.emit('chat-message','hello world')
})