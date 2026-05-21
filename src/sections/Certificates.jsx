import { motion } from 'framer-motion';
import { certificates } from '../data/portfolioData';
import { Award, ExternalLink, Calendar, ShieldCheck } from 'lucide-react';

const Certificates = () => {
  return (
    <section id="certificates" className="py-32 px-8 bg-dark-bg relative overflow-hidden">
      {/* Dekorasi Cahaya di Background */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[120px] -z-0"></div>

      <div className="container mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-20">
          <div>
            <div className="flex items-center gap-3 text-primary mb-4">
              <div className="h-[1px] w-12 bg-primary"></div>
              <span className="text-[10px] font-black uppercase tracking-[0.4em]">Validation</span>
            </div>
            <h2 className="text-5xl font-black text-white tracking-tighter italic uppercase">
              Certifications.
            </h2>
          </div>
          <p className="text-slate-500 font-bold text-sm max-w-xs leading-relaxed">
            A collection of professional certifications that validate my technical competency.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, i) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative bg-dark-card rounded-[2.5rem] border border-white/5 p-4 hover:border-primary/40 transition-all duration-500 shadow-2xl"
            >
              {/* Image Preview */}
              <div className="relative aspect-[16/10] rounded-[2rem] overflow-hidden mb-6">
                <img 
                  src={cert.image} 
                  alt={cert.title} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-dark-bg/20 group-hover:bg-transparent transition-all"></div>
                
                {/* Badge Issuer Logo Sederhana */}
                <div className="absolute top-4 left-4 bg-dark-bg/80 backdrop-blur-md p-2 rounded-xl border border-white/10">
                   <Award size={20} className="text-primary" />
                </div>
              </div>

              {/* Content */}
              <div className="px-4 pb-6">
                <div className="flex items-center gap-2 mb-3">
                   <ShieldCheck size={14} className="text-primary/60" />
                   <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{cert.issuer}</span>
                </div>
                
                <h3 className="text-xl font-black text-white mb-6 leading-tight group-hover:text-primary transition-colors">
                  {cert.title}
                </h3>

                <div className="flex items-center justify-between pt-6 border-t border-white/5">
                  <div className="flex items-center gap-2 text-slate-500">
                    <Calendar size={12} />
                    <span className="text-[10px] font-bold">{cert.date}</span>
                  </div>
                  
                  <a 
                    href={cert.link} 
                    target="_blank" 
                    className="flex items-center gap-2 text-[10px] font-black text-white hover:text-primary transition-all uppercase tracking-tighter"
                  >
                    Verify Credential <ExternalLink size={14} />
                  </a>
                </div>
              </div>

              {/* Efek Cahaya Saat Hover */}
              <div className="absolute -inset-px rounded-[2.5rem] bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none -z-10"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;