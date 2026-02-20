import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = ['Home', 'About', 'Skills', 'Projects', 'Services', 'Contact'];

  const scrollToSection = (section) => {
    const element = document.getElementById(section.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };


  return (
    <nav className="fixed w-full top-0 z-50 bg-[#113F67]/90 backdrop-blur-xl border-b border-[#58A0C8]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#58A0C8] to-[#FDF5AA] flex items-center justify-center text-[#113F67] font-bold text-xl shadow-lg shadow-[#58A0C8]/50">
              &lt;/&gt;
            </div>
            <span className="ml-3 text-xl font-bold text-white">DevPortfolio</span>
          </div>
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-[#58A0C8] hover:text-[#FDF5AA] transition-colors font-medium relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#58A0C8] to-[#FDF5AA] group-hover:w-full transition-all"></span>
              </button>
            ))}
            <button className="bg-gradient-to-r from-[#58A0C8] to-[#FDF5AA] text-[#113F67] px-6 py-2 rounded-lg font-semibold hover:shadow-lg hover:shadow-[#58A0C8]/50 transition-all hover:scale-105">
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
        <div className="md:hidden bg-[#113F67]/95 backdrop-blur-xl border-t border-[#58A0C8]/20">
          <div className="px-4 py-3 space-y-3">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="block w-full text-left text-gray-300 hover:text-[#FDF5AA] py-2"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};


export default Navbar;