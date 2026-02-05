//Let's start
import React, {useState, useEffect} from 'react';
import { Menu, X, Github, Linkedin, Facebook, Instagram, Twitter, Mail, Code, Database, Server, Palette, Cpu, Brain, ArrowRight, ExternalLink, Download } from 'lucide-react';}

const DeveloperPortfolio = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

// Profile data
  const profileData = {
    name: "S.Manoj",
    title: "Full Stack Developer",
    futureTitle: "AI Engineer | Data Engineer",
    welcomeText: "Welcome to My Digital Space",
    description: "Passionate Full Stack Developer specializing in building exceptional digital experiences. Currently mastering the MERN stack while exploring AI/ML technologies. I transform ideas into elegant, scalable solutions that make a difference.",
    email: "manojmanorooban@gmail.com",
    phone: "+94 760543464",
    location: "Colombo, Western Province, LK",
    resumeUrl: "#"
  };

  // Tech Stack
  const techStack = {
    frontend: [
      { name: "React.js", level: 90, color: "from-blue-400 to-blue-600" },
      { name: "Next.js", level: 85, color: "from-gray-700 to-black" },
      { name: "Tailwind CSS", level: 95, color: "from-cyan-400 to-blue-500" },
      { name: "TypeScript", level: 80, color: "from-blue-500 to-blue-700" }
    ],
    backend: [
      { name: "Node.js", level: 88, color: "from-green-400 to-green-600" },
      { name: "Express.js", level: 90, color: "from-gray-600 to-gray-800" },
      { name: "MongoDB", level: 85, color: "from-green-500 to-green-700" },
      { name: "PostgreSQL", level: 82, color: "from-blue-600 to-indigo-600" }
    ],
    backend: [
      { name: "Node.js", level: 88, color: "from-green-400 to-green-600" },
      { name: "Express.js", level: 90, color: "from-gray-600 to-gray-800" },
      { name: "MongoDB", level: 85, color: "from-green-500 to-green-700" },
      { name: "PostgreSQL", level: 82, color: "from-blue-600 to-indigo-600" }
    ],


   // Projects
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack MERN e-commerce application with payment integration, admin dashboard, and real-time inventory management.",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      github: "#",
      live: "#",
      image: "gradient-1"
    },
    {
      title: "AI Task Manager",
      description: "Smart task management system with AI-powered priority suggestions and productivity analytics.",
      tech: ["Next.js", "Python", "TensorFlow", "PostgreSQL"],
      github: "#",
      live: "#",
      image: "gradient-2"
    },
    {
      title: "Real-Time Chat App",
      description: "WebSocket-based chat application with rooms, file sharing, and end-to-end encryption.",
      tech: ["React", "Socket.io", "Express", "Redis"],
      github: "#",
      live: "#",
      image: "gradient-3"
    },
    {
      title: "Data Visualization Dashboard",
      description: "Interactive analytics dashboard for business intelligence with real-time data processing.",
      tech: ["React", "D3.js", "Node.js", "MongoDB"],
      github: "#",
      live: "#",
      image: "gradient-4"
    }
  ]; 

  // Services
  const services = [
    {
      icon: Code,
      title: "Frontend Development",
      description: "Building responsive, performant web applications using React, Next.js, and modern CSS frameworks.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Server,
      title: "Backend Development",
      description: "Developing robust APIs and server-side applications with Node.js, Express, and database integration.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Database,
      title: "Database Design",
      description: "Architecting scalable database solutions with MongoDB, PostgreSQL, and efficient data modeling.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Brain,
      title: "AI Integration",
      description: "Implementing machine learning models and AI-powered features to enhance application capabilities.",
      color: "from-orange-500 to-red-500"
    }
  ];

// Social Links
  const socialLinks = [
    { icon: Github, url: "https://github.com/yourusername", label: "GitHub" },
    { icon: Linkedin, url: "https://linkedin.com/in/yourusername", label: "LinkedIn" },
    { icon: Twitter, url: "https://twitter.com/yourusername", label: "Twitter" },
    { icon: Facebook, url: "https://facebook.com/yourusername", label: "Facebook" },
    { icon: Instagram, url: "https://instagram.com/yourusername", label: "Instagram" }
  ];

