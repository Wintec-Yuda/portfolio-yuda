'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiPhone, FiMapPin, FiGlobe, FiExternalLink, FiX } from 'react-icons/fi';
import { FaReact, FaLaravel, FaVuejs, FaNodeJs, FaPython } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiNestjs, SiSpringboot, SiMysql, SiPostgresql, SiMongodb, SiDocker } from 'react-icons/si';
import { TbBrandFramerMotion } from 'react-icons/tb';

// Language content
const content = {
  en: {
    nav: {
      about: 'About',
      skills: 'Skills',
      experience: 'Experience',
      projects: 'Projects',
      contact: 'Contact'
    },
    hero: {
      title: 'AI Web Engineer',
      subtitle: 'Building intelligent web solutions with modern technologies',
      cta: 'View My Work'
    },
    about: {
      title: 'About Me',
      description: 'I am an enthusiastic AI Web Engineer passionate about modern web development, artificial intelligence integration, and applying technology to solve real-world problems. Experienced in building end-to-end web systems, both frontend and backend, as well as developing AI features to enhance platform efficiency and capabilities. I enjoy new challenges, can work collaboratively or independently, and am committed to delivering functional, scalable, and user-friendly results.'
    },
    skills: {
      title: 'Skills & Expertise',
      hardSkills: 'Hard Skills',
      softSkills: 'Soft Skills',
      tools: 'Tools & Frameworks'
    },
    experience: {
      title: 'Education & Experience',
      education: 'Education',
      internships: 'Internships',
      university: 'Nusantara PGRI Kediri University',
      description: 'I am active in both academic and non-academic activities, participating in technology-based projects and software development. Strengthened practical skills through independent exploration of web and AI technologies beyond the campus curriculum.',
      degree: 'Bachelor of Computer Science (S.Kom)',
      period: '2020 – 2024',
      gpa: 'GPA: 3.84',
      viewCertificate: 'View Certificate',
      aiMastery: {
        title: 'AI Mastery – Independent Study',
        company: 'Orbit Future Academy',
        period: 'August 2022 – December 2022',
        points: [
          'Learned fundamentals of Machine Learning, AI, Computer Vision, Data Science, and Natural Language Processing (NLP).',
          'Collaborated in teams to develop AI-based final projects solving real problems in public service sectors.',
          'Involved in data preprocessing, AI modeling, and project result presentations to evaluator panels.'
        ],
        certificate: '/certificates/ai-mastery.jpeg'
      },
      kalbe: {
        title: 'Web Developer – Internship',
        company: 'PT Kalbe Farma',
        period: 'February 2023 – June 2023',
        points: [
          'Designed and developed internal training digitization web system, from registration to reporting.',
          'Used Laravel 10 & jQuery to build user-friendly, efficient applications integrated with company database.',
          'Improved training process efficiency by 70% & reduced manual data input errors.'
        ],
        certificate: '/certificates/kalbe.jpeg'
      },
      kasihInovasi: {
        title: 'Frontend Developer – Internship',
        company: 'CV Kasih Inovasi Teknologi',
        period: 'August 2023 – December 2023',
        points: [
          'Developed Tryout Academy website, an online exam platform allowing teachers to create tests and students to purchase and take exams.',
          'Focused on creating interactive & responsive UI/UX using Laravel 10 & Vue 3.',
          'Increased user engagement by 30% with intuitive interface design and improved user experience.'
        ],
        certificate: '/certificates/kasih-inovasi.jpeg'
      }
    },
    projects: {
      title: 'Featured Projects',
      items: [
        {
          title: 'Chatbot Customer Service',
          description: 'Website chatbot for restaurant customer service, automatically answering common questions, reducing staff workload, and improving customer satisfaction.',
          link: 'https://chatbot-cs-demo.vercel.app',
          image: '/projects/chatbot.png'
        },
        {
          title: 'Portomake',
          description: 'Website portfolio creation service for professionals & freelancers, with order features, template catalog, and custom website consultation.',
          link: 'https://website-portomake.vercel.app',
          image: '/projects/portomake.png'
        },
        {
          title: 'Point of Sales (POS)',
          description: 'Web-based Point of Sales application with AI-based sales analysis features, helping business owners make data-driven decisions based on sales patterns.',
          link: 'https://website-point-of-sale.vercel.app',
          image: '/projects/pos.png'
        },
        {
          title: 'Accounting Web App',
          description: 'Automatic accounting website that can generate transaction journals automatically by just inputting descriptions & transaction amounts, saving manual recording time & minimizing human error.',
          link: 'https://website-accounting.vercel.app',
          image: '/projects/accounting.png'
        }
      ],
      viewDemo: 'View Demo'
    },
    contact: {
      title: 'Get In Touch',
      subtitle: 'Have a project in mind or want to collaborate? Feel free to reach out!',
      form: {
        name: 'Your Name',
        email: 'Your Email',
        subject: 'Subject',
        message: 'Your Message',
        submit: 'Send Message'
      },
      success: 'Message sent successfully!',
      error: 'There was an error sending your message. Please try again.'
    },
    footer: {
      copyright: '© 2024 Mochamad Yuda Trinurais. All rights reserved.'
    }
  },
  id: {
    nav: {
      about: 'Tentang',
      skills: 'Keahlian',
      experience: 'Pengalaman',
      projects: 'Proyek',
      contact: 'Kontak'
    },
    hero: {
      title: 'AI Web Engineer',
      subtitle: 'Membangun solusi web cerdas dengan teknologi modern',
      cta: 'Lihat Karya Saya'
    },
    about: {
      title: 'Tentang Saya',
      description: 'Saya adalah seorang AI Web Engineer yang antusias dengan pengembangan web modern, integrasi kecerdasan buatan, dan penerapan teknologi untuk menyelesaikan masalah nyata. Memiliki pengalaman dalam membangun sistem web end-to-end, baik frontend maupun backend, serta mengembangkan fitur AI untuk meningkatkan efisiensi dan kapabilitas platform. Saya menyukai tantangan baru, mampu bekerja secara kolaboratif maupun mandiri, serta berkomitmen untuk memberikan hasil yang fungsional, scalable, dan user-friendly.'
    },
    skills: {
      title: 'Keahlian',
      hardSkills: 'Hard Skills',
      softSkills: 'Soft Skills',
      tools: 'Tools & Framework'
    },
    experience: {
      title: 'Pendidikan & Pengalaman',
      education: 'Pendidikan',
      internships: 'Magang',
      university: 'Universitas Nusantara PGRI Kediri',
      description: 'Saya aktif dalam kegiatan akademik & non-akademik, berpartisipasi dalam proyek berbasis teknologi & pengembangan perangkat lunak. Memperkuat keterampilan praktis melalui eksplorasi mandiri teknologi web & AI di luar kurikulum kampus.',
      degree: 'Sarjana Teknik Informatika (S.Kom)',
      period: '2020 – 2024',
      gpa: 'IPK: 3.84',
      viewCertificate: 'Lihat Sertifikat',
      aiMastery: {
        title: 'AI Mastery – Studi Independen',
        company: 'Orbit Future Academy',
        period: 'Agustus 2022 – Desember 2022',
        points: [
          'Mempelajari dasar Machine Learning, AI, Computer Vision, Data Science, dan Natural Language Processing (NLP).',
          'Berkolaborasi dalam tim untuk mengembangkan proyek akhir berbasis AI yang memecahkan masalah nyata di sektor layanan publik.',
          'Terlibat dalam data preprocessing, pemodelan AI, serta presentasi hasil proyek ke panel evaluator.'
        ],
        certificate: '/certificates/ai-mastery.jpeg'
      },
      kalbe: {
        title: 'Web Developer – Magang',
        company: 'PT Kalbe Farma',
        period: 'Februari 2023 – Juni 2023',
        points: [
          'Merancang dan mengembangkan sistem web digitalisasi pelatihan internal, dari registrasi hingga pelaporan hasil.',
          'Menggunakan Laravel 10 & jQuery untuk membangun aplikasi yang user-friendly, efisien, dan terintegrasi dengan database perusahaan.',
          'Meningkatkan efisiensi proses pelatihan hingga 70% & mengurangi kesalahan input data manual.'
        ],
        certificate: '/certificates/kalbe.jpeg'
      },
      kasihInovasi: {
        title: 'Frontend Developer – Magang',
        company: 'CV Kasih Inovasi Teknologi',
        period: 'Agustus 2023 – Desember 2023',
        points: [
          'Mengembangkan website Tryout Academy, platform ujian online yang memungkinkan guru membuat soal ujian & siswa membeli serta mengerjakan ujian.',
          'Berfokus pada pembuatan UI/UX interaktif & responsif menggunakan Laravel 10 & Vue 3.',
          'Berhasil meningkatkan user engagement hingga 30% dengan desain antarmuka yang intuitif & pengalaman pengguna yang lebih baik.'
        ],
        certificate: '/certificates/kasih-inovasi.jpeg'
      }
    },
    projects: {
      title: 'Proyek Unggulan',
      items: [
        {
          title: 'Chatbot Customer Service',
          description: 'Website chatbot untuk layanan pelanggan restoran, membantu menjawab pertanyaan umum secara otomatis, mengurangi beban staf, dan meningkatkan kepuasan pelanggan.',
          link: 'https://chatbot-cs-demo.vercel.app',
          image: '/projects/chatbot.png'
        },
        {
          title: 'Portomake',
          description: 'Website jasa pembuatan website portfolio untuk profesional & freelancer, dengan fitur pemesanan, katalog template, dan konsultasi custom website.',
          link: 'https://website-portomake.vercel.app',
          image: '/projects/portomake.png'
        },
        {
          title: 'Point of Sales (POS)',
          description: 'Aplikasi Point of Sales berbasis web dengan fitur analisis penjualan berbasis AI, membantu pemilik usaha membuat keputusan berbasis data & pola penjualan.',
          link: 'https://website-point-of-sale.vercel.app',
          image: '/projects/pos.png'
        },
        {
          title: 'Accounting Web App',
          description: 'Website akuntansi otomatis yang dapat menghasilkan jurnal transaksi secara otomatis hanya dengan menginput deskripsi & nominal transaksi, menghemat waktu pencatatan manual & meminimalkan human error.',
          link: 'https://website-accounting.vercel.app',
          image: '/projects/accounting.png'
        }
      ],
      viewDemo: 'Lihat Demo'
    },
    contact: {
      title: 'Hubungi Saya',
      subtitle: 'Ada proyek yang ingin dikerjakan bersama atau ingin berkolaborasi? Silakan hubungi saya!',
      form: {
        name: 'Nama Anda',
        email: 'Email Anda',
        subject: 'Subjek',
        message: 'Pesan Anda',
        submit: 'Kirim Pesan'
      },
      success: 'Pesan terkirim dengan sukses!',
      error: 'Terjadi kesalahan saat mengirim pesan. Silakan coba lagi.'
    },
    footer: {
      copyright: '© 2024 Mochamad Yuda Trinurais. Semua hak dilindungi.'
    }
  }
};

