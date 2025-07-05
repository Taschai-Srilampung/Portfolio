// component/Skills.js
import React, { useState, useEffect } from 'react';
import { useScrollAnimation, useStaggeredAnimation } from '../hooks/useScrollAnimation';

function Skills() {
  const [animatedSkills, setAnimatedSkills] = useState(new Set());
  
  // Scroll animations
  const [headerRef, isHeaderVisible] = useScrollAnimation();
  const [skillsGridRef, isSkillsGridVisible] = useScrollAnimation({ 
    threshold: 0.1, 
    rootMargin: '0px 0px -50px 0px' 
  });
  const [techIconsRef, visibleTechIcons] = useStaggeredAnimation(8, {
    threshold: 0.2,
    staggerDelay: 150
  });
  const [statsRef, visibleStats] = useStaggeredAnimation(4, {
    threshold: 0.3,
    staggerDelay: 200
  });

  // Robotics-focused skills data based on actual resume
  const skillsData = {
    robotics: {
      title: "Robotics & Middleware",
      description: "ROS2 development and autonomous systems implementation.",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4M11,6V8H13V6H11M11,10V18H13V10H11Z"/>
        </svg>
      ),
      skills: [
        { 
          name: "ROS2", 
          level: "Learning", 
          experience: "Current",
          projects: ["Autonomous Cleaning Robot", "Navigation Testing"],
          description: "Learning navigation concepts, SLAM implementation, and basic node development"
        },
        { 
          name: "Micro-ROS", 
          level: "Learning", 
          experience: "Current",
          projects: ["ESP32 Integration", "Hardware Interface"],
          description: "ESP32 with Micro-ROS for cost-effective hardware interface development"
        },
        { 
          name: "SLAM Fundamentals", 
          level: "Learning", 
          experience: "Current",
          projects: ["LiDAR Integration Planning", "Mapping Concepts"],
          description: "Simultaneous Localization and Mapping concepts for autonomous navigation"
        },
        { 
          name: "Sensor Integration", 
          level: "Basic", 
          experience: "Current",
          projects: ["Xiaomi Vacuum LiDAR", "Servo Motor Control"],
          description: "Planning LiDAR sensor integration for autonomous cleaning robot"
        }
      ]
    },
    embedded: {
      title: "Embedded Programming",
      description: "Microcontroller programming and hardware-software integration.",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17,17H7V7H17M21,11V9H19V7C19,5.89 18.1,5 17,5H15V3H13V5H11V3H9V5H7C5.89,5 5,5.89 5,7V9H3V11H5V13H3V15H5V17C5,18.1 5.89,19 7,19H9V21H11V19H13V21H15V19H17C18.1,19 19,18.1 19,17V15H21V13H19V11M16,8H8V16H16V8Z"/>
        </svg>
      ),
      skills: [
        { 
          name: "C/C++", 
          level: "Intermediate", 
          experience: "2+ years",
          projects: ["ESP32 Programming", "Arduino Projects"],
          description: "Microcontroller programming, embedded systems development"
        },
        { 
          name: "Python", 
          level: "Intermediate", 
          experience: "2+ years",
          projects: ["ROS2 Nodes", "YOLOv8 Vehicle Detection", "AI Bird Classification"],
          description: "ROS node scripting, computer vision, machine learning applications"
        },
        { 
          name: "ESP32", 
          level: "Intermediate", 
          experience: "Current",
          projects: ["Autonomous Robot Interface", "Sensor Integration"],
          description: "WiFi/Bluetooth integration, sensor interfacing, real-time control"
        },
        { 
          name: "Arduino", 
          level: "Intermediate", 
          experience: "1+ year",
          projects: ["Servo Motor Control", "Sensor Projects"],
          description: "Hardware prototyping, sensor integration, motor control"
        }
      ]
    },
    systems: {
      title: "Linux & DevOps",
      description: "System administration and development environment setup.",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,6C8.69,6 6,8.69 6,12C6,15.31 8.69,18 12,18C15.31,18 18,15.31 18,12C18,8.69 15.31,6 12,6M12,16C9.79,16 8,14.21 8,12C8,9.79 9.79,8 12,8C14.21,8 16,9.79 16,12C16,14.21 14.21,16 12,16Z"/>
        </svg>
      ),
      skills: [
        { 
          name: "Linux", 
          level: "Intermediate", 
          experience: "2+ years",
          projects: ["Ubuntu/Mint", "Kali Linux", "Development Environment"],
          description: "Command line interface, system administration, GRUB/bootloader"
        },
        { 
          name: "Git", 
          level: "Intermediate", 
          experience: "2+ years",
          projects: ["Version Control", "Project Management"],
          description: "Code versioning, collaboration, repository management"
        },
        { 
          name: "Docker", 
          level: "Basic", 
          experience: "6 months",
          projects: ["Development Environment", "Deployment"],
          description: "Containerization for consistent development environments"
        },
        { 
          name: "CLI Tools", 
          level: "Intermediate", 
          experience: "2+ years",
          projects: ["System Configuration", "Automation"],
          description: "Command line proficiency, shell scripting, system tools"
        }
      ]
    },
    hardware: {
      title: "Hardware & Diagnostics",
      description: "Hardware troubleshooting and electronic component work.",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M9,2V8H11V11H9V13H15V11H13V8H15V2H9M12,4A1,1 0 0,1 13,5A1,1 0 0,1 12,6A1,1 0 0,1 11,5A1,1 0 0,1 12,4M8,10A2,2 0 0,0 6,12A2,2 0 0,0 8,14A2,2 0 0,0 10,12A2,2 0 0,0 8,10M16,10A2,2 0 0,0 14,12A2,2 0 0,0 16,14A2,2 0 0,0 18,12A2,2 0 0,0 16,10M12,11A1,1 0 0,1 13,12A1,1 0 0,1 12,13A1,1 0 0,1 11,12A1,1 0 0,1 12,11M7,18A2,2 0 0,0 5,20A2,2 0 0,0 7,22A2,2 0 0,0 9,20A2,2 0 0,0 7,18M17,18A2,2 0 0,0 15,20A2,2 0 0,0 17,22A2,2 0 0,0 19,20A2,2 0 0,0 17,18Z"/>
        </svg>
      ),
      skills: [
        { 
          name: "Circuit Troubleshooting", 
          level: "Intermediate", 
          experience: "1+ year",
          projects: ["Mobile Repair", "Hardware Diagnostics"],
          description: "Systematic debugging, component-level repair, hardware-software integration"
        },
        { 
          name: "Soldering & Rework", 
          level: "Intermediate", 
          experience: "1+ year",
          projects: ["iPhone Face ID Repair", "Component Replacement"],
          description: "Precision soldering, hot air rework, component replacement"
        },
        { 
          name: "Test Equipment", 
          level: "Intermediate", 
          experience: "1+ year",
          projects: ["Circuit Analysis", "Power Supply Testing"],
          description: "Multimeter, power supply, oscilloscope basics, signal analysis"
        },
        { 
          name: "Firmware & Bootloaders", 
          level: "Intermediate", 
          experience: "1+ year",
          projects: ["Firmware Flashing", "Bootloader Bypass"],
          description: "Low-level system recovery, firmware update procedures"
        }
      ]
    }
  };

  // Technology icons data - robotics focused
  const techIcons = [
    { 
      name: "ROS2", 
      icon: "🤖", 
      color: "from-blue-400 to-blue-600",
      bgColor: "bg-blue-500/10 hover:bg-blue-500/20" 
    },
    { 
      name: "Python", 
      icon: "🐍", 
      color: "from-yellow-400 to-blue-600",
      bgColor: "bg-yellow-500/10 hover:bg-yellow-500/20" 
    },
    { 
      name: "C/C++", 
      icon: "⚡", 
      color: "from-blue-400 to-purple-600",
      bgColor: "bg-blue-500/10 hover:bg-blue-500/20" 
    },
    { 
      name: "ESP32", 
      icon: "💾", 
      color: "from-green-400 to-blue-600",
      bgColor: "bg-green-500/10 hover:bg-green-500/20" 
    },
    { 
      name: "Linux", 
      icon: "🐧", 
      color: "from-gray-400 to-gray-600",
      bgColor: "bg-gray-500/10 hover:bg-gray-500/20" 
    },
    { 
      name: "Arduino", 
      icon: "🔧", 
      color: "from-teal-400 to-cyan-600",
      bgColor: "bg-teal-500/10 hover:bg-teal-500/20" 
    },
    { 
      name: "Git", 
      icon: "📚", 
      color: "from-purple-400 to-purple-600",
      bgColor: "bg-purple-500/10 hover:bg-purple-500/20" 
    },
    { 
      name: "Docker", 
      icon: "🐳", 
      color: "from-blue-400 to-cyan-600",
      bgColor: "bg-blue-500/10 hover:bg-blue-500/20" 
    }
  ];

  // Animate skills when skills grid becomes visible
  useEffect(() => {
    if (isSkillsGridVisible) {
      const totalSkills = Object.values(skillsData).reduce((total, category) => total + category.skills.length, 0);
      let skillIndex = 0;
      
      Object.values(skillsData).forEach((category) => {
        category.skills.forEach((_, index) => {
          setTimeout(() => {
            setAnimatedSkills(prev => new Set([...prev, `${Object.keys(skillsData).find(key => skillsData[key] === category)}-${index}`]));
          }, skillIndex * 100);
          skillIndex++;
        });
      });
    }
  }, [isSkillsGridVisible]);

  return (
    <section id="skills">
      <div className="bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 py-16 lg:py-24">
        {/* Background effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/3 left-20 w-40 h-40 md:w-80 md:h-80 bg-purple-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/3 right-20 w-32 h-32 md:w-64 md:h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
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
              Technical <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Expertise</span>
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full mb-6"></div>
            <p className="text-gray-300 text-sm sm:text-base lg:text-lg max-w-3xl mx-auto leading-relaxed">
              Computer Science graduate with hands-on experience in robotics, embedded systems, and hardware-software integration. 
              Currently developing autonomous robotics solutions using ROS2 and microcontroller programming.
            </p>
          </div>

          {/* Skills Grid - Robotics Categories */}
          <div 
            ref={skillsGridRef}
            className="max-w-7xl mx-auto mb-12 lg:mb-16"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
              {Object.entries(skillsData).map(([categoryKey, category], categoryIndex) => (
                <div 
                  key={categoryKey}
                  className={`bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 lg:p-8 border border-gray-700/50 hover:border-purple-500/30 transition-all duration-700 group transform ${
                    isSkillsGridVisible 
                      ? 'translate-y-0 opacity-100' 
                      : 'translate-y-12 opacity-0'
                  }`}
                  style={{ 
                    transitionDelay: `${categoryIndex * 200}ms` 
                  }}
                >
                  <div className="flex items-center gap-4 mb-8">
                    <div className="p-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl text-white group-hover:scale-110 transition-transform duration-300">
                      {category.icon}
                    </div>
                    <div>
                      <h3 className="text-xl lg:text-2xl font-bold text-white mb-2">
                        {category.title}
                      </h3>
                      <p className="text-gray-300 text-sm lg:text-base leading-relaxed">
                        {category.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Skills List */}
                  <div className="space-y-6">
                    {category.skills.map((skill, index) => (
                      <div 
                        key={skill.name} 
                        className={`transform transition-all duration-700 ${
                          animatedSkills.has(`${categoryKey}-${index}`) 
                            ? 'translate-x-0 opacity-100' 
                            : 'translate-x-8 opacity-0'
                        }`}
                        style={{ transitionDelay: `${index * 100}ms` }}
                      >
                        {/* Skill Header */}
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="text-white font-semibold text-base">{skill.name}</h4>
                          <div className="flex items-center gap-2">
                            <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                              skill.level === 'Advanced' ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30' :
                              skill.level === 'Intermediate' ? 'bg-green-500/20 text-green-400 border border-green-500/30' :
                              skill.level === 'Learning' ? 'bg-orange-500/20 text-orange-400 border border-orange-500/30' :
                              'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                            }`}>
                              {skill.level}
                            </span>
                            <span className="text-xs text-gray-500">{skill.experience}</span>
                          </div>
                        </div>
                        
                        {/* Description */}
                        <p className="text-gray-400 text-sm mb-3 leading-relaxed">{skill.description}</p>
                        
                        {/* Projects */}
                        <div className="space-y-2">
                          <p className="text-xs text-gray-500 font-medium">Applied in:</p>
                          <div className="flex flex-wrap gap-2">
                            {skill.projects.map((project, projectIndex) => (
                              <span 
                                key={projectIndex}
                                className="px-2 py-1 bg-purple-500/10 text-purple-300 text-xs rounded-md border border-purple-500/20 hover:bg-purple-500/20 transition-colors"
                              >
                                {project}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies Section */}
          <div className="text-center mb-8 lg:mb-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-6">
              Core Technologies
            </h3>
          </div>

          {/* Technology Icons Grid */}
          <div 
            ref={techIconsRef}
            className="grid grid-cols-4 sm:grid-cols-8 gap-4 lg:gap-6 max-w-6xl mx-auto mb-16 lg:mb-20"
          >
            {techIcons.map((tech, index) => (
              <div
                key={tech.name}
                className={`group ${tech.bgColor} backdrop-blur-sm rounded-xl p-4 lg:p-6 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-500 hover:transform hover:scale-110 hover:shadow-xl hover:shadow-purple-500/10 cursor-pointer transform ${
                  visibleTechIcons.has(index)
                    ? 'translate-y-0 opacity-100 scale-100' 
                    : 'translate-y-8 opacity-0 scale-95'
                }`}
                style={{
                  transitionDelay: `${index * 150}ms`
                }}
              >
                <div className="text-center">
                  <div className="text-3xl lg:text-4xl mb-2 group-hover:scale-125 transition-transform duration-300">
                    {tech.icon}
                  </div>
                  <p className="text-gray-300 text-xs lg:text-sm font-medium group-hover:text-white transition-colors duration-300">
                    {tech.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Stats Section */}
          <div className="text-center mb-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-8">
              Professional <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Profile</span>
            </h3>
          </div>

          {/* Professional Stats */}
          <div ref={statsRef} className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { number: "2024", label: "CS Graduate", icon: "🎓", desc: "Chulalongkorn University" },
              { number: "5+", label: "Projects", icon: "🚀", desc: "Robotics & AI focus" },
              { number: "3.23", label: "GPA", icon: "📊", desc: "Computer Science" },
              { number: "Current", label: "Learning ROS2", icon: "🤖", desc: "Autonomous systems" }
            ].map((stat, index) => (
              <div
                key={stat.label}
                className={`text-center p-4 lg:p-6 bg-gray-800/30 backdrop-blur-sm rounded-xl border border-gray-700/50 hover:border-purple-500/50 transition-all duration-500 hover:transform hover:scale-105 group transform ${
                  visibleStats.has(index)
                    ? 'translate-y-0 opacity-100' 
                    : 'translate-y-8 opacity-0'
                }`}
                style={{
                  transitionDelay: `${index * 200}ms`
                }}
              >
                <div className="text-2xl lg:text-3xl mb-2 group-hover:scale-125 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-2xl lg:text-3xl font-bold text-white mb-1 group-hover:text-purple-400 transition-colors duration-300">
                  {stat.number}
                </div>
                <div className="text-gray-300 text-sm lg:text-base font-medium mb-1">
                  {stat.label}
                </div>
                <div className="text-gray-500 text-xs">
                  {stat.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;