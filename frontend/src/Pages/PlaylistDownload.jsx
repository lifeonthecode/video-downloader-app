import { useState } from "react";
import VideoCard from "../components/VideoCard";
import Pagination from "../components/Pagination";
import AdsenseSlot from "../Components/AdsenseSlot";
import { api } from "../lib/axios";

const PAGE_SIZE = 5;

export default function PlaylistDownload() {
  const [url, setUrl] = useState("");
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  const handleFetch = async () => {
    if (!url) return;
    setLoading(true);
    try {
      const { data } = await api.get(`/api/playlist`, { params: { url } });
      setVideos(data.entries || []);
      setPage(1);
    } catch (e) {
      console.error(e);
      setVideos([]);
    } finally {
      setLoading(false);
    }
  };

  const total = Math.ceil(videos.length / PAGE_SIZE);
  const paginated = videos.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  return (
    <>
      <div className="max-w-4xl mx-auto px-4 py-8 min-h-[calc(100vh-277px)]">
        <div className="flex flex-col gap-8 justify-center">
          <h3 className="text-center text-3xl text-black dark:text-white capitalize"> Downloader Playlist</h3>


          <div className="flex gap-2">
            <input
              type="text"
              className="w-full border rounded-lg h-[56px] pl-3 focus:outline-none focus:ring-2 focus:ring-amber-300 text-black dark:text-white"
              placeholder="Enter playlist url here..."
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />
            <button
              onClick={handleFetch}
              disabled={loading}
              className="bg-black dark:bg-white transition dark:text-black cursor-pointer text-xl text-white px-6 py-3 rounded-lg"
            >
              {loading ? "Loading..." : "Download"}
            </button>
          </div>
        </div>

        <div className="my-6">
          <AdsenseSlot slot={import.meta.env.VITE_ADSENSE_SLOT_LIST} />
        </div>

        <div className="space-y-4">
          {paginated.map((v) => (
            <VideoCard key={v.id} video={v} />
          ))}
        </div>

        <Pagination page={page} total={total} onChange={setPage} />
      </div>
    </>
  );
}
