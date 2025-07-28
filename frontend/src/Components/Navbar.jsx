import { Link, NavLink } from "react-router";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const link = "px-3 py-2 text-black dark:text-white text-xl font-semibold cursor-pointer";
  const active = "px-3 py-2 text-red-500 font-semibold text-xl cursor-pointer";

  return (
    <header className="border-b  dark:border-[#364153] w-full min-h-[80px] h-full flex items-center justify-center">
      <div className="container mx-auto flex items-center justify-between gap-10">
        <Link to="/" className="text-xl font-bold dark:text-white text-black">VideoSnap</Link>
        <nav className=" flex items-center justify-between px-4 h-16 cursor-pointer">
          <div className="flex items-center gap-2 text-sm">
            <NavLink to="/downloader/url" className={({ isActive }) => isActive ? active : link}>Youtube Downloader</NavLink>
            <NavLink to="/converter" className={({ isActive }) => isActive ? active : link}>Youtube Converter</NavLink>
            <NavLink to="/to-mp3" className={({ isActive }) => isActive ? active : link}>Youtube to MP3</NavLink>
          </div>
        </nav>

        <ThemeToggle />

      </div>
    </header>
  );
}
