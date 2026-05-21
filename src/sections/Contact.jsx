import { motion } from 'framer-motion';
import { contactInfo, profileData } from '../data/portfolioData';
import { Send, Mail, Camera } from 'lucide-react'; // Gunakan Camera sebagai pengganti Instagram

const Contact = () => {
    return (
        <section id="contact" className="py-32 px-8 bg-dark-bg relative overflow-hidden">
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-primary/20 rounded-full blur-[120px] -z-0"></div>

            <div className="container mx-auto text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-5xl md:text-8xl font-black text-white tracking-tighter mb-8 uppercase italic leading-none">
                        {contactInfo.ctaTitle} <br />
                        <span className="text-slate-800">LET'S TALK.</span>
                    </h2>

                    <p className="text-slate-400 text-lg max-w-xl mx-auto mb-12">
                        {contactInfo.ctaSubtitle}
                    </p>

                    {/* Grid Button yang diperbarui */}
                    <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
                        <a
                            href={`mailto:${profileData.contactAndLinks.email}`}
                            className="bg-white text-dark-bg px-8 md:px-12 py-5 md:py-6 rounded-full font-black text-xs md:text-sm tracking-widest flex items-center gap-3 hover:scale-105 active:scale-95 transition-all shadow-2xl"
                        >
                            SEND EMAIL <Send size={18} />
                        </a>

                        <a
                            href={`https://wa.me/${profileData.contactAndLinks.phone.replace(/[^0-9]/g, '')}`}
                            target="_blank"
                            className="bg-dark-card text-white border border-white/10 px-8 md:px-12 py-5 md:py-6 rounded-full font-black text-xs md:text-sm tracking-widest flex items-center gap-3 hover:bg-white/5 transition-all"
                        >
                            WHATSAPP <Mail size={18} />
                        </a>

                        {/* TOMBOL INSTAGRAM BARU */}
                        <a
                            href={ "https://www.instagram.com/haryadiiyusuf/" // <-- PASTIKAN URL INI BENAR
} // <-- PEMANGGILAN HARUS SEPERTI INI
                            target="_blank"
                            rel="noopener noreferrer" // Tambahkan ini untuk keamanan saat membuka tab baru
                            className="bg-dark-card text-white border border-white/10 px-8 md:px-12 py-5 md:py-6 rounded-full font-black text-xs md:text-sm tracking-widest flex items-center gap-3 hover:bg-white/5 transition-all"
                        >
                            INSTAGRAM <Camera size={18} />
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;