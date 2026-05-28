import { motion } from 'framer-motion';
import { personalInfo } from '../data/portfolioData';
import { ArrowDownRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center px-6 lg:px-12 overflow-hidden bg-dark-bg">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] animate-pulse-slow"></div>

      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* SISI KIRI: TEKS */}
          <div className="lg:col-span-8 xl:col-span-7">
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-primary font-black uppercase tracking-[0.4em] mb-4 text-[10px]">
                Based in Indonesia • Remote Ready
              </p>
              
              {/* PERBAIKAN: Font size dikecilkan sedikit & leading ditambah agar tidak bertumpuk */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-black text-white leading-[1.1] tracking-tighter mb-8 uppercase italic">
                BRIDGING <br />
                <span className="text-slate-800">CODE AND</span> <br />
                INFRASTRUCTURE.
              </h1>

              <div className="max-w-lg">
                <p className="text-base md:text-lg text-slate-400 leading-relaxed mb-10">
                  I'm <span className="text-white font-bold">{personalInfo.name}</span>, {personalInfo.bio}
                </p>

                <a href="#about" className="bg-white text-dark-bg px-8 py-4 rounded-full font-black inline-flex items-center gap-3 hover:scale-105 active:scale-95 transition-all shadow-2xl text-sm">
                  TO GET TO KNOW ME BETTER <ArrowDownRight size={18} />
                </a>
              </div>
            </motion.div>
          </div>

          {/* SISI KANAN: FOTO */}
          <div className="lg:col-span-4 xl:col-span-5 hidden lg:block">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative"
            >
              <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden border-2 border-white/10 shadow-2xl group">
                <img 
                  src={personalInfo.heroImage} 
                  alt={personalInfo.name} 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/80 via-transparent to-transparent opacity-60"></div>
              </div>

              {/* Float Badge */}
              <motion.div 
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 bg-dark-card border border-white/10 p-3 rounded-2xl shadow-xl backdrop-blur-md"
              >
                <div className="flex items-center gap-2">
                   <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                   <span className="text-[8px] font-black text-slate-300 uppercase tracking-widest">Available for Hire</span>
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