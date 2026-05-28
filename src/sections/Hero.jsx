import { motion } from 'framer-motion';
import { personalInfo } from '../data/portfolioData';
import { ArrowDownRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center px-8 overflow-hidden bg-dark-bg">
      {/* Background Glow - Diperhalus agar tidak menutupi foto */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px] animate-pulse-slow"></div>

      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* SISI KIRI: KONTEN TEKS (Span 7) */}
          <div className="lg:col-span-7">
            <motion.div 
              initial={{ opacity: 0, x: -30 }} 
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-primary font-black uppercase tracking-[0.5em] mb-6 text-[8px]">
                Based in Indonesia • Remote Ready
              </p>
              
              <h1 className="text-5xl md:text-8xl font-black text-white leading-[0.9] tracking-tighter mb-8 uppercase italic">
                BRIDGING <br />
                <span className="text-slate-800">CODE AND</span> <br />
                INFRASTRUCTURE.
              </h1>

              <div className="max-w-lg">
                <p className="text-lg text-slate-400 leading-relaxed mb-12">
                  I'm <span className="text-white font-bold">{personalInfo.name}</span>, {personalInfo.bio}
                </p>

                <a href="#about" className="bg-white text-dark-bg px-10 py-5 rounded-full font-black inline-flex items-center gap-3 hover:scale-105 active:scale-95 transition-all shadow-2xl">
                  To get to know me better <ArrowDownRight size={20} />
                </a>
              </div>
            </motion.div>
          </div>

          {/* SISI KANAN: FOTO (Span 5) */}
          <div className="lg:col-span-5 hidden lg:block">
            <motion.div
              initial={{ opacity: 0, scale: 0.8, x: 50 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative"
            >
              {/* Dekorasi Bingkai Cahaya */}
              <div className="absolute -inset-4 border border-white/5 rounded-[4rem] -z-10"></div>
              <div className="absolute -inset-8 border border-white/5 rounded-[5rem] -z-10"></div>
              
              {/* Frame Foto Utama */}
              <div className="relative aspect-[4/5] rounded-[3.5rem] overflow-hidden border-2 border-white/10 shadow-2xl shadow-primary/20 group">
                <img 
                  src={personalInfo.heroImage} 
                  alt={personalInfo.name} 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
                />
                
                {/* Overlay Gradient Halus */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/80 via-transparent to-transparent opacity-60"></div>
                
                {/* Nama Kecil di Pojok Foto */}
                <div className="absolute bottom-8 left-8">
                   <p className="text-[10px] font-black text-white/40 uppercase tracking-[0.4em] rotate-90 origin-left">
                     HARYADI YUSUF
                   </p>
                </div>
              </div>

              {/* Aksen Elemen Melayang (Floating UI) */}
              <motion.div 
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -right-6 bg-dark-card border border-white/10 p-4 rounded-2xl shadow-xl backdrop-blur-md"
              >
                <div className="flex items-center gap-3">
                   <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                   <span className="text-[9px] font-black text-slate-300 uppercase tracking-widest">Available for Hire</span>
                </div>
              </motion.div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;