export default function Home() {
  const [language, setLanguage] = useState('en');
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState(null);
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const t = content[language];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      const sections = ['home', 'about', 'skills', 'experience', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleContactSubmit = (e) => {
    e.preventDefault();
    const { name, email, subject, message } = contactForm;
    
    if (!name || !email || !subject || !message) {
      setFormStatus('error');
      return;
    }

    window.location.href = `mailto:mochamadyudatrinurais@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)}`;
    setFormStatus('success');
    setContactForm({ name: '', email: '', subject: '', message: '' });
    
    setTimeout(() => {
      setFormStatus(null);
    }, 5000);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setContactForm(prev => ({ ...prev, [name]: value }));
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
      setActiveSection(sectionId);
      setIsMenuOpen(false);
    }
  };

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'id' : 'en');
  };

  const openCertificate = (certificatePath) => {
    setSelectedCertificate(certificatePath);
  };

  const closeCertificate = () => {
    setSelectedCertificate(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-gray-100">
      {/* Navigation */}
      <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-gray-900/90 backdrop-blur-md py-2 shadow-lg' : 'bg-transparent py-4'}`}>
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex justify-between items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600"
            >
              Mochamad Yuda Trinurais
            </motion.div>

            <div className="hidden md:flex items-center space-x-8">
              <nav className="flex space-x-6">
                {['about', 'skills', 'experience', 'projects', 'contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className={`relative px-1 py-2 text-sm font-medium transition-colors ${activeSection === item ? 'text-blue-400' : 'text-gray-300 hover:text-white'}`}
                  >
                    {t.nav[item]}
                    {activeSection === item && (
                      <motion.span
                        layoutId="navUnderline"
                        className="absolute left-0 bottom-0 w-full h-0.5 bg-blue-400"
                        transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                  </button>
                ))}
              </nav>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={toggleLanguage}
                className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-gray-800 hover:bg-gray-700 text-sm"
              >
                <FiGlobe className="text-blue-400" />
                <span>{language === 'en' ? 'ID' : 'EN'}</span>
              </motion.button>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 rounded-md text-gray-300 hover:text-white focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden"
            >
              <div className="px-4 pt-2 pb-4 space-y-2">
                {['about', 'skills', 'experience', 'projects', 'contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className={`block w-full text-left px-3 py-2 rounded-md text-sm font-medium ${activeSection === item ? 'bg-gray-800 text-blue-400' : 'text-gray-300 hover:bg-gray-800 hover:text-white'}`}
                  >
                    {t.nav[item]}
                  </button>
                ))}
                <button
                  onClick={toggleLanguage}
                  className="flex items-center gap-2 w-full text-left px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:bg-gray-800 hover:text-white"
                >
                  <FiGlobe className="text-blue-400" />
                  {language === 'en' ? 'Switch to Bahasa Indonesia' : 'Switch to English'}
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center pt-20 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
                  Mochamad Yuda Trinurais
                </span>
              </h1>
              <h2 className="text-xl md:text-2xl text-blue-300 mb-6">{t.hero.title}</h2>
              <p className="text-gray-300 mb-8 max-w-lg">{t.hero.subtitle}</p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <a href="tel:085179945123" className="flex items-center gap-2 text-gray-300 hover:text-white">
                  <FiPhone className="text-blue-400" /> 0851-7994-5123
                </a>
                <a href="mailto:mochamadyudatrinurais@gmail.com" className="flex items-center gap-2 text-gray-300 hover:text-white">
                  <FiMail className="text-blue-400" /> mochamadyudatrinurais@gmail.com
                </a>
                <div className="flex items-center gap-2 text-gray-300">
                  <FiMapPin className="text-blue-400" /> Kediri, Jawa Timur, Indonesia
                </div>
              </div>
              
              <div className="flex gap-4">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://linkedin.com/in/mochamad-yuda-trinurais-4a87a1309"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 text-white"
                >
                  <FiLinkedin className="w-5 h-5" />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://github.com/Wintec-Yuda"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 text-white"
                >
                  <FiGithub className="w-5 h-5" />
                </motion.a>
              </div>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('projects')}
                className="mt-8 px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium shadow-lg hover:shadow-xl transition-all"
              >
                {t.hero.cta}
              </motion.button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl opacity-20 blur-xl"></div>
              <div className="relative bg-gray-800 rounded-2xl overflow-hidden border border-gray-700">
                <div className="h-8 bg-gray-700 flex items-center px-4">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-blue-400 mb-4">
                    <span className="text-purple-400">const</span> aboutMe = {'{'}
                  </div>
                  <div className="ml-6 space-y-2">
                    <div><span className="text-purple-400">name:</span> <span className="text-green-400">'Mochamad Yuda Trinurais'</span>,</div>
                    <div><span className="text-purple-400">role:</span> <span className="text-green-400">'AI Web Engineer'</span>,</div>
                    <div><span className="text-purple-400">location:</span> <span className="text-green-400">'Kediri, Indonesia'</span>,</div>
                    <div><span className="text-purple-400">skills:</span> [</div>
                    <div className="ml-6"><span className="text-green-400">'Web Development'</span>,</div>
                    <div className="ml-6"><span className="text-green-400">'AI Integration'</span>,</div>
                    <div className="ml-6"><span className="text-green-400">'Workflow Automation'</span></div>
                    <div>]</div>
                  </div>
                  <div className="text-blue-400">{'}'}</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-800/50">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
                {t.about.title}
              </span>
            </h2>
            <div className="bg-gray-800/70 rounded-xl p-8 border border-gray-700 shadow-lg">
              <p className="text-gray-300 leading-relaxed" dangerouslySetInnerHTML={{ 
                __html: t.about.description.replace(/\*\*(.*?)\*\*/g, '<strong class="text-blue-300">$1</strong>') 
              }} />
              
              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4 text-blue-300">Hobbies & Interests</h3>
                <div className="flex flex-wrap gap-3">
                  {[
                    'Coding & exploring new tech',
                    'Creative problem solving',
                    'Watching movies',
                    'Gaming'
                  ].map((hobby, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ y: -3 }}
                      className="px-4 py-2 bg-gray-700 rounded-full text-sm"
                    >
                      {hobby}
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
                {t.skills.title}
              </span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Hard Skills */}
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-gray-800/70 rounded-xl p-6 border border-gray-700 shadow-lg"
              >
                <h3 className="text-xl font-semibold mb-4 text-blue-300">{t.skills.hardSkills}</h3>
                <ul className="space-y-3">
                  {[
                    'Website development (frontend & backend)',
                    'Database management',
                    'System debugging & troubleshooting',
                    'Figma design to interactive website',
                    'Machine learning & AI web integration',
                    'REST API & microservices',
                    'Workflow automation & third-party integration'
                  ].map((skill, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-1.5 h-1.5 mt-2.5 rounded-full bg-blue-400 mr-3"></div>
                      <span className="text-gray-300">{skill}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
              
              {/* Soft Skills */}
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-gray-800/70 rounded-xl p-6 border border-gray-700 shadow-lg"
              >
                <h3 className="text-xl font-semibold mb-4 text-blue-300">{t.skills.softSkills}</h3>
                <ul className="space-y-3">
                  {[
                    'Problem solving & analytical thinking',
                    'Prompt engineering',
                    'Team collaboration & effective communication',
                    'Adaptive & fast learner',
                    'Attention to detail',
                    'Time management',
                    'Creative thinking'
                  ].map((skill, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-1.5 h-1.5 mt-2.5 rounded-full bg-purple-400 mr-3"></div>
                      <span className="text-gray-300">{skill}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
              
              {/* Tools & Frameworks */}
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-gray-800/70 rounded-xl p-6 border border-gray-700 shadow-lg"
              >
                <h3 className="text-xl font-semibold mb-4 text-blue-300">{t.skills.tools}</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-3 p-3 bg-gray-700/50 rounded-lg">
                    <FaReact className="text-blue-400 text-xl" />
                    <span>React</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gray-700/50 rounded-lg">
                    <SiNextdotjs className="text-white text-xl" />
                    <span>Next.js</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gray-700/50 rounded-lg">
                    <SiTailwindcss className="text-cyan-400 text-xl" />
                    <span>Tailwind</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gray-700/50 rounded-lg">
                    <TbBrandFramerMotion className="text-purple-400 text-xl" />
                    <span>Framer Motion</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gray-700/50 rounded-lg">
                    <FaLaravel className="text-red-500 text-xl" />
                    <span>Laravel</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gray-700/50 rounded-lg">
                    <FaVuejs className="text-green-500 text-xl" />
                    <span>Vue.js</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gray-700/50 rounded-lg">
                    <FaNodeJs className="text-green-600 text-xl" />
                    <span>Node.js</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gray-700/50 rounded-lg">
                    <SiNestjs className="text-red-500 text-xl" />
                    <span>NestJS</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gray-700/50 rounded-lg">
                    <SiSpringboot className="text-green-500 text-xl" />
                    <span>Spring Boot</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gray-700/50 rounded-lg">
                    <SiMysql className="text-blue-500 text-xl" />
                    <span>MySQL</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gray-700/50 rounded-lg">
                    <SiPostgresql className="text-blue-400 text-xl" />
                    <span>PostgreSQL</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gray-700/50 rounded-lg">
                    <SiMongodb className="text-green-500 text-xl" />
                    <span>MongoDB</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gray-700/50 rounded-lg">
                    <SiDocker className="text-blue-400 text-xl" />
                    <span>Docker</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gray-700/50 rounded-lg">
                    <FaPython className="text-yellow-400 text-xl" />
                    <span>Python</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-gray-800/50">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
                {t.experience.title}
              </span>
            </h2>
            
            <div className="max-w-4xl mx-auto">
              {/* Education */}
              <motion.div
                whileHover={{ y: -3 }}
                className="bg-gray-800/70 rounded-xl p-8 border border-gray-700 shadow-lg mb-12"
              >
                <h3 className="text-2xl font-semibold mb-2 text-blue-300">{t.experience.education}</h3>
                <h4 className="text-xl font-medium mb-1">{t.experience.university}</h4>
                <p className="text-gray-400 mb-2">{t.experience.degree}</p>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-gray-300">{t.experience.period}</span>
                  <span className="px-3 py-1 bg-blue-900/30 text-blue-300 rounded-full text-sm">{t.experience.gpa}</span>
                </div>
                <p className="text-gray-300">
                  {t.experience.description}
                </p>
              </motion.div>
              
              {/* Internships */}
              <h3 className="text-2xl font-semibold mb-6 text-blue-300">{t.experience.internships}</h3>
              
              {/* AI Mastery */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
                className="relative mb-8 pl-8 border-l-2 border-blue-400/30"
              >
                <div className="absolute -left-1.5 top-0 w-3 h-3 rounded-full bg-blue-400"></div>
                <div className="bg-gray-800/70 rounded-xl p-6 border border-gray-700 shadow-lg">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                    <h4 className="text-xl font-medium text-white">{t.experience.aiMastery.title}</h4>
                    <span className="text-gray-400 text-sm md:text-base">{t.experience.aiMastery.period}</span>
                  </div>
                  <p className="text-blue-300 mb-3">{t.experience.aiMastery.company}</p>
                  <ul className="space-y-2 text-gray-300 mb-4">
                    {t.experience.aiMastery.points.map((point, index) => (
                      <li key={index} className="flex" dangerouslySetInnerHTML={{ 
                        __html: point.replace(/\*\*(.*?)\*\*/g, '<strong class="text-blue-300">$1</strong>') 
                      }} />
                    ))}
                  </ul>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => openCertificate(t.experience.aiMastery.certificate)}
                    className="px-4 py-2 bg-blue-900/30 text-blue-300 rounded-lg text-sm flex items-center gap-2"
                  >
                    {t.experience.viewCertificate}
                    <FiExternalLink className="text-xs" />
                  </motion.button>
                </div>
              </motion.div>
              
              {/* Kalbe Farma */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true, margin: "-50px" }}
                className="relative mb-8 pl-8 border-l-2 border-blue-400/30"
              >
                <div className="absolute -left-1.5 top-0 w-3 h-3 rounded-full bg-blue-400"></div>
                <div className="bg-gray-800/70 rounded-xl p-6 border border-gray-700 shadow-lg">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                    <h4 className="text-xl font-medium text-white">{t.experience.kalbe.title}</h4>
                    <span className="text-gray-400 text-sm md:text-base">{t.experience.kalbe.period}</span>
                  </div>
                  <p className="text-blue-300 mb-3">{t.experience.kalbe.company}</p>
                  <ul className="space-y-2 text-gray-300 mb-4">
                    {t.experience.kalbe.points.map((point, index) => (
                      <li key={index} className="flex" dangerouslySetInnerHTML={{ 
                        __html: point.replace(/\*\*(.*?)\*\*/g, '<strong class="text-blue-300">$1</strong>') 
                      }} />
                    ))}
                  </ul>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => openCertificate(t.experience.kalbe.certificate)}
                    className="px-4 py-2 bg-blue-900/30 text-blue-300 rounded-lg text-sm flex items-center gap-2"
                  >
                    {t.experience.viewCertificate}
                    <FiExternalLink className="text-xs" />
                  </motion.button>
                </div>
              </motion.div>
              
              {/* Kasih Inovasi */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true, margin: "-50px" }}
                className="relative pl-8 border-l-2 border-blue-400/30"
              >
                <div className="absolute -left-1.5 top-0 w-3 h-3 rounded-full bg-blue-400"></div>
                <div className="bg-gray-800/70 rounded-xl p-6 border border-gray-700 shadow-lg">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                    <h4 className="text-xl font-medium text-white">{t.experience.kasihInovasi.title}</h4>
                    <span className="text-gray-400 text-sm md:text-base">{t.experience.kasihInovasi.period}</span>
                  </div>
                  <p className="text-blue-300 mb-3">{t.experience.kasihInovasi.company}</p>
                  <ul className="space-y-2 text-gray-300 mb-4">
                    {t.experience.kasihInovasi.points.map((point, index) => (
                      <li key={index} className="flex" dangerouslySetInnerHTML={{ 
                        __html: point.replace(/\*\*(.*?)\*\*/g, '<strong class="text-blue-300">$1</strong>') 
                      }} />
                    ))}
                  </ul>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => openCertificate(t.experience.kasihInovasi.certificate)}
                    className="px-4 py-2 bg-blue-900/30 text-blue-300 rounded-lg text-sm flex items-center gap-2"
                  >
                    {t.experience.viewCertificate}
                    <FiExternalLink className="text-xs" />
                  </motion.button>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
                {t.projects.title}
              </span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {t.projects.items.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  whileHover={{ y: -5 }}
                  className="bg-gray-800/70 rounded-xl overflow-hidden border border-gray-700 shadow-lg"
                >
                  <div className="h-48 relative overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-3 text-white">{project.title}</h3>
                    <p 
                      className="text-gray-300 mb-4" 
                      dangerouslySetInnerHTML={{ 
                        __html: project.description.replace(/\*\*(.*?)\*\*/g, '<strong class="text-blue-300">$1</strong>') 
                      }} 
                    />
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-sm font-medium"
                    >
                      {t.projects.viewDemo} <FiExternalLink className="text-xs" />
                    </motion.a>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-800/50">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
                {t.contact.title}
              </span>
            </h2>
            <p className="text-gray-300 text-center mb-12 max-w-2xl mx-auto">{t.contact.subtitle}</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-gray-800/70 rounded-xl p-8 border border-gray-700 shadow-lg"
              >
                <h3 className="text-xl font-semibold mb-6 text-blue-300">Contact Information</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-blue-900/20 rounded-lg text-blue-400">
                      <FiMail className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-gray-400 text-sm">Email</h4>
                      <a href="mailto:mochamadyudatrinurais@gmail.com" className="text-white hover:text-blue-300">
                        mochamadyudatrinurais@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-blue-900/20 rounded-lg text-blue-400">
                      <FiPhone className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-gray-400 text-sm">Phone</h4>
                      <a href="tel:085179945123" className="text-white hover:text-blue-300">
                        0851-7994-5123
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-blue-900/20 rounded-lg text-blue-400">
                      <FiMapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-gray-400 text-sm">Location</h4>
                      <p className="text-white">Kediri, East Java, Indonesia</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-blue-900/20 rounded-lg text-blue-400">
                      <FiGlobe className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-gray-400 text-sm">Social</h4>
                      <div className="flex gap-4 mt-2">
                        <a 
                          href="https://linkedin.com/in/mochamad-yuda-trinurais-4a87a1309" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-gray-300 hover:text-blue-400"
                        >
                          <FiLinkedin className="w-5 h-5" />
                        </a>
                        <a 
                          href="https://github.com/Wintec-Yuda" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-gray-300 hover:text-blue-400"
                        >
                          <FiGithub className="w-5 h-5" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-gray-800/70 rounded-xl p-8 border border-gray-700 shadow-lg"
              >
                <form onSubmit={handleContactSubmit}>
                  <div className="space-y-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                        {t.contact.form.name}
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={contactForm.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2.5 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white placeholder-gray-400"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                        {t.contact.form.email}
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={contactForm.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2.5 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white placeholder-gray-400"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1">
                        {t.contact.form.subject}
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={contactForm.subject}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2.5 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white placeholder-gray-400"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                        {t.contact.form.message}
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows="4"
                        value={contactForm.message}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2.5 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white placeholder-gray-400"
                        required
                      ></textarea>
                    </div>
                    
                    {formStatus && (
                      <div className={`p-3 rounded-lg ${formStatus === 'success' ? 'bg-green-900/30 text-green-300' : 'bg-red-900/30 text-red-300'}`}>
                        {formStatus === 'success' ? t.contact.success : t.contact.error}
                      </div>
                    )}
                    
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all"
                    >
                      {t.contact.form.submit}
                    </motion.button>
                  </div>
                </form>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-gray-800">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              {t.footer.copyright}
            </div>
            
            <div className="flex gap-4">
              <motion.a
                whileHover={{ y: -2 }}
                href="https://linkedin.com/in/mochamad-yuda-trinurais-4a87a1309"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400"
              >
                <FiLinkedin className="w-5 h-5" />
              </motion.a>
              <motion.a
                whileHover={{ y: -2 }}
                href="https://github.com/Wintec-Yuda"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400"
              >
                <FiGithub className="w-5 h-5" />
              </motion.a>
            </div>
          </div>
        </div>
      </footer>
      {/* Certificate Modal */}
      <AnimatePresence>
        {selectedCertificate && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={closeCertificate}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="relative max-w-4xl w-full max-h-[90vh] bg-gray-800 rounded-xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeCertificate}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-gray-700 hover:bg-gray-600 text-white"
              >
                <FiX className="w-5 h-5" />
              </button>
              <div className="h-full w-full overflow-auto">
                <img 
                  src={selectedCertificate} 
                  alt="Certificate" 
                  className="w-full h-auto object-contain"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}