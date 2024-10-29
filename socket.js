// const { Server } = require('socket.io');
// const http = require('http');

// let io;

// function initSocket(server) {
//   io = new Server(server, {
//     cors: { origin: "http://localhost:8000", methods: ["GET", "POST"] },
//   });

//   io.on('connection', (socket) => {

//       // console.log(' user connected');
  
//       socket.on('disconnect', () => {
//         // console.log('user disconnected');
//       });
//     });

//   return io;
// }

// function getIo() {
//   if (!io) {
//     throw new Error('Socket.io not initialized');
//   }
//   return io;
// }

// module.exports = { initSocket, getIo };
