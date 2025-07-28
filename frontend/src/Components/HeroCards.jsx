
import { Link } from 'react-router';

export default function HeroCards() {
    const Card = ({ to, title}) => (
        <Link
            to={to}
            className="border-2 dark:border-white border-dashed rounded-xl  max-w-[548px] w-full min-h-[400px] h-full  flex flex-col items-center justify-center transition relative"
        >
            <img src="/videoSnap.png" alt="" className='absolute top-0 right-0 w-full h-full rounded-xl' />

            <h3 className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-xl font-semibold text-white underline">{title}</h3>
        </Link>
    );

    return (
        <div className="grid md:grid-cols-2 gap-6">
            <Card to="/downloader/playlist" title="Download Playlist" icon={"≡"} />
            <Card to="/downloader/url" title="Single Download" icon={"▶"} />
        </div>
    );
}
