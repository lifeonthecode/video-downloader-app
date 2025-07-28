import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import infoRoutes from "./routes/info.routes.js";
import downloadRoutes from "./routes/download.routes.js";
import playlistRoutes from "./routes/playlist.routes.js";
import contactRoutes from "./routes/contact.routes.js";

// Setup __dirname in ES Module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load .env variables
dotenv.config();

// Express app init
const app = express();

// CORS setup
app.use(cors({
  credentials: true,
  origin: process.env.CORS_ORIGIN?.split(",") || "*"
}));

// Parse JSON requests
app.use(express.json());

// Health check route
app.get("/", (_, res) => res.json({ status: "ok" }));

// ========== All API Routes ==========
app.use("/api/info", infoRoutes);
app.use("/api/download", downloadRoutes);
app.use("/api/playlist", playlistRoutes);
app.use("/api/contact", contactRoutes);

// ========== Serve React Frontend ==========
const frontendPath = path.join(__dirname, "../../frontend/dist");
app.use(express.static(frontendPath));

// For React Router: serve index.html for any other route
app.get("*", (req, res) => {
  res.sendFile(path.join(frontendPath, "index.html"));
});

// Server listening
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
