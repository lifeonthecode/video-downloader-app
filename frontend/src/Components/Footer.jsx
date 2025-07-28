import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6 mt-10">
      <div className="container mx-auto px-4 text-center md:text-left md:flex md:items-center md:justify-between">
        {/* Brand */}
        <div className="mb-4 md:mb-0">
          <h2 className="text-xl font-bold text-white">VideoSnap</h2>
          <p className="text-sm">Fast & Free YouTube Converter</p>
        </div>

        {/* Links */}
        <div className="space-x-4 mb-4 md:mb-0">
          <Link to={'/'} className="hover:text-blue-400 transition-colors">
            Home
          </Link>
          <Link to={'/about'} className="hover:text-blue-400 transition-colors">
            About
          </Link>
          <Link to={'/contact'} className="hover:text-blue-400 transition-colors">
            Contact
          </Link>
        </div>

        {/* Social Icons */}
        <div className="space-x-4">
          <Link
            to={"https://github.com/lifeonthecode"}
            target="_black"
            className="hover:text-blue-400 transition-colors">GitHub</Link>

          <Link to={"https://www.youtube.com/@lifeonthecode"}
            target="_black"
            className="hover:text-blue-400 transition-colors"> Youtube
          </Link>


        </div>
      </div>

      <div className="text-center text-sm mt-6 border-t border-gray-700 pt-4">
        &copy; {new Date().getFullYear()} Video Downloader. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
