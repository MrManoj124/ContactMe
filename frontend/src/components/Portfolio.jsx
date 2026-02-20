//Let's start
import React, { useState } from 'react';
import { Menu, X, Github, Linkedin, Facebook, Instagram, Twitter, Mail, Code, Database, Server, Palette, Cpu, Brain, ArrowRight, ExternalLink, Download } from 'lucide-react';

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
      { name: "React.js", level: 90, color: "from-[#58A0C8] to-[#34699A]" },
      { name: "Next.js", level: 85, color: "from-[#34699A] to-[#113F67]" },
      { name: "Tailwind CSS", level: 95, color: "from-[#58A0C8] to-[#34699A]" },
      { name: "TypeScript", level: 80, color: "from-[#34699A] to-[#113F67]" }
    ],
    backend: [
      { name: "Node.js", level: 88, color: "from-[#58A0C8] to-[#34699A]" },
      { name: "Express.js", level: 90, color: "from-[#34699A] to-[#113F67]" },
      { name: "MongoDB", level: 85, color: "from-[#58A0C8] to-[#113F67]" },
      { name: "PostgreSQL", level: 82, color: "from-[#34699A] to-[#113F67]" }
    ],
    tools: [
      { name: "Git & GitHub", level: 90, color: "from-[#FDF5AA] to-[#58A0C8]" },
      { name: "Docker", level: 75, color: "from-[#58A0C8] to-[#34699A]" },
      { name: "VS Code", level: 95, color: "from-[#34699A] to-[#113F67]" },
      { name: "Postman", level: 88, color: "from-[#FDF5AA] to-[#58A0C8]" }
    ]
  };

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
      color: "from-[#58A0C8] to-[#34699A]"
    },
    {
      icon: Server,
      title: "Backend Development",
      description: "Developing robust APIs and server-side applications with Node.js, Express, and database integration.",
      color: "from-[#34699A] to-[#113F67]"
    },
    {
      icon: Database,
      title: "Database Design",
      description: "Architecting scalable database solutions with MongoDB, PostgreSQL, and efficient data modeling.",
      color: "from-[#FDF5AA] to-[#58A0C8]"
    },
    {
      icon: Brain,
      title: "AI Integration",
      description: "Implementing machine learning models and AI-powered features to enhance application capabilities.",
      color: "from-[#58A0C8] to-[#113F67]"
    }
  ];

  // Social Links
  const socialLinks = [
    { icon: Github, url: "https://github.com/MrManoj124", label: "GitHub" },
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
    'gradient-1': 'from-[#34699A] via-[#58A0C8] to-[#FDF5AA]',
    'gradient-2': 'from-[#113F67] via-[#34699A] to-[#58A0C8]',
    'gradient-3': 'from-[#FDF5AA] via-[#58A0C8] to-[#34699A]',
    'gradient-4': 'from-[#58A0C8] via-[#34699A] to-[#113F67]'
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a1628] via-[#0e2240] to-[#113F67]">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#34699A]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#58A0C8]/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-[#FDF5AA]/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed w-full top-0 z-50 bg-[#080f1e]/95 backdrop-blur-xl border-b border-[#58A0C8]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-3">
              <span className="text-xl font-bold text-white">S.Manoj</span>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#58A0C8] to-[#FDF5AA] rounded-full blur-sm opacity-75"></div>
                <img
                  src="/profile.jpeg"
                  alt="S.Manoj Profile"
                  className="relative w-12 h-12 rounded-full object-cover border-2 border-[#58A0C8] shadow-lg"
                />
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {['Home', 'About', 'Skills', 'Projects', 'Services', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-[#58A0C8] hover:text-[#FDF5AA] transition-colors font-medium relative group ${activeSection === item.toLowerCase() ? 'text-[#FDF5AA]' : ''
                    } `}
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#58A0C8] to-[#FDF5AA] group-hover:w-full transition-all"></span>
                </button>
              ))}
              <button className="bg-gradient-to-r from-[#58A0C8] to-[#FDF5AA] text-[#0a1628] px-6 py-2 rounded-lg font-semibold hover:shadow-lg hover:shadow-[#58A0C8]/50 transition-all hover:scale-105">
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
          <div className="md:hidden bg-[#080f1e]/95 backdrop-blur-xl border-t border-[#58A0C8]/20">
            <div className="px-4 py-3 space-y-3">
              {['Home', 'About', 'Skills', 'Projects', 'Services', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left text-gray-300 hover:text-[#FDF5AA] py-2"
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
                <p className="text-[#FDF5AA] font-semibold text-lg tracking-wide animate-fade-in">
                  {profileData.welcomeText}
                </p>
                <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
                  Hi, I'm{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#58A0C8] to-[#FDF5AA]">
                    {profileData.name}
                  </span>
                </h1>
                <h2 className="text-2xl md:text-3xl text-gray-300 font-semibold">
                  {profileData.title}
                </h2>

                <p className="text-lg text-[#58A0C8] font-medium">
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
                  className="bg-gradient-to-r from-[#58A0C8] to-[#FDF5AA] text-[#0a1628] px-8 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-[#58A0C8]/50 transition-all hover:scale-105 flex items-center gap-2"
                >
                  View Projects <ArrowRight size={20} />
                </button>
                <a
                  href={profileData.resumeUrl}
                  className="border-2 border-[#58A0C8] text-[#58A0C8] px-8 py-3 rounded-lg font-semibold hover:bg-[#58A0C8]/10 transition-all flex items-center gap-2"
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
                      className="w-12 h-12 rounded-lg bg-[#0a1628]/80 backdrop-blur-sm border border-[#34699A]/40 flex items-center justify-center text-gray-400 hover:text-[#FDF5AA] hover:border-[#58A0C8] transition-all hover:scale-110 hover:shadow-lg hover:shadow-[#58A0C8]/30"
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
                <div className="absolute inset-0 bg-gradient-to-r from-[#58A0C8] to-[#FDF5AA] rounded-3xl blur-3xl opacity-20 animate-pulse"></div>
                <div className="relative bg-gradient-to-br from-[#0a1628] to-[#0e2240] rounded-3xl p-8 border border-[#34699A]/30">
                  <div className="space-y-4">
                    <div className="h-64 bg-gradient-to-br from-[#34699A]/30 to-[#58A0C8]/20 rounded-2xl flex items-center justify-center">
                      <Code size={120} className="text-[#58A0C8]" />
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                      {['React', 'Node.js', 'MongoDB'].map((tech, idx) => (
                        <div key={idx} className="bg-[#0a1628]/70 rounded-lg p-3 text-center border border-[#34699A]/20">
                          <p className="text-[#58A0C8] font-semibold text-sm">{tech}</p>
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


      {/* About Section */}
      <section id="about" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-[#060d1a]/60">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#58A0C8] to-[#FDF5AA]">Me</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#58A0C8] to-[#FDF5AA] mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-gray-300 text-lg leading-relaxed">
                I'm a passionate Full Stack Developer with a strong foundation in the MERN stack and a keen interest in emerging technologies. Currently pursuing my degree while actively building real-world projects and contributing to open-source communities.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                My journey in tech is driven by curiosity and a desire to create impactful solutions. After graduation, I'm excited to transition into AI Engineering or Data Engineering, combining my development skills with cutting-edge AI/ML technologies.
              </p>
              <div className="grid grid-cols-2 gap-6 pt-4">
                <div className="space-y-2">
                  <p className="text-[#58A0C8] font-semibold">Email</p>
                  <p className="text-gray-400">{profileData.email}</p>
                </div>
                <div className="space-y-2">
                  <p className="text-[#58A0C8] font-semibold">Location</p>
                  <p className="text-gray-400">{profileData.location}</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {[
                { number: "20+", label: "Projects Completed" },
                { number: "15+", label: "Technologies" },
                { number: "500+", label: "GitHub Commits" },
                { number: "100%", label: "Client Satisfaction" }
              ].map((stat, idx) => (
                <div key={idx} className="bg-gradient-to-br from-[#0a1628] to-[#0e2240] rounded-2xl p-6 border border-[#34699A]/30 hover:border-[#58A0C8]/50 transition-all">
                  <h3 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#58A0C8] to-[#FDF5AA] mb-2">
                    {stat.number}
                  </h3>
                  <p className="text-gray-400">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#58A0C8] to-[#FDF5AA]">Skills</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#58A0C8] to-[#FDF5AA] mx-auto"></div>
          </div>

          <div className="space-y-12">
            {/* Frontend */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <Palette className="text-[#58A0C8]" /> Frontend Development
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                {techStack.frontend.map((skill, idx) => (
                  <div key={idx} className="bg-[#0a1628]/70 backdrop-blur-sm rounded-xl p-6 border border-[#34699A]/30 hover:border-[#58A0C8]/50 transition-all">
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-white font-semibold text-lg">{skill.name}</span>
                      <span className="text-[#58A0C8] font-bold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-[#060d1a] rounded-full h-3 overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 shadow-lg`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Backend */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <Server className="text-[#34699A]" /> Backend Development
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                {techStack.backend.map((skill, idx) => (
                  <div key={idx} className="bg-[#0a1628]/70 backdrop-blur-sm rounded-xl p-6 border border-[#34699A]/30 hover:border-[#34699A]/60 transition-all">
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-white font-semibold text-lg">{skill.name}</span>
                      <span className="text-[#34699A] font-bold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-[#060d1a] rounded-full h-3 overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 shadow-lg`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tools & Technologies */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <Cpu className="text-[#FDF5AA]" /> Tools & Technologies
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                {techStack.tools.map((skill, idx) => (
                  <div key={idx} className="bg-[#0a1628]/70 backdrop-blur-sm rounded-xl p-6 border border-[#FDF5AA]/15 hover:border-[#FDF5AA]/40 transition-all">
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-white font-semibold text-lg">{skill.name}</span>
                      <span className="text-[#FDF5AA] font-bold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-[#060d1a] rounded-full h-3 overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 shadow-lg`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-[#060d1a]/60">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#58A0C8] to-[#FDF5AA]">Projects</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#58A0C8] to-[#FDF5AA] mx-auto mb-4"></div>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Explore some of my recent work showcasing full-stack development, API integration, and modern web technologies.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, idx) => (
              <div key={idx} className="bg-[#0a1628]/70 backdrop-blur-sm rounded-2xl overflow-hidden border border-[#34699A]/30 hover:border-[#58A0C8]/50 transition-all hover:scale-105 group">
                <div className={`h-48 bg-gradient-to-br ${gradients[project.image]} flex items-center justify-center relative overflow-hidden`}>
                  <Code size={80} className="text-white/20 group-hover:scale-110 transition-transform" />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all"></div>
                </div>
                <div className="p-6 space-y-4">
                  <h3 className="text-2xl font-bold text-white group-hover:text-[#FDF5AA] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="px-3 py-1 bg-[#34699A]/30 text-[#58A0C8] rounded-full text-sm border border-[#34699A]/40">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between pt-4">
                    <div className="flex gap-4">
                      <a
                        href={project.github !== "#" ? project.github : undefined}
                        target={project.github !== "#" ? "_blank" : undefined}
                        rel={project.github !== "#" ? "noopener noreferrer" : undefined}
                        onClick={(e) => {
                          if (project.github === "#") {
                            e.preventDefault();
                            alert("Source code link coming soon!");
                          }
                        }}
                        className={`flex items-center gap-2 transition-colors ${project.github !== "#" ? "text-gray-400 hover:text-white cursor-pointer" : "text-gray-500 cursor-not-allowed"}`}
                      >
                        <Github size={20} /> Code
                      </a>
                      <a
                        href={project.live !== "#" ? project.live : undefined}
                        target={project.live !== "#" ? "_blank" : undefined}
                        rel={project.live !== "#" ? "noopener noreferrer" : undefined}
                        onClick={(e) => {
                          if (project.live === "#") {
                            e.preventDefault();
                            alert("Live demo coming soon!");
                          }
                        }}
                        className={`flex items-center gap-2 transition-colors ${project.live !== "#" ? "text-gray-400 hover:text-[#FDF5AA] cursor-pointer" : "text-gray-500 cursor-not-allowed"}`}
                      >
                        <ExternalLink size={20} /> Live Demo
                      </a>
                    </div>

                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="https://github.com/MrManoj124"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#58A0C8] to-[#FDF5AA] text-[#0a1628] px-8 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-[#58A0C8]/50 transition-all hover:scale-105"
            >
              <Github size={20} /> View All Projects on GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              What I <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#58A0C8] to-[#FDF5AA]">Offer</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#58A0C8] to-[#FDF5AA] mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, idx) => (
              <div key={idx} className="bg-[#0a1628]/70 backdrop-blur-sm rounded-2xl p-8 border border-[#34699A]/30 hover:border-[#58A0C8]/50 transition-all hover:scale-105 group">
                <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                  <service.icon className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-[#FDF5AA] transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-[#060d1a]/60">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#58A0C8] to-[#FDF5AA]">Touch</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#58A0C8] to-[#FDF5AA] mx-auto mb-4"></div>
            <p className="text-gray-400 text-lg">
              Have a project in mind? Let's work together to bring your ideas to life!
            </p>
          </div>

          <div className="bg-[#0a1628]/70 backdrop-blur-sm rounded-2xl p-8 border border-[#34699A]/30">
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[#58A0C8] font-semibold mb-2">Your Name</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-[#060d1a]/80 border border-[#34699A]/40 text-white focus:border-[#58A0C8] focus:outline-none transition-all placeholder-gray-500"
                    placeholder="Abina"
                  />
                </div>
                <div>
                  <label className="block text-[#58A0C8] font-semibold mb-2">Your Email</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-[#060d1a]/80 border border-[#34699A]/40 text-white focus:border-[#58A0C8] focus:outline-none transition-all placeholder-gray-500"
                    placeholder="mathew@gmail.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-[#58A0C8] font-semibold mb-2">Subject</label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-[#0d3050]/60 border border-[#34699A]/40 text-white focus:border-[#58A0C8] focus:outline-none transition-all placeholder-gray-500"
                  placeholder="Project Inquiry"
                />
              </div>
              <div>
                <label className="block text-[#58A0C8] font-semibold mb-2">Message</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows="6"
                  className="w-full px-4 py-3 rounded-lg bg-[#060d1a]/80 border border-[#34699A]/40 text-white focus:border-[#58A0C8] focus:outline-none transition-all resize-none placeholder-gray-500"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>
              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-[#58A0C8] to-[#FDF5AA] text-[#0a1628] py-4 rounded-lg font-semibold hover:shadow-lg hover:shadow-[#58A0C8]/50 transition-all hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-[#0a1628] border-t-transparent rounded-full animate-spin"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Mail size={20} /> Send Message
                  </>
                )}
              </button>
            </div>

            <div className="mt-8 pt-8 border-t border-[#34699A]/30">
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <Mail className="w-8 h-8 text-[#58A0C8] mx-auto mb-2" />
                  <p className="text-gray-400 text-sm">Email</p>
                  <p className="text-white font-semibold">{profileData.email}</p>
                </div>
                <div>
                  <Github className="w-8 h-8 text-[#58A0C8] mx-auto mb-2" />
                  <p className="text-gray-400 text-sm">GitHub</p>
                  <a href="https://github.com/MrManoj124" className="text-white font-semibold hover:text-[#FDF5AA]">@MrManoj124</a>
                </div>
                <div>
                  <Linkedin className="w-8 h-8 text-[#58A0C8] mx-auto mb-2" />
                  <p className="text-gray-400 text-sm">LinkedIn</p>
                  <a href="https://www.linkedin.com/in/manoj-manorooban" className="text-white font-semibold hover:text-[#FDF5AA]">Mr Manoj</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-8 px-4 bg-[#050b15] border-t border-[#34699A]/30">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400">
              © 2024 <span className="text-[#58A0C8] font-semibold">DevPortfolio</span>. Crafted with 💛 by {profileData.name}
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, idx) => (
                <a
                  key={idx}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#FDF5AA] transition-colors"
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default DeveloperPortfolio
