import { WebSocketServer } from "ws"
import {client} from "@repo/db/client";

const webServer = new WebSocketServer({
    port: 3001
});


webServer.on("connection", async (socket) => {
    const user = await client.user.create({
        data: {
            name: Math.random().toString(),
            email: Math.random().toString(),
            randCode: Math.floor(Math.random() * 1000000)
        }
    });
    console.log("New client connected", user);
    socket.send("Hii there, you are connected to a web socket server.")
})