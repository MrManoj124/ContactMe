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