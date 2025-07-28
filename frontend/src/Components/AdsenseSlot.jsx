import { useEffect, useRef } from "react";

export default function AdsenseSlot({ slot, style = { display: "block" }, format = "auto", responsive = "true" }) {
    const adRef = useRef(null);
    useEffect(() => {
        try {
            if (window.adsbygoogle && adRef.current) {
                (window.adsbygoogle = window.adsbygoogle || []).push({});
            }
        } catch {
            // Ignore Adsense push errors
        }
    }, []);
    return (
        <ins
            className="adsbygoogle"
            style={style}
            data-ad-client={import.meta.env.VITE_ADSENSE_CLIENT}
            data-ad-slot={slot}
            data-ad-format={format}
            data-full-width-responsive={responsive}
            ref={adRef}
        />
    );
}
