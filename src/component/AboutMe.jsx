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
  const [experiencesRef, visibleExperiences] = useStaggeredAnimation(3, {
    threshold: 0.1,
    staggerDelay: 200
  });

  const experiences = [
    {
      title: "Senior Software Engineer",
      company: "Tech Solutions Co., Ltd.",
      period: "2020 - Present",
      description: "Leading development of enterprise web applications and implementing security best practices."
    },
    {
      title: "Full Stack Developer",
      company: "Digital Innovations",
      period: "2018 - 2020",
      description: "Developed and maintained web applications using React and Node.js."
    },
    {
      title: "Software Developer Intern",
      company: "CodeCraft",
      period: "2017 - 2018",
      description: "Assisted in developing features for client projects and internal tools."
    }
  ];

  return (
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
            {/* Thai Name */}
            <div className="transform transition-all duration-700 delay-300">
              <h3 className="text-2xl sm:text-3xl font-bold text-purple-400 mb-4 lg:mb-6">
                ทัศชัย ศรีลำพัง
              </h3>
            </div>
            
            {/* Description */}
            <div className="space-y-4 transform transition-all duration-700 delay-500">
              <p className="text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed">
                I'm a passionate Software Engineer with expertise in building robust and scalable 
                applications. With a strong foundation in both frontend and backend technologies, I enjoy 
                creating solutions that are not only functional but also secure and user-friendly.
              </p>
              <p className="text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed">
                My journey in software development began with a fascination for how technology can 
                solve real-world problems. Today, I specialize in web development, system architecture, 
                and cybersecurity, constantly learning and adapting to new technologies.
              </p>
            </div>
            
            {/* Contact Info Grid */}
            <div className="grid sm:grid-cols-2 gap-4 lg:gap-6 pt-4 transform transition-all duration-700 delay-700">
              <div className="space-y-2 hover:transform hover:scale-105 transition-transform duration-300">
                <p className="text-gray-400 text-sm font-medium">Name:</p>
                <p className="text-white text-sm lg:text-base">ทัศชัย ศรีลำพัง</p>
              </div>
              <div className="space-y-2 hover:transform hover:scale-105 transition-transform duration-300">
                <p className="text-gray-400 text-sm font-medium">Email:</p>
                <p className="text-white text-sm lg:text-base">taschai.sr@gmail.com</p>
              </div>
              <div className="space-y-2 hover:transform hover:scale-105 transition-transform duration-300">
                <p className="text-gray-400 text-sm font-medium">Role:</p>
                <p className="text-white text-sm lg:text-base">Software Engineer</p>
              </div>
              <div className="space-y-2 hover:transform hover:scale-105 transition-transform duration-300">
                <p className="text-gray-400 text-sm font-medium">Location:</p>
                <p className="text-white text-sm lg:text-base">Bangkok, Thailand</p>
              </div>
            </div>
            
            {/* Contact Button */}
            <div className="pt-4 transform transition-all duration-700 delay-900">
              <button className="group bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 lg:px-8 py-3 lg:py-3.5 rounded-full font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 text-sm lg:text-base shadow-lg hover:shadow-purple-500/25">
                <span className="flex items-center gap-2">
                  Contact Me
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </button>
            </div>
          </div>

          {/* Right Column - Experience */}
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
              My Experience
            </h3>
            
            {/* Experience Timeline */}
            <div className="relative" ref={experiencesRef}>
              {/* Timeline line */}
              <div className="absolute left-4 top-6 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full"></div>
              
              <div className="space-y-6 lg:space-y-8">
                {experiences.map((exp, index) => (
                  <div 
                    key={index} 
                    className={`relative group transform transition-all duration-700 ${
                      visibleExperiences.has(index)
                        ? 'translate-y-0 opacity-100' 
                        : 'translate-y-8 opacity-0'
                    }`}
                    style={{ 
                      transitionDelay: `${index * 200 + 600}ms` 
                    }}
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-2 top-4 w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full border-2 border-gray-900 group-hover:scale-125 transition-transform duration-300"></div>
                    
                    {/* Experience Card */}
                    <div className="ml-12 p-4 lg:p-6 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 group-hover:transform group-hover:scale-[1.02] group-hover:shadow-xl group-hover:shadow-purple-500/10">
                      <h4 className="text-lg lg:text-xl font-bold text-white mb-1 lg:mb-2 group-hover:text-purple-300 transition-colors duration-300">
                        {exp.title}
                      </h4>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 mb-3 lg:mb-4">
                        <p className="text-purple-400 font-medium text-sm lg:text-base">
                          {exp.company}
                        </p>
                        <span className="hidden sm:block text-gray-500">•</span>
                        <p className="text-gray-400 text-sm lg:text-base">
                          {exp.period}
                        </p>
                      </div>
                      <p className="text-gray-300 text-sm lg:text-base leading-relaxed">
                        {exp.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;