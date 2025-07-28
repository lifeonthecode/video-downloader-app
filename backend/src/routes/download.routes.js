import { Router } from "express";
import ytdl from "@distube/ytdl-core";

const router = Router();

// MP4 Download
router.get("/", async (req, res) => {
  const { url, quality } = req.query;
  if (!url || !ytdl.validateURL(url)) {
    return res.status(400).json({ message: "Valid YouTube URL is required" });
  }

  res.header("Content-Disposition", 'attachment; filename="video.mp4"');
  ytdl(url, { quality: quality || "highestvideo" }).pipe(res);
});

// MP3 Download
router.get("/mp3", async (req, res) => {
  const { url } = req.query;
  if (!url || !ytdl.validateURL(url)) {
    return res.status(400).json({ message: "Valid YouTube URL is required" });
  }

  res.header("Content-Disposition", 'attachment; filename="audio.mp3"');
  ytdl(url, { filter: "audioonly" }).pipe(res);
});

export default router;
