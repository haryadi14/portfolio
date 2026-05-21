import { motion } from 'framer-motion';
import { featuredVenture } from '../data/portfolioData';
import { ExternalLink, Rocket, TrendingUp, Users } from 'lucide-react';

const Spotlight = () => {
  return (
    <section id="jokas" className="py-32 px-8 bg-dark-bg relative overflow-hidden">
      <div className="container mx-auto">
        {/* Header Section */}
        <div className="flex items-center gap-3 text-primary mb-12">
          <div className="h-[1px] w-12 bg-primary"></div>
          <span className="text-[10px] font-black uppercase tracking-[0.4em]">Featured Venture</span>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative bg-dark-card rounded-[4rem] border border-white/5 overflow-hidden group shadow-2xl"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            
            {/* Sisi Teks */}
            <div className="p-12 md:p-20 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-primary/20 p-2 rounded-lg text-primary">
                  <Rocket size={20} />
                </div>
                <span className="text-xs font-black text-slate-500 uppercase tracking-widest italic">Est. 2023</span>
              </div>

              <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-8 italic uppercase leading-none">
                {featuredVenture.name.split(' ')[0]} <br />
                <span className="text-slate-800">{featuredVenture.name.split(' ')[1]}</span>
              </h2>

              <p className="text-slate-400 text-lg leading-relaxed mb-10 max-w-md">
                {featuredVenture.desc}
              </p>

              {/* Stats Mini */}
              <div className="grid grid-cols-2 gap-6 mb-12 border-y border-white/5 py-8">
                <div className="flex items-center gap-4">
                  <TrendingUp className="text-primary" />
                  <div>
                    <p className="text-xl font-black text-white leading-none">{featuredVenture.stats.split(' ')[0]}</p>
                    <p className="text-[8px] font-bold text-slate-500 uppercase tracking-widest mt-1">Total Sales</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Users className="text-primary" />
                  <div>
                    <p className="text-xl font-black text-white leading-none">98%</p>
                    <p className="text-[8px] font-bold text-slate-500 uppercase tracking-widest mt-1">Satisfaction</p>
                  </div>
                </div>
              </div>

              <a 
                href={featuredVenture.link} 
                target="_blank"
                className="inline-flex items-center gap-3 text-xs font-black text-white hover:text-primary transition-all uppercase tracking-[0.3em]"
              >
                Visit Jokas <ExternalLink size={16} />
              </a>
            </div>

            {/* Sisi Gambar */}
            <div className="relative h-64 lg:h-auto overflow-hidden">
               <img 
                 src={featuredVenture.image} 
                 className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000" 
                 alt="Jokas Platform"
               />
               <div className="absolute inset-0 bg-gradient-to-r from-dark-card via-transparent to-transparent hidden lg:block"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Spotlight;