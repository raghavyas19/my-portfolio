import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from '../src/components/Navbar';
import Footer from '../src/components/Footer';
import Home from '../src/pages/Home';
import About from '../src/pages/About';
import Projects from '../src/pages/Projects';
import Experience from '../src/pages/Experience';
import Education from '../src/pages/Education';
import Contact from '../src/pages/Contact';
import Resume from '../src/pages/Resume';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="d-flex flex-column vh-100 bg-dark">
        <Navbar />
        <main className="flex-grow-1 pt-5" style={{ paddingTop: "70px" }}>
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/education" element={<Education />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/resume" element={<Resume />} />
            </Routes>
          </AnimatePresence>
        </main>
        <Footer className="mt-auto" />
      </div>
    </Router>
  );
}

export default App;
