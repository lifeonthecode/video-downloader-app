import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import infoRoutes from "./routes/info.routes.js";
import downloadRoutes from "./routes/download.routes.js";
import playlistRoutes from "./routes/playlist.routes.js";
import contactRoutes from "./routes/contact.routes.js";


dotenv.config();
const app = express();

app.use(cors({
  credentials: true,
  origin: process.env.CORS_ORIGIN?.split(",") || "*"
}));

app.use(express.json());

app.get("/", (_, res) => res.json({ status: "ok" }));

app.use("/api/info", infoRoutes);
app.use("/api/download", downloadRoutes);
app.use("/api/playlist", playlistRoutes);
app.use("/api/contact", contactRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Backend running on PORT http://localhost:${PORT}`));
