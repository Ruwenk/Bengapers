import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'  
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Persa from './pages/Persa.jsx'
import Bengali from './pages/Bengali.jsx'
import Contacto from './pages/Contacto.jsx'
import "./styles/App.css"
import "@fortawesome/fontawesome-free/css/all.min.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/persa" element={<Persa />} />
          <Route path="/bengali" element={<Bengali />} />
          <Route path="/contacto" element={<Contacto />} /> 
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App