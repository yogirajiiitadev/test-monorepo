import { client } from "@repo/db/client";
import express from "express";

const app = express()
app.use(express.json());

app.get("/",(req, res) => {
    console.log("Hello from HTTP backend server");
    res.send("Hello from HTTP backend server");
})

app.post("/signup", async (req, res) => {
    const email = req.body?.email;
    const name = req.body?.name;
    console.log("Received signup request", { email, name });
    const randCode = Math.floor(Math.random() * 1000000); // or get this from req.body or another source
    const user = await client.user.create({
        data: {
            name,
            email,
            randCode
        }
    })
    res.json({
        msg: "Signup successful",
        id: user.id
    });
});


app.listen(3000);