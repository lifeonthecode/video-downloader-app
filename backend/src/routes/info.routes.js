import { Router } from "express";
import ytdl from "@distube/ytdl-core";
import { mapInfo } from "../utils/mapInfo.js";

const router = Router();

router.get("/", async (req, res) => {
  const url = req.query.url;
  if (!url || !ytdl.validateURL(url)) {
    return res.status(400).json({ message: "Valid YouTube URL is required" });
  }
  console.log('info routes called:', url)

  try {

    
    const info = await ytdl.getInfo(url);
    res.json(mapInfo(info, url));
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: "Failed to fetch info" });
  }
});

export default router;
