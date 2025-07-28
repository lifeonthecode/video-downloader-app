import HeroCards from "../components/HeroCards";
import AdsenseSlot from "../Components/AdsenseSlot";

export default function Home() {
    return (
        <div className="w-full min-h-[calc(100vh-277px)]">
            <main className="max-w-6xl mx-auto px-4 py-12">
                <HeroCards />
                <div className="mt-10">
                    <AdsenseSlot slot={import.meta.env.VITE_ADSENSE_SLOT_HOME} />
                </div>
            </main>
        </div>
    );
}
