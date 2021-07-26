const express = require("express");
// const server = express();
const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
app.use(express.static("public"))
// 127.0.0.1-> localhost
// web socket enabled

io.on('connection', (socket) => {
    // console.log('a user connected');
    socket.on("message", function (data) {
        console.log(socket.id);
        console.log(data);

        socket.broadcast.emit("broadcast",data);
    })
});
http.listen(3000, function () {
    console.log('listening on *:3000');
});
// server.listen(3000, function () {
//     console.log("server is running at port 3000");
// })