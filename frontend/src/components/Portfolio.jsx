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