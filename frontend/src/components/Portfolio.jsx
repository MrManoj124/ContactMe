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