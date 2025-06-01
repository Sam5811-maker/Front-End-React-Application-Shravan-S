import Navbar from './components/Navbar/Navbar';
import './App.css';
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Home from './components/Pages/Home';
import Prints from './components/Pages/Prints';
import Photographer from './components/Pages/Photographer';
import Gear from './components/Pages/Gear';
import About from './components/Pages/About';
import Booking from './components/Pages/Booking';
import Footer from './components/Shared/Footer';
import './components/Shared/FooterStylingSheet.css';
import './components/Pages/HomeStyleSheet.css';
import './components/Pages/PhotographerStyleSheet.css';
import './components/Pages/BookingStylingSheet.css';
import Contact from './components/Pages/Contact';


const App = () => {
  return (
    <div className="app-page">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/prints" element={<Prints />} />
          <Route path="/photographer" element={<Photographer />} />
          <Route path="/gear" element={<Gear />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
  );
};

export default App;