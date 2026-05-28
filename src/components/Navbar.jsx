import { useState, useEffect } from 'react';
import { personalInfo } from '../data/portfolioData';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'py-4 bg-dark-bg/80 backdrop-blur-xl border-b border-white/5' : 'py-8 bg-transparent'
    }`}>
      <div className="container mx-auto px-8 flex justify-between items-center">
        <a href="#" className="text-xl font-black text-white tracking-tighter italic">
          {personalInfo.name.toUpperCase()}.
        </a>
        <div className="hidden md:flex gap-6 xl:gap-10"> {/* Gap dikecilkan sedikit */}
  {['About', 'Jokas', 'Experience', 'Projects', 'Certificates', 'Contact'].map((item) => (
    <a 
      key={item} 
      href={`#${item.toLowerCase()}`} 
      className="text-[9px] xl:text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-primary transition-colors"
    >
      {item}
    </a>
  ))}
</div>
      </div>
    </nav>
  );
};

export default Navbar;