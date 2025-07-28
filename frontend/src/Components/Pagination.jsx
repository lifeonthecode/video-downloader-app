export default function Pagination({ page, total, onChange }) {
    if (total <= 1) return null;
    const pages = Array.from({ length: total }, (_, i) => i + 1);
    return (
        <div className="flex gap-2 justify-center mt-6">
            {pages.map(p => (
                <button
                    key={p}
                    onClick={() => onChange(p)}
                    className={`px-3 py-1 rounded border dark:border-white ${p === page ? "bg-black text-white dark:text-black" : ""}`}
                >
                    {p}
                </button>
            ))}
        </div>
    );
}
