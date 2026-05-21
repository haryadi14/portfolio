import { motion } from 'framer-motion';
import { projects } from '../data/portfolioData';
import { ExternalLink } from 'lucide-react';

const Projects = () => {
  return (
    <section id="projects" className="py-32 px-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-end mb-20">
          <h2 className="text-5xl font-black text-white tracking-tighter italic">FEATURED<br/>PROJECTS</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group bg-dark-card rounded-[3rem] overflow-hidden border border-white/5 hover:border-primary/30 transition-all duration-500 shadow-2xl"
            >
              <div className="aspect-video relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" 
                />
              </div>
              
              <div className="p-12">
                <div className="flex gap-3 mb-6">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[9px] font-black uppercase text-primary border border-primary/20 px-4 py-1.5 rounded-full tracking-widest">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-3xl font-black text-white mb-4 tracking-tight uppercase">{project.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-8">{project.desc}</p>
                <a href={project.link} className="inline-flex items-center gap-2 text-xs font-black text-white hover:text-primary transition-colors uppercase tracking-[0.2em]">
                  View Details <ExternalLink size={14} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;