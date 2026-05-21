import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Spotlight from './sections/Spotlight'; // Import baru
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Certificates from './sections/Certificates';
import Contact from './sections/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import CustomCursor from './components/CustomCursor'; // Import ini


function App() {
  return (
    <div className="min-h-screen bg-dark-bg selection:bg-primary selection:text-white font-sans antialiased text-slate-300">
      <CustomCursor /> {/* Pasang di sini */}
      <Navbar />
      <main>
        <Hero />
        <About />
        <Spotlight />
        <Experience />
        <Projects />
        <Certificates />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;