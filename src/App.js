import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Homepage from './Components/Homepage';
import Working from './Components/Working';
import WhatIs from './Components/WhatIs';
import Footer from './Components/Footer';
import About from './Components/About';
import Contact from './Components/Contact';
import Privacy from './Components/Privacy';
import Terms from './Components/Terms';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div >
      <Routes>

          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          
        </Routes>
     
    </div>
    </Router>
  );
}

export default App;
