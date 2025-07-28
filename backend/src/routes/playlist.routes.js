import { Router } from "express";
import ytpl from "ytpl";
import ytdl from "@distube/ytdl-core";

const router = Router();

// Playlist Info API
router.get("/", async (req, res) => {
  const url = req.query.url;
  console.log('playlist route called:');
  if (!url) return res.status(400).json({ message: "url is required" });

  try {
    const playlistId = await ytpl.getPlaylistID(url);
    const playlist = await ytpl(playlistId, { limit: 100 });

    const entries = await Promise.allSettled(
      playlist.items.map(async (item) => {
        try {
          const videoUrl = item.shortUrl;
          const info = await ytdl.getBasicInfo(videoUrl);
          return {
            id: item.id,
            title: item.title,
            thumbnail: item.bestThumbnail?.url || "",
            url: videoUrl,
            duration: item.duration,
            formats: (info.formats || [])
              .filter(f => f.mimeType && (f.qualityLabel || f.audioBitrate))
              .map(f => ({
                quality: f.qualityLabel || "Audio",
                mimeType: f.mimeType,
                url: f.url
              }))
          };
        } catch (err) {
          console.error("Failed to get info for:", item.shortUrl, err.message);
          return null;
        }
      })
    );

    const validEntries = entries
      .filter(result => result.status === "fulfilled" && result.value !== null)
      .map(result => result.value);

    res.json({
      title: playlist.title,
      totalItems: validEntries.length,
      entries: validEntries
    });
  } catch (e) {
    console.error("Playlist Fetch Error:", e);
    res.status(500).json({ message: "Failed to fetch playlist", error: e.message });
  }
});

export default router;