const handleSubmit = async () => {
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      alert('Please fill in all fields');
      return;
    }

setIsSubmitting(true);

try {
      // Replace with your actual API endpoint
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        alert('Thank you! Your message has been sent successfully.');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to send message. Please try again or contact me directly via email.');
    } finally {
      setIsSubmitting(false);
    }
  };

 const scrollToSection = (section) => {
    setActiveSection(section);
    setIsMenuOpen(false);
  };

 const gradients = {
    'gradient-1': 'from-purple-400 via-pink-500 to-red-500',
    'gradient-2': 'from-green-400 via-blue-500 to-purple-600',
    'gradient-3': 'from-yellow-400 via-red-500 to-pink-500',
    'gradient-4': 'from-blue-400 via-purple-500 to-pink-500'
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div> 

      {/* Navigation */}
      <nav className="fixed w-full top-0 z-50 bg-slate-900/80 backdrop-blur-xl border-b border-purple-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-purple-500/50">
                &lt;/&gt;
              </div>
              <span className="ml-3 text-xl font-bold text-white">DevPortfolio</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {['Home', 'About', 'Skills', 'Projects', 'Services', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-gray-300 hover:text-purple-400 transition-colors font-medium relative group ${
                    activeSection === item.toLowerCase() ? 'text-purple-400' : ''
                  }`}
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full transition-all"></span>
                </button>
              ))}
              <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-lg hover:shadow-lg hover:shadow-purple-500/50 transition-all hover:scale-105">
                Hire Me
              </button>
            </div>

            
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-white"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

         {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-900/95 backdrop-blur-xl border-t border-purple-500/20">
            <div className="px-4 py-3 space-y-3">
              {['Home', 'About', 'Skills', 'Projects', 'Services', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left text-gray-300 hover:text-purple-400 py-2"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>


       {/* Hero Section */}
      <section id="home" className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-8 z-10">
              <div className="space-y-4">
                <p className="text-purple-400 font-semibold text-lg tracking-wide animate-fade-in">
                  {profileData.welcomeText}
                </p>
                <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
                  Hi, I'm{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                    {profileData.name}
                  </span>
                </h1>
                <h2 className="text-2xl md:text-3xl text-gray-300 font-semibold">
                  {profileData.title}
                </h2>
                <p className="text-lg text-purple-300 font-medium">
                  Future: {profileData.futureTitle}
                </p>
                <p className="text-gray-400 text-lg leading-relaxed max-w-2xl">
                  {profileData.description}
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <button 
                  onClick={() => scrollToSection('projects')}
                  className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all hover:scale-105 flex items-center gap-2"
                >
                  View Projects <ArrowRight size={20} />
                </button>
                <a
                  href={profileData.resumeUrl}
                  className="border-2 border-purple-500 text-purple-400 px-8 py-3 rounded-lg font-semibold hover:bg-purple-500/10 transition-all flex items-center gap-2"
                >
                  <Download size={20} /> Download CV
                </a>
              </div>


               {/* Social Links */}
              <div className="pt-8">
                <p className="text-gray-400 mb-4 font-semibold">CONNECT WITH ME</p>
                <div className="flex gap-4">
                  {socialLinks.map((social, idx) => (
                    <a
                      key={idx}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-lg bg-slate-800/50 backdrop-blur-sm border border-purple-500/20 flex items-center justify-center text-gray-400 hover:text-purple-400 hover:border-purple-500 transition-all hover:scale-110 hover:shadow-lg hover:shadow-purple-500/30"
                      title={social.label}
                    >
                      <social.icon size={20} />
                    </a>
                  ))}
                </div>
              </div>
            </div>


            {/* Profile Image/Visual */}
            <div className="relative z-10 hidden lg:block">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl blur-3xl opacity-30 animate-pulse"></div>
                <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-8 border border-purple-500/20">
                  <div className="space-y-4">
                    <div className="h-64 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl flex items-center justify-center">
                      <Code size={120} className="text-purple-400" />
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                      {['React', 'Node.js', 'MongoDB'].map((tech, idx) => (
                        <div key={idx} className="bg-slate-800/50 rounded-lg p-3 text-center border border-purple-500/10">
                          <p className="text-purple-400 font-semibold text-sm">{tech}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>