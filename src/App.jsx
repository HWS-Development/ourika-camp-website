import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import RoomsPage from './pages/RoomsPage'
import GalleryPage from './pages/GalleryPage';


export default function App() {
  return (
    <div className="font-sans text-brand-black bg-white">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rooms" element={<RoomsPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
      </Routes>
      <Footer />
    </div>
  )
}
