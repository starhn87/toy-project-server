import { createServer } from "http";
import { Server } from "socket.io";

const httpServer = createServer();
const io = new Server(httpServer, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  socket.on("chat message", (msg) => {
    console.log("emit", msg);
    io.emit("receive message", msg);
  });
});

httpServer.listen(3001);
