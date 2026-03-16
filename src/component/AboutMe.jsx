import React from 'react';
import { useScrollAnimation, useStaggeredAnimation } from '../hooks/useScrollAnimation';

const AboutMe = React.memo(() => {
  const [headerRef, isHeaderVisible] = useScrollAnimation();
  const [leftColumnRef, isLeftVisible] = useScrollAnimation({ 
    threshold: 0.2, 
    rootMargin: '0px 0px -100px 0px' 
  });
  const [rightColumnRef, isRightVisible] = useScrollAnimation({ 
    threshold: 0.2, 
    rootMargin: '0px 0px -100px 0px' 
  });
  const [projectsRef, visibleProjects] = useStaggeredAnimation(4, {
    threshold: 0.1,
    staggerDelay: 200
  });

  const recentProjects = [
    {
      title: "TinyRC — Remote Control Platform",
      type: "Professional Experience (Tiny Stack)",
      period: "Nov 2025 - Present",
      description: "Built a full-stack real-time RC vehicle control platform with React dashboard, Node.js/WebSocket backend, and Raspberry Pi hardware. Designed servo gimbal (pan/tilt) for camera control, battery charging circuits, queue-based user system, and live video streaming via Pi Camera.",
      tech: ["React", "Node.js", "WebSocket", "Raspberry Pi", "Servo Gimbal", "Pi Camera"]
    },
    {
      title: "Smartphone Repair Technician",
      type: "Professional Experience",
      period: "Mar 2025 - Present",
      description: "Performing hardware repairs and software troubleshooting. Specialized in iPhone Face ID repairs, bootloader bypass procedures, and systematic hardware-software integration debugging.",
      tech: ["Hardware Repair", "Firmware", "Debugging", "System Integration"]
    },
    {
      title: "Equipment Management System",
      type: "Senior Project",
      period: "2024",
      description: "Developed web application using React frontend and Node.js/Strapi backend with MySQL. Deployed system for university department use with full-stack development and cloud deployment experience.",
      tech: ["React", "Node.js", "Strapi", "MySQL", "Cloud Deployment"]
    },
    {
      title: "Vehicle & Barrier Detection using YOLOv8",
      type: "Academic Project",
      period: "2024",
      description: "Trained object detection model on manually labeled Google Maps imagery. Demonstrated computer vision concepts and machine learning model training.",
      tech: ["YOLOv8", "Computer Vision", "Python", "Machine Learning"]
    },
  ];

  return (
    <section id="about" >
    <div className="bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 py-16 lg:py-24">
      {/* Background effects - optimized */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-10 w-32 h-32 md:w-64 md:h-64 bg-purple-500/5 rounded-full blur-3xl will-change-transform"></div>
        <div className="absolute bottom-1/4 right-10 w-40 h-40 md:w-80 md:h-80 bg-blue-500/5 rounded-full blur-3xl will-change-transform"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-20 relative z-10">
        {/* Section Header */}
        <div 
          ref={headerRef}
          className={`text-center mb-12 lg:mb-16 transform transition-all duration-1000 will-change-transform ${
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
            className={`space-y-6 lg:space-y-8 transform transition-all duration-1000 will-change-transform ${
              isLeftVisible 
                ? 'translate-x-0 opacity-100' 
                : '-translate-x-16 opacity-0'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            {/* Name & Title */}
            <div className="transform transition-all duration-700 delay-300 will-change-transform">
              <h3 className="text-2xl sm:text-3xl font-bold text-purple-400 mb-2 lg:mb-3">
                Taschai Srilampung
              </h3>
              <p className="text-xl sm:text-2xl font-semibold text-gray-300 mb-4 lg:mb-6">
                Software Engineer & Robotic Software Engineer
              </p>
            </div>
            
            {/* Description */}
            <div className="space-y-4 transform transition-all duration-700 delay-500 will-change-contents">
              <p className="text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed">
                Computer Science graduate and Software Engineer with a hands-on "Maker" mindset. Currently working as an R&D Technician at Tiny Stack, building a real-time RC vehicle control platform (TinyRC) — from designing servo gimbal hardware and battery circuits to developing the full-stack web dashboard with React, Node.js, and WebSocket.
              </p>
              <p className="text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed">
                With a background in mobile device repair, I bring a unique advantage in systematic diagnosis and component-level troubleshooting. I am passionate about IoT, Embedded Systems, and Full-Stack Development, constantly seeking to apply my technical skills to create innovative solutions and share knowledge with the maker community.
              </p>
            </div>
            
            {/* Contact Info Grid */}
            <div className="grid sm:grid-cols-2 gap-4 lg:gap-6 pt-4 transform transition-all duration-700 delay-700 will-change-transform">
              <div className="space-y-2 hover:transform hover:scale-105 transition-transform duration-300 will-change-transform">
                <p className="text-gray-400 text-sm font-medium">Education:</p>
                <p className="text-white text-sm lg:text-base">B.S. Computer Science</p>
                <p className="text-gray-300 text-xs lg:text-sm">Chulalongkorn University (GPA: 3.23)</p>
              </div>
              <div className="space-y-2 hover:transform hover:scale-105 transition-transform duration-300 will-change-transform">
                <p className="text-gray-400 text-sm font-medium">Email:</p>
                <p className="text-white text-sm lg:text-base">taschai.sr@gmail.com</p>
              </div>
              <div className="space-y-2 hover:transform hover:scale-105 transition-transform duration-300 will-change-transform">
                <p className="text-gray-400 text-sm font-medium">Location:</p>
                <p className="text-white text-sm lg:text-base">Bangkok, Thailand</p>
              </div>
              <div className="space-y-2 hover:transform hover:scale-105 transition-transform duration-300 will-change-transform">
                <p className="text-gray-400 text-sm font-medium">LinkedIn:</p>
                <p className="text-white text-sm lg:text-base">Taschai Srilampung</p>
              </div>
            </div>

            {/* Key Skills */}
            <div className="transform transition-all duration-700 delay-800 will-change-contents">
              <h4 className="text-lg font-semibold text-purple-400 mb-3">Core Technologies</h4>
              <div className="flex flex-wrap gap-2">
                {["React", "Node.js", "WebSocket", "Raspberry Pi", "Python", "Linux", "ESP32", "IoT"].map((skill, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 bg-purple-500/20 text-purple-300 text-sm rounded-full border border-purple-500/30 hover:bg-purple-500/30 transition-colors duration-300 will-change-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            {/* Contact Button */}
            <div className="pt-4 transform transition-all duration-700 delay-900 will-change-transform">
              <a 
                href="#contact"
                className="inline-block group bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 lg:px-8 py-3 lg:py-3.5 rounded-full font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 text-sm lg:text-base shadow-lg hover:shadow-purple-500/25 will-change-transform"
              >
                <span className="flex items-center gap-2">
                  Contact Me
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300 will-change-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </a>
            </div>
          </div>

          {/* Right Column - Projects & Experience */}
          <div 
            ref={rightColumnRef}
            className={`space-y-6 transform transition-all duration-1000 will-change-transform ${
              isRightVisible 
                ? 'translate-x-0 opacity-100' 
                : 'translate-x-16 opacity-0'
            }`}
            style={{ transitionDelay: '400ms' }}
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-purple-400 mb-6 lg:mb-8">
              Projects & Experience
            </h3>
            
            {/* Projects Timeline */}
            <div className="relative" ref={projectsRef}>
              {/* Timeline line */}
              <div className="absolute left-4 top-6 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full"></div>
              
              <div className="space-y-6 lg:space-y-8">
                {recentProjects.map((project, index) => (
                  <div 
                    key={index} 
                    className={`relative group transform transition-all duration-700 will-change-transform ${
                      visibleProjects.has(index)
                        ? 'translate-y-0 opacity-100' 
                        : 'translate-y-8 opacity-0'
                    }`}
                    style={{ 
                      transitionDelay: `${index * 200 + 600}ms` 
                    }}
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-2 top-4 w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full border-2 border-gray-900 group-hover:scale-125 transition-transform duration-300 will-change-transform"></div>
                    
                    {/* Project Card */}
                    <div className="ml-12 p-4 lg:p-6 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 group-hover:transform group-hover:scale-[1.02] group-hover:shadow-xl group-hover:shadow-purple-500/10 will-change-transform">
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
});

AboutMe.displayName = 'AboutMe';

export default AboutMe;