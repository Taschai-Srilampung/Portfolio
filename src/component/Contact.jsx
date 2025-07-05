import React, { useState, useRef } from 'react';
import { useScrollAnimation, useStaggeredAnimation } from '../hooks/useScrollAnimation';

// Custom SVG Icons
const RobotIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
  </svg>
);

const MailIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 3.26a2 2 0 001.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const MapPinIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const PhoneIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
);

const GithubIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);

const LinkedinIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const FacebookIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const YoutubeIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

const WebsiteIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
  </svg>
);

const CogIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const CheckIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

function Contact() {
  // Animation hooks
  const [headerRef, isHeaderVisible] = useScrollAnimation();
  const [contactInfoRef, isContactInfoVisible] = useScrollAnimation();
  const [skillsRef, isSkillsVisible] = useScrollAnimation();
  const [socialRef, visibleSocials] = useStaggeredAnimation(5, {
    threshold: 0.3,
    staggerDelay: 150
  });

  const contactInfo = [
    {
      icon: MailIcon,
      title: "Email",
      content: "taschai.sr@gmail.com",
      subtitle: "Professional inquiries & collaboration",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: PhoneIcon,
      title: "Phone",
      content: "+66 62-703-3574",
      subtitle: "Available 9 AM - 6 PM (GMT+7)",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: MapPinIcon,
      title: "Location",
      content: "Bangkok, Thailand",
      subtitle: "Open to remote & on-site opportunities",
      gradient: "from-green-500 to-emerald-500"
    }
  ];

  const socialLinks = [
    {
      icon: GithubIcon,
      name: "GitHub",
      url: "https://github.com/Taschai-Srilampung",
      color: "hover:text-gray-300",
      bg: "hover:bg-gray-800"
    },
    {
      icon: FacebookIcon,
      name: "Facebook",
      url: "https://www.facebook.com/palm.taschai",
      color: "hover:text-blue-400",
      bg: "hover:bg-blue-900/30"
    },
    {
      icon: YoutubeIcon,
      name: "YouTube",
      url: "https://www.youtube.com/@MyRyoLife",
      color: "hover:text-red-400",
      bg: "hover:bg-red-900/30"
    },
    {
      icon: LinkedinIcon,
      name: "LinkedIn",
      url: "#",
      color: "hover:text-blue-400",
      bg: "hover:bg-blue-900/30"
    }
  ];

  const skills = [
    { name: "ROS2 & SLAM", level: "Learning" },
    { name: "Arduino/ESP32", level: "Intermediate" },
    { name: "Python/C++", level: "Intermediate" },
    { name: "Linux Systems", level: "Intermediate" },
    { name: "Hardware Integration", level: "Intermediate" },
    { name: "Problem Solving", level: "Strong" }
  ];

  const expertise = [
    "Robotics Software Development",
    "Embedded Systems Programming",
    "Hardware-Software Integration",
    "ROS2 & Autonomous Navigation",
    "Sensor Integration & SLAM",
    "Mobile Device Repair & Troubleshooting"
  ];

  return (
    <section id="contact">
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 py-16 lg:py-24 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pink-500/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
          
          {/* Animated Grid */}
          <div className="absolute inset-0 opacity-5">
            <div className="w-full h-full" style={{
              backgroundImage: `
                linear-gradient(rgba(139, 92, 246, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(139, 92, 246, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px',
              animation: 'grid-move 20s ease-in-out infinite alternate'
            }}></div>
          </div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-20 relative z-10">
          {/* Header Section */}
          <div 
            ref={headerRef}
            className={`text-center mb-12 lg:mb-16 transform transition-all duration-1000 ${
              isHeaderVisible 
                ? 'translate-y-0 opacity-100' 
                : 'translate-y-16 opacity-0'
            }`}
          >
            <div className="flex items-center justify-center mb-6">
              <div className="p-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl">
                <RobotIcon />
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Let's Build the <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Future</span>
            </h1>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full mb-8"></div>
            <p className="text-gray-300 text-base sm:text-lg lg:text-xl max-w-4xl mx-auto leading-relaxed">
              Passionate Robotics Software Engineer seeking opportunities to contribute to innovative robotics projects. 
              Experienced in ROS2, embedded systems, and hardware-software integration with a strong foundation in problem-solving.
            </p>
          </div>

          {/* Contact Info Cards */}
          <div 
            ref={contactInfoRef}
            className={`grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 lg:mb-16 transform transition-all duration-1000 delay-300 ${
              isContactInfoVisible 
                ? 'translate-y-0 opacity-100' 
                : 'translate-y-12 opacity-0'
            }`}
          >
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <div
                  key={index}
                  className="group bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${info.gradient} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent />
                  </div>
                  <h3 className="text-white font-semibold text-lg mb-2">{info.title}</h3>
                  <p className="text-purple-300 font-medium mb-1">{info.content}</p>
                  <p className="text-gray-400 text-sm">{info.subtitle}</p>
                </div>
              );
            })}
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Professional Profile */}
            <div 
              ref={skillsRef}
              className={`transform transition-all duration-1000 delay-500 ${
                isSkillsVisible 
                  ? 'translate-x-0 opacity-100' 
                  : '-translate-x-12 opacity-0'
              }`}
            >
              <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-purple-500/30 transition-all duration-500">
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <div className="p-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg">
                    <CogIcon />
                  </div>
                  Professional Profile
                </h2>
                
                <div className="space-y-6">
                  {/* About */}
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-3">About Me</h3>
                    <p className="text-gray-300 leading-relaxed">
                      Recent Computer Science graduate with hands-on experience in robotics and embedded systems. 
                      Currently developing an autonomous cleaning robot using ROS2 and ESP32. 
                      Strong background in hardware-software troubleshooting and systematic problem-solving.
                    </p>
                  </div>

                  {/* Areas of Expertise */}
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-3">Areas of Expertise</h3>
                    <div className="grid grid-cols-1 gap-2">
                      {expertise.map((item, index) => (
                        <div key={index} className="flex items-center gap-3 text-gray-300">
                          <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                          <span className="text-sm">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technical Skills */}
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-3">Technical Skills</h3>
                    <div className="space-y-3">
                      {skills.map((skill, index) => (
                        <div key={index} className="flex items-center justify-between">
                          <span className="text-gray-300 text-sm">{skill.name}</span>
                          <span className="text-purple-400 text-xs font-medium bg-purple-500/20 px-2 py-1 rounded">
                            {skill.level}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Current Status */}
                  <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-lg p-4">
                    <div className="flex items-center gap-2 text-green-400 mb-2">
                      <CheckIcon />
                      <span className="font-medium">Available for Opportunities</span>
                    </div>
                    <p className="text-gray-300 text-sm">
                      Open to entry-level Robotics Software Engineer positions. 
                      Eager to contribute to innovative robotics projects and continue learning.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Connect & Contact */}
            <div className={`transform transition-all duration-1000 delay-700 ${
              isSkillsVisible 
                ? 'translate-x-0 opacity-100' 
                : 'translate-x-12 opacity-0'
            }`}>
              <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-purple-500/30 transition-all duration-500">
                <h2 className="text-2xl font-bold text-white mb-6">Let's Connect</h2>
                
                <p className="text-gray-300 leading-relaxed mb-6">
                  I'm passionate about robotics and always eager to learn new technologies. 
                  Looking for opportunities to contribute to innovative robotics projects and grow as a professional.
                </p>

                {/* Current Project Highlight */}
                <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-lg p-4 mb-6">
                  <h3 className="text-white font-semibold mb-2">🤖 Current Project</h3>
                  <p className="text-gray-300 text-sm">
                    Developing an autonomous cleaning robot with ROS2 navigation and SLAM implementation using ESP32 and LiDAR sensors.
                  </p>
                </div>

                {/* Quick Facts */}
                <div className="space-y-3 mb-8">
                  <div className="flex items-center gap-3 text-gray-300">
                    <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                    <span className="text-sm">Entry-level position seeker with strong fundamentals</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300">
                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse delay-300"></div>
                    <span className="text-sm">Self-motivated learner with hands-on project experience</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse delay-700"></div>
                    <span className="text-sm">Available for both remote and on-site work</span>
                  </div>
                </div>

                {/* Social Links */}
                <div>
                  <h3 className="text-white font-semibold mb-4">Connect with me</h3>
                  <div 
                    ref={socialRef}
                    className="grid grid-cols-2 gap-3"
                  >
                    {socialLinks.map((social, index) => {
                      const IconComponent = social.icon;
                      return (
                        <a
                          key={index}
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`group flex items-center gap-3 p-3 bg-gray-700/30 rounded-lg border border-gray-600/50 hover:border-purple-500/50 transition-all duration-300 transform hover:scale-105 ${social.bg} ${social.color} ${
                            visibleSocials.has(index)
                              ? 'translate-y-0 opacity-100' 
                              : 'translate-y-4 opacity-0'
                          }`}
                          style={{
                            transitionDelay: `${800 + index * 100}ms`
                          }}
                        >
                          <IconComponent />
                          <span className="text-gray-300 group-hover:text-white transition-colors text-sm">
                            {social.name}
                          </span>
                        </a>
                      );
                    })}
                  </div>
                </div>

                {/* Direct Contact */}
                <div className="mt-8 pt-6 border-t border-gray-700/50">
                  <p className="text-gray-400 text-sm mb-4">Ready to discuss robotics opportunities?</p>
                  <div className="flex gap-3">
                    <a 
                      href="tel:+66627033574"
                      className="flex-1 bg-gradient-to-r from-green-600 to-emerald-600 text-white py-3 px-4 rounded-lg font-medium hover:from-green-700 hover:to-emerald-700 transition-all duration-300 flex items-center justify-center gap-2 text-sm"
                    >
                      <PhoneIcon />
                      <span>Call Me</span>
                    </a>
                    <a 
                      href="mailto:taschai.sr@gmail.com"
                      className="flex-1 bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-3 px-4 rounded-lg font-medium hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center gap-2 text-sm"
                    >
                      <MailIcon />
                      <span>Email Me</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Custom CSS for animations */}
        <style jsx>{`
          @keyframes grid-move {
            0%, 100% { transform: translate(0, 0); }
            25% { transform: translate(10px, 5px); }
            50% { transform: translate(-5px, 10px); }
            75% { transform: translate(-10px, -5px); }
          }
        `}</style>
      </div>
    </section>
  );
}

export default Contact;