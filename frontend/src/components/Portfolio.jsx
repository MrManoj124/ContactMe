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
    tools: [
      { name: "Git & GitHub", level: 90, color: "from-orange-400 to-red-500" },
      { name: "Docker", level: 75, color: "from-blue-400 to-blue-600" },
      { name: "VS Code", level: 95, color: "from-blue-500 to-purple-500" },
      { name: "Postman", level: 88, color: "from-orange-500 to-orange-700" }
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
                  className={`text - gray - 300 hover: text - purple - 400 transition - colors font - medium relative group ${activeSection === item.toLowerCase() ? 'text-purple-400' : ''
                    } `}
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


      {/* About Section */}
      <section id="about" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Me</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto"></div>
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
                  <p className="text-purple-400 font-semibold">Email</p>
                  <p className="text-gray-400">{profileData.email}</p>
                </div>
                <div className="space-y-2">
                  <p className="text-purple-400 font-semibold">Location</p>
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
                <div key={idx} className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-6 border border-purple-500/20 hover:border-purple-500/50 transition-all">
                  <h3 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-2">
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
              Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Skills</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto"></div>
          </div>

          <div className="space-y-12">
            {/* Frontend */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <Palette className="text-purple-400" /> Frontend Development
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                {techStack.frontend.map((skill, idx) => (
                  <div key={idx} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/50 transition-all">
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-white font-semibold text-lg">{skill.name}</span>
                      <span className="text-purple-400 font-bold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-3 overflow-hidden">
                      <div
                        className={`h - full bg - gradient - to - r ${skill.color} rounded - full transition - all duration - 1000 shadow - lg`}
                        style={{ width: `${skill.level}% ` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Backend */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <Server className="text-green-400" /> Backend Development
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                {techStack.backend.map((skill, idx) => (
                  <div key={idx} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-green-500/20 hover:border-green-500/50 transition-all">
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-white font-semibold text-lg">{skill.name}</span>
                      <span className="text-green-400 font-bold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-3 overflow-hidden">
                      <div
                        className={`h - full bg - gradient - to - r ${skill.color} rounded - full transition - all duration - 1000 shadow - lg`}
                        style={{ width: `${skill.level}% ` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tools & Technologies */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <Cpu className="text-orange-400" /> Tools & Technologies
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                {techStack.tools.map((skill, idx) => (
                  <div key={idx} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-orange-500/20 hover:border-orange-500/50 transition-all">
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-white font-semibold text-lg">{skill.name}</span>
                      <span className="text-orange-400 font-bold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-3 overflow-hidden">
                      <div
                        className={`h - full bg - gradient - to - r ${skill.color} rounded - full transition - all duration - 1000 shadow - lg`}
                        style={{ width: `${skill.level}% ` }}
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
      <section id="projects" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Projects</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-4"></div>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Explore some of my recent work showcasing full-stack development, API integration, and modern web technologies.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, idx) => (
              <div key={idx} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-purple-500/20 hover:border-purple-500/50 transition-all hover:scale-105 group">
                <div className={`h - 48 bg - gradient - to - br ${gradients[project.image]} flex items - center justify - center relative overflow - hidden`}>
                  <Code size={80} className="text-white/20 group-hover:scale-110 transition-transform" />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all"></div>
                </div>
                <div className="p-6 space-y-4">
                  <h3 className="text-2xl font-bold text-white group-hover:text-purple-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm border border-purple-500/30">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4 pt-4">
                    <a
                      href={project.github}
                      className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                    >
                      <Github size={20} /> Code
                    </a>
                    <a
                      href={project.live}
                      className="flex items-center gap-2 text-gray-400 hover:text-purple-400 transition-colors"
                    >
                      <ExternalLink size={20} /> Live Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all hover:scale-105"
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
              What I <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Offer</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, idx) => (
              <div key={idx} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 hover:border-purple-500/50 transition-all hover:scale-105 group">
                <div className={`w - 16 h - 16 bg - gradient - to - r ${service.color} rounded - xl flex items - center justify - center mb - 6 group - hover: scale - 110 transition - transform shadow - lg`}>
                  <service.icon className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors">
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
      <section id="contact" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Touch</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-4"></div>
            <p className="text-gray-400 text-lg">
              Have a project in mind? Let's work together to bring your ideas to life!
            </p>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20">
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-purple-400 font-semibold mb-2">Your Name</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-slate-900/50 border border-purple-500/30 text-white focus:border-purple-500 focus:outline-none transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-purple-400 font-semibold mb-2">Your Email</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-slate-900/50 border border-purple-500/30 text-white focus:border-purple-500 focus:outline-none transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-purple-400 font-semibold mb-2">Subject</label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-slate-900/50 border border-purple-500/30 text-white focus:border-purple-500 focus:outline-none transition-all"
                  placeholder="Project Inquiry"
                />
              </div>
              <div>
                <label className="block text-purple-400 font-semibold mb-2">Message</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows="6"
                  className="w-full px-4 py-3 rounded-lg bg-slate-900/50 border border-purple-500/30 text-white focus:border-purple-500 focus:outline-none transition-all resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>
              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-4 rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Mail size={20} /> Send Message
                  </>
                )}
              </button>
            </div>

            <div className="mt-8 pt-8 border-t border-purple-500/20">
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <Mail className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                  <p className="text-gray-400 text-sm">Email</p>
                  <p className="text-white font-semibold">{profileData.email}</p>
                </div>
                <div>
                  <Github className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                  <p className="text-gray-400 text-sm">GitHub</p>
                  <a href="https://github.com/yourusername" className="text-white font-semibold hover:text-purple-400">@yourusername</a>
                </div>
                <div>
                  <Linkedin className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                  <p className="text-gray-400 text-sm">LinkedIn</p>
                  <a href="https://linkedin.com/in/yourusername" className="text-white font-semibold hover:text-purple-400">Connect</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-8 px-4 bg-slate-900 border-t border-purple-500/20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400">
              © 2024 <span className="text-purple-400 font-semibold">DevPortfolio</span>. Crafted with 💜 by {profileData.name}
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, idx) => (
                <a
                  key={idx}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-purple-400 transition-colors"
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
