import {
  Code2, Globe, Database,
  Layout, Terminal, Server
} from 'lucide-react';

export const personalInfo = {
  name: "Haryadi Yusuf",
  role: "Fullstack Web Developer",
  // Gunakan foto formal/profesional Anda di sini
  heroImage: "https://ik.imagekit.io/ciev6dpgs/portfolio/me2.jpg?updatedAt=1779278420918", 
  bio: "I build efficient web applications, manage network infrastructure, and implement smart data solutions.",
  email: "haryadiyusuf61@gmail.com",
    instagram: "https://www.instagram.com/haryadiiyusuf/" // <-- PASTIKAN URL INI BENAR
};

export const skills = [
  { name: "React / Next.js", icon: Code2, color: "text-blue-400" },
  { name: "Node.js / Express", icon: Terminal, color: "text-green-400" },
  { name: "PostgreSQL / Supabase", icon: Database, color: "text-emerald-400" },
  { name: "Tailwind CSS", icon: Globe, color: "text-cyan-400" },
  { name: "TypeScript", icon: Server, color: "text-blue-500" },
];

export const projects = [
  {
    id: 1,
    title: "GO ABSEN",
    desc: "A geofencing-based field attendance system with selfie proof. Utilizing the Haversine formula for accuracy within a 500m radius.",
    tags: ["TypeScript ", "Supabase", "Geolocation"],
    image: "https://ik.imagekit.io/ciev6dpgs/portfolio/absen.png",
    link: "https://absensi-six-rho.vercel.app/"
  },
  {
    id: 2,
    title: " KOSAN PRO",
    desc: "Modernization of the Boarding House Booking Application platform ",
    tags: ["React", "Node js", "Mysql"],
    image: "https://ik.imagekit.io/ciev6dpgs/portfolio/kosan.png",
    link: "https://kosandani.netlify.app/"
  },
  {
    id: 3,
    title: " Landing Page Joki Tugas",
    desc: "Task Jockey Landing Page ",
    tags: ["React", "Vite js"],
    image: "https://ik.imagekit.io/ciev6dpgs/portfolio/jokas.png",
    link: "https://jokasweb.vercel.app/"
  },
  {
    id: 4,
    title: " E-Berkas LLDIKTI IV",
    desc: "File Digitization Application ",
    tags: ["Codeigneter", "PHP"],
    image: "https://ik.imagekit.io/ciev6dpgs/portfolio/eberkas.png",
    link: "https://eberkas.lldikti4.id/"
  },
  {
    id: 5,
    title: " SISTEM OBJECT DETECTION  ANDROID",
    desc: "BRAIN TUMOR OBJECT DETECTION SYSTEM WITH MRI SCAN METHOD USING EFFICIENTNET-LITE0 BASED ON ANDROID",
    tags: ["Dart", "TFLITE","Python"],
    image: "https://ik.imagekit.io/ciev6dpgs/portfolio/Picture1.jpg",
    link: "https://github.com/haryadi14/aplikasi-Objek-deteksi-Mobile"
  },
  {
    id: 6,
    title: " Backward Chaining Headache Detection",
    desc: "SISTEM Backward Chaining Headache Detection",
    tags: ["HTML", "JS"],
    image: "https://ik.imagekit.io/ciev6dpgs/portfolio/pakar.png",
    link: "https://github.com/haryadi14/Deteksi-Sakit-Kepala-Backward-Chaining"
  },
  {
    id: 7,
    title: " LLDIKTI IV Complaint Application",
    desc: "LLDIKTI IV Complaint Application",
    tags: ["Mysql", "PHP", "CodeIgniter"],
    image: "https://ik.imagekit.io/ciev6dpgs/portfolio/pengaduan.png",
    link: "  pengaduan.siakad-lldikti4.id"
  },
  {
    id: 8,
    title: " Aplikasi Go-Bus",
    desc: "Web-Based Bus Ticket Reservation ",
    tags: ["PHP", "MYSQL,'Codeigniter"],
    image: "https://ik.imagekit.io/ciev6dpgs/portfolio/gobus.png",
    link: " https://github.com/haryadi14/proyek2fix"
  },
  {
    id: 9,
    title: " Mouse Control Berbasis Eye Tracking Sebagai Alat Bantu Disabilitas",
    desc: " The eye tracking system in this book is intended for people with disabilities and can be integrated into society, but the eye tracking mouse control system can also be used by the general public. ",
    tags: ["Python"],
    image: "https://ik.imagekit.io/ciev6dpgs/portfolio/1.png",
    link: " https://katalog.bukupedia.co.id/2023/02/mouse-control-berbasis-eye-tracking.html"
  },


];
export const aboutMe = {
  images: [
    "https://ik.imagekit.io/ciev6dpgs/portfolio/me2.jpg", // Foto 1
    "https://ik.imagekit.io/ciev6dpgs/portfolio/m3.jpeg", // Foto 2 (Workspace)
    "https://ik.imagekit.io/ciev6dpgs/portfolio/m2.jpeg",
    "https://ik.imagekit.io/ciev6dpgs/portfolio/hoby.jpeg" // Foto 3 (Coding)
  ],
  story: "Full Name: Haryadi Yusuf   Professional Title: Fullstack Web Developer | Network Engineer | Data & AI Specialist   Location: Bandung, West Java, Indonesia  ",
  stats: [
    { label: "Tahun Pengalaman", value: "1" },
    { label: "Proyek Selesai", value: "15+" },
    { label: "Teknologi Dikuasai", value: "10+" },
  ]

};
export const profileData = {
  fullName: "Haryadi Yusuf",
  birthday: "14 MARCH 2002", // Contoh tanggal lahir
  phoneNumber: "+62 851-3727-0793",
  professionalTitle: [
    "Fullstack Web Developer",
    "Network Engineer",
    "Data & AI Specialist"
  ],
  education: [
    {
      degree: "D4 Teknik Informatika",
      institution: "Universitas Logistik & Bisnis Internasional (ULBI)",
      year: "2020 - 2024"
    },
    {
      degree: "Teknik Komputer & Jaringan",
      institution: "SMKN 2 BALEENDAH ",
      year: "2017 - 2020"
    },],
  location: {
    city: "Bandung",
    province: "West Java",
    country: "Indonesia"
  },
  contactAndLinks: {
    phone: "+6285137270793",
    email: "haryadiyusuf61@gmail.com",
    linkedin: "https://www.linkedin.com/in/haryadi-yusuf-491a501a4/",
    github: "https://haryadi14.github.io/portofolio/"
  }
};
// src/data/portfolioData.js

