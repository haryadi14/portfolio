import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { aboutMe, profileData, skills } from '../data/portfolioData';
import { 
  User, 
  Briefcase, 
  MapPin, 
  Mail, 
  Phone, 
  Globe, 
  Code2, 
  ExternalLink,
  Cake,
  GraduationCap
} from 'lucide-react';

const About = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    if (aboutMe.images.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % aboutMe.images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="about" className="py-32 px-8 bg-dark-bg relative">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* SISI KIRI: SLIDESHOW & STATS */}
          <div className="lg:col-span-4 space-y-8 lg:sticky lg:top-32">
            <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl bg-dark-card group">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentImage}
                  src={aboutMe.images[currentImage]}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.8 }}
                  className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  alt="Slideshow"
                />
              </AnimatePresence>
              <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
                {aboutMe.images.map((_, i) => (
                  <div key={i} className={`h-1 rounded-full transition-all duration-300 ${i === currentImage ? "w-8 bg-primary" : "w-2 bg-white/20"}`} />
                ))}
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              {aboutMe.stats.map((stat, i) => (
                <div key={i} className="bg-dark-card p-5 rounded-3xl border border-white/5 text-center shadow-xl">
                  <p className="text-xl font-black text-white mb-1">{stat.value}</p>
                  <p className="text-[7px] text-slate-500 uppercase font-bold tracking-widest">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* SISI KANAN: FORMULIR PROFIL LENGKAP */}
          <div className="lg:col-span-8">
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="flex items-center gap-3 text-primary mb-6">
                <div className="h-[1px] w-12 bg-primary"></div>
                <span className="text-[10px] font-black uppercase tracking-[0.4em]">Personal Info</span>
              </div>

              <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-10 italic uppercase leading-none">
                Curriculum <span className="text-slate-700">Vitae.</span>
              </h2>

              <div className="bg-dark-card rounded-[3rem] border border-white/5 p-8 md:p-12 space-y-10 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -mr-32 -mt-32 blur-3xl"></div>
                
                {/* Section 1: Basic Bio */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="flex items-start gap-5">
                        <div className="bg-primary/10 p-3 rounded-xl text-primary"><User size={20}/></div>
                        <div>
                            <p className="text-[9px] font-black text-slate-500 uppercase tracking-widest mb-1">Full Name</p>
                            <p className="text-lg font-bold text-white tracking-tight">{profileData.fullName}</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-5">
                        <div className="bg-primary/10 p-3 rounded-xl text-primary"><Cake size={20}/></div>
                        <div>
                            <p className="text-[9px] font-black text-slate-500 uppercase tracking-widest mb-1">Birthday</p>
                            <p className="text-lg font-bold text-slate-300 tracking-tight">{profileData.birthday}</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-5">
                        <div className="bg-primary/10 p-3 rounded-xl text-primary"><Phone size={20}/></div>
                        <div>
                            <p className="text-[9px] font-black text-slate-500 uppercase tracking-widest mb-1">Phone Number</p>
                            <p className="text-lg font-bold text-slate-300 tracking-tight">{profileData.phoneNumber}</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-5">
                        <div className="bg-primary/10 p-3 rounded-xl text-primary"><MapPin size={20}/></div>
                        <div>
                            <p className="text-[9px] font-black text-slate-500 uppercase tracking-widest mb-1">Location</p>
                            <p className="text-lg font-bold text-slate-300 tracking-tight">{profileData.location.city}, {profileData.location.country}</p>
                        </div>
                    </div>
                </div>

                {/* Section 2: Professional Title */}
                <div className="flex items-start gap-5 pt-6 border-t border-white/5">
                  <div className="bg-primary/10 p-3 rounded-xl text-primary"><Briefcase size={20} /></div>
                  <div className="w-full">
                    <p className="text-[9px] font-black text-slate-500 uppercase tracking-widest mb-3">Specialization</p>
                    <div className="flex flex-wrap gap-2">
                      {profileData.professionalTitle.map((title, i) => (
                        <span key={i} className="text-[10px] font-bold text-slate-300 bg-white/5 px-3 py-1.5 rounded-lg border border-white/5 uppercase tracking-wider">{title}</span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Section 3: Education */}
                <div className="flex items-start gap-5 pt-6 border-t border-white/5">
                  <div className="bg-primary/10 p-3 rounded-xl text-primary"><GraduationCap size={20} /></div>
                  <div className="w-full">
                    <p className="text-[9px] font-black text-slate-500 uppercase tracking-widest mb-4">Education</p>
                    <div className="space-y-4">
                      {profileData.education.map((edu, i) => (
                        <div key={i} className="relative pl-4 border-l-2 border-primary/30">
                          <p className="text-sm font-black text-white uppercase tracking-tight">{edu.degree}</p>
                          <p className="text-xs text-slate-400 font-bold">{edu.institution}</p>
                          <p className="text-[10px] text-primary/60 font-black mt-1 tracking-widest">{edu.year}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Section 4: Social Links */}
                <div className="pt-8 border-t border-white/5 flex flex-wrap gap-4">
                  <a href={`mailto:${profileData.contactAndLinks.email}`} className="flex-1 min-w-[140px] flex items-center justify-center gap-3 bg-white/5 hover:bg-primary/20 p-4 rounded-2xl border border-white/5 transition-all group">
                    <Mail size={16} className="text-primary group-hover:scale-110 transition-transform" />
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-300">Email Me</span>
                  </a>
                  <a href={profileData.contactAndLinks.linkedin} target="_blank" className="flex-1 min-w-[140px] flex items-center justify-center gap-3 bg-white/5 hover:bg-primary/20 p-4 rounded-2xl border border-white/5 transition-all group">
                    <Globe size={16} className="text-primary group-hover:scale-110 transition-transform" />
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-300">LinkedIn</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;