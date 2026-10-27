import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import PageTitle from './components/PageTitle';
import Home from './pages/Home';
import MissionVision from './pages/MissionVision';
import BoardOfDirectors from './pages/BoardOfDirectors';
import About from './pages/About';
import Hospitality from './pages/Hospitality';
import Aviation from './pages/Aviation';
import Hydropower from './pages/Hydropower';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div>
      <ScrollToTop />
      <PageTitle />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about/about" element={<About />} />
        <Route path="/about/mission-and-vision" element={<MissionVision />} />
        <Route path="/about/board-of-directors" element={<BoardOfDirectors />} />
        <Route path="/portfolio/hospitality" element={<Hospitality />} />
        <Route path="/portfolio/aviation-industry" element={<Aviation />} />
        <Route path="/portfolio/hydropower" element={<Hydropower />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App;