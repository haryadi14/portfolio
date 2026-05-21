import { profileData } from '../data/portfolioData';

const Footer = () => {
  return (
    <footer className="py-12 px-8 border-t border-white/5 bg-dark-bg">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
        <div>
          <h4 className="text-white font-black text-lg italic tracking-tighter">HARYADI YUSUF.</h4>
          <p className="text-slate-600 text-[10px] font-bold uppercase tracking-widest mt-1">Available for freelance & full-time</p>
        </div>
        
        <div className="flex gap-8 text-[10px] font-black text-slate-400 uppercase tracking-widest">
          <a href={profileData.contactAndLinks.linkedin} className="hover:text-primary transition-colors">LinkedIn</a>
          <a href={profileData.contactAndLinks.github} className="hover:text-primary transition-colors">GitHub</a>
          <a href={`mailto:${profileData.contactAndLinks.email}`} className="hover:text-primary transition-colors">Email</a>
          
        </div>

        <p className="text-slate-600 text-[9px] font-bold">
          © {new Date().getFullYear()} ALL RIGHTS RESERVED.
        </p>
      </div>
    </footer>
  );
};

export default Footer;