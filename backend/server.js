import dns from "node:dns";
dns.setServers(["1.1.1.1", "8.8.8.8"]);

import dotenv from "dotenv";
dotenv.config();

import app from "./app.js";
import connectDB from "./config/db.js";
import seedAdmin from "./seedAdmin.js";

const PORT = process.env.PORT || 5000;

async function startServer() {
  try {
    await connectDB();

    await seedAdmin();

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

startServer();