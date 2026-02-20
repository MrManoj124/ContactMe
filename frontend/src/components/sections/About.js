import React from 'react';
import { profileData } from '../../data/profile';

const About = () => {
  const stats = [
    { number: "20+", label: "Projects Completed" },
    { number: "15+", label: "Technologies" },
    { number: "500+", label: "GitHub Commits" },
    { number: "100%", label: "Client Satisfaction" }
  ];

  return (
    <section id="about" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-[#113F67]/60">
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
            {stats.map((stat, idx) => (
              <div key={idx} className="bg-gradient-to-br from-[#113F67] to-[#1a3550] rounded-2xl p-6 border border-[#34699A]/30 hover:border-[#58A0C8]/50 transition-all">
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
  );
};

export default About;