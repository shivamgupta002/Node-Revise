const http = require("http");
const express = require("express");
const path = require("path");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

//Socket io
io.on("connection", (socket) => {
  socket.on("user-message", (message) => {
    io.emit("message", message);
    // console.log("A new user Message", message);
  });
});

app.use(express.static(path.resolve("./Public")));

app.get("/home", (req, resp) => {
  return resp.sendFile("./Public/index.html");
});
server.listen(3000, () => {
  console.log("Listening at 3000");
});
