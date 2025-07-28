import { useEffect, useState } from "react";

const ThemeToggle = () => {

    const [theme, setTheme] = useState(
        localStorage.getItem('theme') || 'light'
    );

    useEffect(() => {
        document.documentElement.className = theme;
        localStorage.setItem('theme', theme)

    }, [theme])

    return (
        <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            className="p-2 px-3 rounded-full bg-gray-200 dark:bg-gray-700 text-xl flex items-center justify-center gap-2.5 text-black font-medium dark:text-white cursor-pointer">
            {theme === "light" ? "🌞 Light" : "🌙 Dark"}
        </button>
    );
};

export default ThemeToggle;