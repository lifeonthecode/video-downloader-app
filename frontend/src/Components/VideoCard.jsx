import { Link } from 'react-router'

export default function VideoCard({ video, condi }) {
    return (
        <div className="border dark:border-white rounded-lg p-4 flex gap-4">
            <img src={video.thumbnail} alt={video.title} className="w-40 h-24 object-cover rounded" />
            <div className="flex-1">
                <h3 className="font-semibold text-black dark:text-white">{video.title}</h3>
                <div className="flex items-center gap-2 mt-3">

                    {
                        condi == false ? "" : <Link to={`${import.meta.env.VITE_API_BASE_URL}/api/download?url=${encodeURIComponent(video.url)}`} className="border dark:border-b-green-700 px-6 py-2 rounded text-xl text-white bg-black dark:bg-white dark:text-black capitalize flex items-center justify-center"> Download Video</Link>
                        // condi == false ? "" : <a href={`${import.meta.env.VITE_API_BASE_URL}/api/download?url=${encodeURIComponent(video.url)}`} className="border dark:border-b-green-700 px-6 py-2 rounded text-xl text-white bg-black dark:bg-white dark:text-black capitalize flex items-center justify-center"> Download Video</a>
                    }


                    <a
                        href={`${import.meta.env.VITE_API_BASE_URL}/api/download/mp3?url=${encodeURIComponent(video.url)}`}
                        className
                        ="border dark:border-white px-6 py-2 rounded text-xl bg-black dark:bg-white dark:text-black text-white"
                    >
                        {
                            condi ? 'Download MP3' : 'MP3'
                        }
                    </a>
                </div>
            </div>
        </div>
    );
}