export const certificates = [
  {
    id: 1,
    title: "TOEIC",
    issuer: "PUSAT BAHASA ULBI",
    date: " 2024",
    idCredential: "CERT-12345678",
    image: "https://ik.imagekit.io/ciev6dpgs/portfolio/sertifikat/img257%20(1).jpg",
    link: "https://ik.imagekit.io/ciev6dpgs/portfolio/sertifikat/img257%20(1).jpg"
  },
  {
    id: 2,
    title: "FIRST LEVEL COMPUTER TECHNICIAN",
    issuer: "Badan Nasional Sertfikasi Profesi",
    date: "DESEMBER 2024",
    idCredential: "NS-99001122",
    image: "https://ik.imagekit.io/ciev6dpgs/portfolio/sertifikat/BNSP.png",
    link: "https://ik.imagekit.io/ciev6dpgs/portfolio/sertifikat/bnsp.pdf"
  },
  {
    id: 3,
    title: "Magang dan Studi Independen Bersertifikat dari program Merdeka Belajar Kampus Merdeka (MBKM)",
    issuer: "Kementerian Pendidikan (Kemendikbudristek)",
    date: "Juni  2024",
    idCredential: "G-AI-8877",
    image: "https://ik.imagekit.io/ciev6dpgs/portfolio/sertifikat/msib.png",
    link: "https://ik.imagekit.io/ciev6dpgs/portfolio/sertifikat/msib.pdf"
  },
  {
    id: 4,
    title: "Scrum Foundation Professional Certificate (SFPC)",
    issuer: "CertiProf ",
    date: "March  2022",
    idCredential: "G-AI-8877",
    image: "https://ik.imagekit.io/ciev6dpgs/portfolio/sertifikat/scrum.png",
    link: "https://ik.imagekit.io/ciev6dpgs/portfolio/sertifikat/Haryadi%20Yusuf_1204026%20(1).pdf"
  },
  {
    id: 5,
    title: "Cisco Certified Network Associate (CCNA) v7",
    issuer: "Cisco Networking Academy",
    date: "Juni  2020",
    idCredential: "G-AI-8877",
    image: "https://ik.imagekit.io/ciev6dpgs/portfolio/sertifikat/ccna.png",
    link: "https://ik.imagekit.io/ciev6dpgs/portfolio/sertifikat/CCNAv7.pdf"
  },
  {
    id: 6,
    title: "SAP Overview",
    issuer: "Edugate",
    date: "August  2022",
    idCredential: "G-AI-8877",
    image: "https://ik.imagekit.io/ciev6dpgs/portfolio/sertifikat/1736139244250.jpg",
    link: "https://ik.imagekit.io/ciev6dpgs/portfolio/sertifikat/1736139244250.jpg"
  },
  {
    id: 7,
    title: "Database Programming With SQL",
    issuer: "Oracle Academy",
    date: "March  2023",
    idCredential: "G-AI-8877",
    image: "https://ik.imagekit.io/ciev6dpgs/portfolio/sertifikat/sql.png",
    link: "https://ik.imagekit.io/ciev6dpgs/portfolio/sertifikat/course_certificate%20(a)%20(1).pdf"
  },
  {
    id: 8,
    title: "Java Fudamentals",
    issuer: "Oracle Academy",
    date: "February  2021",
    idCredential: "G-AI-8877",
    image: "https://ik.imagekit.io/ciev6dpgs/portfolio/sertifikat/java.png",
    link: "https://ik.imagekit.io/ciev6dpgs/portfolio/sertifikat/course_certificate%20(1).pdf"
  },
  {
    id: 9,
    title: "Internship di PT.Lintas Satu Visi",
    issuer: "PT.Lintas Satu Visi",
    date: "Desember  2023",
    idCredential: "G-AI-8877",
    image: "https://ik.imagekit.io/ciev6dpgs/portfolio/sertifikat/image.png",
    link: "https://ik.imagekit.io/ciev6dpgs/portfolio/sertifikat/SERTIFIKAT%20(2).pdf"
  },
  {
    id: 10,
    title: "Penerapan Data Science Di Organisasi",
    issuer: "Brainmatics",
    date: "  2023",
    idCredential: "G-AI-8877",
    image: "https://ik.imagekit.io/ciev6dpgs/portfolio/sertifikat/1hjours.png",
    link: "https://ik.imagekit.io/ciev6dpgs/portfolio/sertifikat/1%20Hour%20Online%20Training_%203%20Pola%20Penerapan%20Data%20Science%20di%20Organisasi%20-%20Brainmatics.pdf"
  },
];
export const experiences = [
  {
    id: 1,
    role: "System Developer & IT Support",
    company: "Rajawali Cipta Berkah",
    location: "Bandung",
    period: "Jun 2025 - Aug 2025",
    type: "Contract",
    description: [
      "Building an integrated business management system (CRM & Inventory) using NocoBase and PostgreSQL.",
      "Designing workflow automation using n8n for database synchronization and real-time notifications.",
      "Developing an interactive dashboard to monitor sales performance and operational KPIs.",
      "Managing office IT assets, live streaming hardware, and digital content infrastructure.",
    ],
    skills: ["PostgreSQL", "NocoBase", "n8n", "Automation", "CRM System"]
  },
  {
    id: 2,
    role: "Information System Data Manager",
    company: "LLDIKTI Wilayah IV",
    location: "Bandung",
    period: "Feb 2024 - Jun 2024",
    type: "Internship",
    description: [
      "Developed an e-Document (e-File) system and a complaint service system based on PHP CodeIgniter.",
      "Validation and processing of large-scale higher education data on the PDDIKTI platform.",
      "Achieved an 'A' grade (95/100) for innovation and problem-solving skills.",
      "Maintenance of office network infrastructure and CCTV security systems (99% uptime).",
    ],
    skills: ["PHP", "CodeIgniter", "Data Management", "PDDIKTI", "Network Maintenance"]
  },
  {
    id: 3,
    role: "Network Operation Center (NOC)",
    company: "PT. Lintas Satu Visi",
    location: "Bandung",
    period: "Sep 2023 - Dec 2023",
    type: "Internship",
    description: [
      "Monitoring ISP network traffic 24/7 to ensure high availability for clients.",
      "Real-time diagnosis and resolution of L1/L2 network issues.",
      "Developing a company landing page website to increase online visibility.",
      "Incident report documentation and ticketing system management."
    ],
    skills: ["Network Monitoring", "L1/L2 Troubleshooting", "ISP", "Web Dev"]
  },
  {
    id: 4,
    role: "IT Support",
    company: "Badan Geologi KESDM",
    location: "Bandung",
    period: "Jan 2019 - Mar 2019",
    type: "Internship",
    description: [
      "Provide technical support for hardware, software, and network connectivity for agency staff.",
      "Troubleshoot network connectivity issues to maintain smooth employee operations."
    ],
    skills: ["Technical Support", "Hardware", "Networking"]
  }
];
export const contactInfo = {
  ctaTitle: "Have a Project Idea?",
  ctaSubtitle: "Let's collaborate to build innovative digital solutions. I'm always open to technical discussions and collaboration opportunities.",
};

// Tambahkan variabel baru ini di portfolioData.js
export const featuredVenture = {
  name: "Joki.Tugas Jokas",
  role: "Founder & Lead Developer",
  stats: "500+ Transactions",
  desc: "The best digital bridge for academics and MSMEs! We provide super-fast, high-quality services at the lowest and most flexible costs.",
  link: "https://jokasweb.vercel.app/",
  image: "https://ik.imagekit.io/ciev6dpgs/jokas/2.jpg?updatedAt=1779173520993", // Ganti screenshot web Jokas
  tags: ["Business Growth", "Fullstack Management", "Branding"]
};