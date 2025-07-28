import { useState } from "react";
// import { api } from "../lib/axios";
import VideoCard from "../components/VideoCard";
import AdsenseSlot from "../Components/AdsenseSlot";
import axios from 'axios'

const ToMp3 = () => {
    const [url, setUrl] = useState("");
    const [video, setVideo] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleFetch = async () => {
        if (!url) return;
        setLoading(true);
        try {

            const { data } = await axios.get(`http://localhost:5000/api/info`, { params: { url }, withCredentials: true });
            // const { data } = await api.get(`/api/info`, { params: { url } });
            setVideo(data);
        } catch (e) {
            console.error(e);
            setVideo(null);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <div className="max-w-4xl mx-auto px-4 py-8 min-h-[calc(100vh-277px)]">
                <div className="flex flex-col gap-8 justify-center">
                    <h3 className="text-center text-3xl text-black capitalize dark:text-white">MP3</h3>
                    <div className="flex gap-2">
                        <input
                            type="text"
                            className="w-full border dark:border-white text-black dark:text-white rounded-lg h-[56px] pl-3 focus:outline-none focus:ring-2 focus:ring-amber-300"
                            placeholder="Enter youtube url here..."
                            value={url}
                            onChange={(e) => setUrl(e.target.value)}
                        />

                        <button
                            onClick={handleFetch}
                            disabled={loading}
                            className="border px-3 py-1 rounded text-xl text-white dark:text-black dark:bg-white bg-black capitalize flex items-center justify-center cursor-pointer">
                            {loading ? 'finding' : 'Finded'}
                        </button>
                    </div>
                </div>

                <div className="my-6">
                    <AdsenseSlot slot={import.meta.env.VITE_ADSENSE_SLOT_LIST} />
                </div>



                {video && <VideoCard video={video} condi={false} />}
            </div>
        </>
    );
};

export default ToMp3;