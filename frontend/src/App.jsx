import { BrowserRouter, Route, Routes } from 'react-router'
import UrlDownload from './Pages/UrlDownload';
import PlaylistDownload from './Pages/PlaylistDownload';
import ToMp3 from './Pages/ToMp3';
import Converter from './Pages/Converter';
import Home from './Pages/Home';
import Footer from './Components/Footer';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Navbar from './Components/Navbar';

function App() {

  return (
    <>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/downloader/url' element={<UrlDownload/>} />
          <Route path='/downloader/playlist' element={<PlaylistDownload/>} />
          <Route path='/to-mp3' element={<ToMp3/>} />
          <Route path='/converter' element={<Converter/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/contact' element={<Contact/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
