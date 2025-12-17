import React from 'react';
import { Github, Linkedin, Twitter, Facebook, Instagram, Mail, Heart } from 'lucide-react';
import { profileData } from '../../data/profile';

const Footer = () => {
  const socialLinks = [
    { icon: Github, url: profileData.social.github, label: 'GitHub' },
    { icon: Linkedin, url: profileData.social.linkedin, label: 'LinkedIn' },
    { icon: Twitter, url: profileData.social.twitter, label: 'Twitter' },
    { icon: Facebook, url: profileData.social.facebook, label: 'Facebook' },
    { icon: Instagram, url: profileData.social.instagram, label: 'Instagram' },
  ];