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


  return (
    <footer className="relative py-8 px-4 bg-[#0d2d45] border-t border-[#34699A]/30">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 flex items-center gap-2">
            © 2024 <span className="text-[#58A0C8] font-semibold">{profileData.name}</span>
            <span className="flex items-center gap-1">
              • Made with <Heart size={16} className="text-[#FDF5AA] fill-current" />
            </span>
          </p>
          <div className="flex gap-4">
            {socialLinks.map((social, idx) => (
              <a
                key={idx}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#FDF5AA] transition-colors"
                aria-label={social.label}
              >
                <social.icon size={20} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;