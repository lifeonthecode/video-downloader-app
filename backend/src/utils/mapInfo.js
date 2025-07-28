export const mapInfo = (info, url) => {
  const formats = info.formats
    .filter(f => f.mimeType && (f.qualityLabel || f.audioBitrate))
    .map(f => ({
      quality: f.qualityLabel || "Audio",
      mimeType: f.mimeType,
      contentLength: f.contentLength || null,
      url: f.url
    }));

  return {
    id: info.videoDetails.videoId,
    title: info.videoDetails.title,
    thumbnail: info.videoDetails.thumbnails.pop().url,
    duration: info.videoDetails.lengthSeconds,
    url,
    formats
  };
};
