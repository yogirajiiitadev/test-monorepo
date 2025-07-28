import {client} from "@repo/db/client";

export default async function Home() {
  const user = await client.user.findFirst();
  return (
    <div>
      <h1>Welcome to the Frontend App</h1>
      <p>This app is running on port 3002.</p>
      <p>Check the HTTP backend and WebSocket server for more functionality.</p>
      <p>HTTP Backend: <a href="http://localhost:3000">http://localhost:3000</a></p>
      <p>WebSocket Server: <a href="ws://localhost:3001">ws://localhost:3001</a></p>
      name: {user?.name || "Guest"}<br />
      email: {user?.email || "No email provided"}<br />
      randCode: {user?.randCode || "No code available"}<br />
    </div>
  );
}
