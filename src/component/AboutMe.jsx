import React from 'react';
import { useScrollAnimation, useStaggeredAnimation } from '../hooks/useScrollAnimation';

function AboutMe() {
  const [headerRef, isHeaderVisible] = useScrollAnimation();
  const [leftColumnRef, isLeftVisible] = useScrollAnimation({ 
    threshold: 0.2, 
    rootMargin: '0px 0px -100px 0px' 
  });
  const [rightColumnRef, isRightVisible] = useScrollAnimation({ 
    threshold: 0.2, 
    rootMargin: '0px 0px -100px 0px' 
  });
  const [projectsRef, visibleProjects] = useStaggeredAnimation(3, {
    threshold: 0.1,
    staggerDelay: 200
  });

  const recentProjects = [
    {
      title: "Mobile Repair Shop Website",
      type: "Freelance Project",
      period: "2024",
      description: "Responsive frontend website for a mobile phone repair shop. Focused on creating an intuitive user interface that works seamlessly on both desktop and mobile devices.",
      tech: ["React", "Tailwind CSS", "Vite.js"]
    },
    {
      title: "Equipment Management System",
      type: "Final Year Project",
      period: "2024",
      description: "Fullstack web application for equipment inventory management using React, Tailwind CSS, MySQL, and Strapi. Handled complete development cycle from requirements gathering to deployment.",
      tech: ["React", "Tailwind CSS", "MySQL", "Strapi"]
    },
    {
      title: "Vehicle & Barrier Detection AI",
      type: "Term Project",
      period: "2024",
      description: "Computer vision project using YOLOv8 for detecting vehicles and barriers in images. Responsible for data labeling and model training with google map images.",
      tech: ["YOLOv8", "Python", "Computer Vision"]
    },
  
  ];

  return (
    <section id="about" >
    <div className="bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 py-16 lg:py-24">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-10 w-32 h-32 md:w-64 md:h-64 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-10 w-40 h-40 md:w-80 md:h-80 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-20 relative z-10">
        {/* Section Header */}
        <div 
          ref={headerRef}
          className={`text-center mb-12 lg:mb-16 transform transition-all duration-1000 ${
            isHeaderVisible 
              ? 'translate-y-0 opacity-100' 
              : 'translate-y-16 opacity-0'
          }`}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            About <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16">
          {/* Left Column - About Info */}
          <div 
            ref={leftColumnRef}
            className={`space-y-6 lg:space-y-8 transform transition-all duration-1000 ${
              isLeftVisible 
                ? 'translate-x-0 opacity-100' 
                : '-translate-x-16 opacity-0'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            {/* Name */}
            <div className="transform transition-all duration-700 delay-300">
              <h3 className="text-2xl sm:text-3xl font-bold text-purple-400 mb-4 lg:mb-6">
                Taschai Srilampung
              </h3>
            </div>
            
            {/* Description */}
            <div className="space-y-4 transform transition-all duration-700 delay-500">
              <p className="text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed">
                Hi, I'm Taschai — I enjoy solving unique problems and learning new things. 
                I'm a self-motivated learner with a strong interest in software development, AI, and Robotics.
              </p>
              <p className="text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed">
                As an INTP-T personality, I love diving deep into complex problems and finding innovative solutions. 
                My curiosity drives me to constantly explore new technologies and challenge myself with diverse projects.
              </p>
              <p className="text-purple-300 text-sm sm:text-base lg:text-lg font-medium italic">
                "It always seems impossible until it is done." - Nelson Mandela
              </p>
            </div>
            
            {/* Contact Info Grid */}
            <div className="grid sm:grid-cols-2 gap-4 lg:gap-6 pt-4 transform transition-all duration-700 delay-700">
              <div className="space-y-2 hover:transform hover:scale-105 transition-transform duration-300">
                <p className="text-gray-400 text-sm font-medium">Name:</p>
                <p className="text-white text-sm lg:text-base">Taschai Srilampung</p>
              </div>
              <div className="space-y-2 hover:transform hover:scale-105 transition-transform duration-300">
                <p className="text-gray-400 text-sm font-medium">Email:</p>
                <p className="text-white text-sm lg:text-base">taschai.sr@gmail.com</p>
              </div>
              <div className="space-y-2 hover:transform hover:scale-105 transition-transform duration-300">
                <p className="text-gray-400 text-sm font-medium">Education:</p>
                <p className="text-white text-sm lg:text-base">Chulalongkorn University</p>
              </div>
              <div className="space-y-2 hover:transform hover:scale-105 transition-transform duration-300">
                <p className="text-gray-400 text-sm font-medium">Location:</p>
                <p className="text-white text-sm lg:text-base">Bangkok, Thailand</p>
              </div>
            </div>
            
            {/* Contact Button */}
            <div className="pt-4 transform transition-all duration-700 delay-900">
            <a 
  href="#contact"
  className="inline-block group bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 lg:px-8 py-3 lg:py-3.5 rounded-full font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 text-sm lg:text-base shadow-lg hover:shadow-purple-500/25"
>
  <span className="flex items-center gap-2">
    Contact Me
    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  </span>
</a>
            </div>
          </div>

          {/* Right Column - Recent Projects */}
          <div 
            ref={rightColumnRef}
            className={`space-y-6 transform transition-all duration-1000 ${
              isRightVisible 
                ? 'translate-x-0 opacity-100' 
                : 'translate-x-16 opacity-0'
            }`}
            style={{ transitionDelay: '400ms' }}
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-purple-400 mb-6 lg:mb-8">
              Recent Projects
            </h3>
            
            {/* Projects Timeline */}
            <div className="relative" ref={projectsRef}>
              {/* Timeline line */}
              <div className="absolute left-4 top-6 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full"></div>
              
              <div className="space-y-6 lg:space-y-8">
                {recentProjects.map((project, index) => (
                  <div 
                    key={index} 
                    className={`relative group transform transition-all duration-700 ${
                      visibleProjects.has(index)
                        ? 'translate-y-0 opacity-100' 
                        : 'translate-y-8 opacity-0'
                    }`}
                    style={{ 
                      transitionDelay: `${index * 200 + 600}ms` 
                    }}
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-2 top-4 w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full border-2 border-gray-900 group-hover:scale-125 transition-transform duration-300"></div>
                    
                    {/* Project Card */}
                    <div className="ml-12 p-4 lg:p-6 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 group-hover:transform group-hover:scale-[1.02] group-hover:shadow-xl group-hover:shadow-purple-500/10">
                      <h4 className="text-lg lg:text-xl font-bold text-white mb-1 lg:mb-2 group-hover:text-purple-300 transition-colors duration-300">
                        {project.title}
                      </h4>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 mb-3 lg:mb-4">
                        <p className="text-purple-400 font-medium text-sm lg:text-base">
                          {project.type}
                        </p>
                        <span className="hidden sm:block text-gray-500">•</span>
                        <p className="text-gray-400 text-sm lg:text-base">
                          {project.period}
                        </p>
                      </div>
                      <p className="text-gray-300 text-sm lg:text-base leading-relaxed mb-3">
                        {project.description}
                      </p>
                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, techIndex) => (
                          <span 
                            key={techIndex}
                            className="px-2 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-full border border-purple-500/30"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
}

export default AboutMe;