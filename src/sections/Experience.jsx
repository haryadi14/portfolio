import { motion } from 'framer-motion';
import { experiences } from '../data/portfolioData';
import { Briefcase, Calendar, MapPin, ChevronRight } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="py-32 px-8 bg-dark-bg relative overflow-hidden">
      <div className="container mx-auto relative z-10">
        <div className="flex items-center gap-3 text-primary mb-16">
          <div className="h-[1px] w-12 bg-primary"></div>
          <span className="text-[10px] font-black uppercase tracking-[0.4em]">Career History</span>
        </div>

        <div className="space-y-20">
          {experiences.map((exp, i) => (
            <motion.div 
              key={exp.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 group"
            >
              {/* SISI KIRI: Periode & Tipe */}
              <div className="lg:col-span-3">
                <div className="sticky top-32">
                  <div className="flex items-center gap-2 text-primary mb-2">
                    <Calendar size={14} />
                    <span className="text-xs font-black uppercase tracking-widest">{exp.period}</span>
                  </div>
                  <p className="text-slate-500 font-bold text-[10px] uppercase tracking-tighter mb-4">{exp.type}</p>
                  
                  {/* Skill Tags */}
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, index) => (
                      <span key={index} className="text-[8px] font-black py-1 px-2 bg-white/5 border border-white/10 text-slate-400 rounded-md">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* SISI KANAN: Detail Pekerjaan */}
              <div className="lg:col-span-9 bg-dark-card/50 p-8 md:p-12 rounded-[3rem] border border-white/5 hover:border-primary/20 transition-all shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 blur-3xl group-hover:bg-primary/10 transition-colors"></div>
                
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-black text-white italic uppercase tracking-tighter group-hover:text-primary transition-colors">
                      {exp.role}
                    </h3>
                    <div className="flex items-center gap-3 mt-2 text-slate-400">
                      <span className="font-bold text-sm tracking-widest uppercase">{exp.company}</span>
                      <span className="text-slate-700">•</span>
                      <div className="flex items-center gap-1 text-[10px] font-bold">
                        <MapPin size={10} />
                        {exp.location}
                      </div>
                    </div>
                  </div>
                  <div className="bg-primary/10 p-4 rounded-2xl text-primary hidden md:block">
                    <Briefcase size={24} />
                  </div>
                </div>

                <ul className="space-y-4">
                  {exp.description.map((point, index) => (
                    <li key={index} className="flex items-start gap-4 text-slate-400 group/item">
                      <div className="mt-1.5 min-w-[6px] h-[6px] rounded-full bg-primary/40 group-hover/item:bg-primary transition-colors"></div>
                      <p className="text-sm md:text-base leading-relaxed group-hover/item:text-slate-200 transition-colors">
                        {point}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;