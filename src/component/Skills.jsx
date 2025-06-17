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
  const [techIconsRef, visibleTechIcons] = useStaggeredAnimation(6, {
    threshold: 0.2,
    staggerDelay: 150
  });
  const [statsRef, visibleStats] = useStaggeredAnimation(4, {
    threshold: 0.3,
    staggerDelay: 200
  });

  // Skills data with realistic levels for fresh graduate
  const skillsData = {
    frontend: {
      title: "Frontend Development",
      description: "Building responsive user interfaces with modern web technologies.",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"/>
        </svg>
      ),
      skills: [
        { 
          name: "React", 
          level: "Intermediate", 
          experience: "1+ year",
          projects: ["Equipment Management System", "Mobile Repair Shop Website"],
          description: "Components, hooks, state management, responsive design"
        },
        { 
          name: "HTML/CSS", 
          level: "Intermediate", 
          experience: "2+ years",
          projects: ["University Projects", "Portfolio Website"],
          description: "Semantic HTML, responsive design, CSS Grid & Flexbox"
        },
        { 
          name: "JavaScript", 
          level: "Intermediate", 
          experience: "2+ years",
          projects: ["Web Applications", "Interactive Features"],
          description: "ES6+, DOM manipulation, async programming basics"
        },
        { 
          name: "Tailwind CSS", 
          level: "Intermediate", 
          experience: "1+ year",
          projects: ["Modern UI Design", "Component Styling"],
          description: "Utility-first CSS, rapid prototyping, responsive design"
        }
      ]
    },
    backend: {
      title: "Backend Development",
      description: "Server-side development and API integration experience.",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20,3H4C2.89,3 2,3.89 2,5V19C2,20.11 2.89,21 4,21H20C21.11,21 22,20.11 22,19V5C22,3.89 21.11,3 20,3M20,19H4V5H20V19Z"/>
        </svg>
      ),
      skills: [
        { 
          name: "Python", 
          level: "Intermediate", 
          experience: "2+ years",
          projects: ["AI Bird Classification", "Vehicle Detection AI"],
          description: "Data processing, machine learning basics, scripting"
        },
        { 
          name: "Node.js", 
          level: "Intermediate", 
          experience: "1+ year",
          projects: ["Equipment Management API", "Learning Projects"],
          description: "Express.js basics, RESTful APIs, server setup"
        },
        { 
          name: "Strapi CMS", 
          level: "Basic", 
          experience: "6 months",
          projects: ["Content Management", "API Backend"],
          description: "Headless CMS, content modeling, API generation"
        },
        { 
          name: ".NET", 
          level: "Basic", 
          experience: "2 months",
          projects: ["ToDo App Backend", "University Assignment"],
          description: "Web API development, basic backend structure"
        }
      ]
    },
    database: {
      title: "Database & Tools",
      description: "Database design and development tools experience.",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12,3C7.58,3 4,4.79 4,7C4,9.21 7.58,11 12,11C16.42,11 20,9.21 20,7C20,4.79 16.42,3 12,3M4,9V12C4,14.21 7.58,16 12,16C16.42,16 20,14.21 20,12V9C20,11.21 16.42,13 12,13C7.58,13 4,11.21 4,9M4,14V17C4,19.21 7.58,21 12,21C16.42,21 20,19.21 20,17V14C20,16.21 16.42,18 12,18C7.58,18 4,16.21 4,14Z"/>
        </svg>
      ),
      skills: [
        { 
          name: "MySQL", 
          level: "Intermediate", 
          experience: "1+ year",
          projects: ["Equipment Database", "Data Management"],
          description: "Database design, queries, relationships, XAMPP setup"
        },
        { 
          name: "MariaDB", 
          level: "Basic", 
          experience: "3 months",
          projects: ["ToDo Application", "Learning Project"],
          description: "Basic operations, data storage, simple queries"
        },
        { 
          name: "Git", 
          level: "Intermediate", 
          experience: "2+ years",
          projects: ["Version Control", "CI/CD Setup"],
          description: "Code versioning, basic branching, GitHub Actions"
        },
        { 
          name: "Postman", 
          level: "Basic", 
          experience: "1+ year",
          projects: ["API Testing", "Development Workflow"],
          description: "API testing, request validation, debugging"
        }
      ]
    },
    devops: {
      title: "DevOps & Systems",
      description: "Development environment and deployment experience.",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4M12,6A6,6 0 0,0 6,12A6,6 0 0,0 12,18A6,6 0 0,0 18,12A6,6 0 0,0 12,6M12,8A4,4 0 0,1 16,12A4,4 0 0,1 12,16A4,4 0 0,1 8,12A4,4 0 0,1 12,8Z"/>
        </svg>
      ),
      skills: [
        { 
          name: "Docker", 
          level: "Intermediate", 
          experience: "1+ year",
          projects: ["Application Deployment", "Development Environment"],
          description: "Containerization, Docker Compose, basic orchestration"
        },
        { 
          name: "Linux", 
          level: "Intermediate", 
          experience: "1+ year",
          projects: ["Server Setup", "Development Environment"],
          description: "Linux Mint, Kali Linux, command line, server management"
        },
        { 
          name: "VS Code", 
          level: "Advanced", 
          experience: "3+ years",
          projects: ["Daily Development", "All Projects"],
          description: "Extensions, debugging, integrated terminal, productivity"
        },
        { 
          name: "Vite.js", 
          level: "Intermediate", 
          experience: "1+ year",
          projects: ["React Projects", "Build Tools"],
          description: "Fast development, build optimization, modern tooling"
        }
      ]
    }
  };

  // Technology icons data - simplified and realistic
  const techIcons = [
    { 
      name: "React", 
      icon: "⚛️", 
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
      name: "MySQL", 
      icon: "🗄️", 
      color: "from-orange-400 to-red-600",
      bgColor: "bg-orange-500/10 hover:bg-orange-500/20" 
    },
    { 
      name: "Docker", 
      icon: "🐳", 
      color: "from-blue-400 to-cyan-600",
      bgColor: "bg-blue-500/10 hover:bg-blue-500/20" 
    },
    { 
      name: "Linux", 
      icon: "🐧", 
      color: "from-gray-400 to-gray-600",
      bgColor: "bg-gray-500/10 hover:bg-gray-500/20" 
    },
    { 
      name: "Git", 
      icon: "📚", 
      color: "from-purple-400 to-purple-600",
      bgColor: "bg-purple-500/10 hover:bg-purple-500/20" 
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
              Technical <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Skills</span>
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full mb-6"></div>
            <p className="text-gray-300 text-sm sm:text-base lg:text-lg max-w-3xl mx-auto leading-relaxed">
              Fresh graduate with hands-on experience in modern web development technologies and AI fundamentals.
            </p>
          </div>

          {/* Skills Grid - All Categories */}
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
            className="grid grid-cols-3 sm:grid-cols-6 gap-4 lg:gap-6 max-w-4xl mx-auto mb-16 lg:mb-20"
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
              Learning <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Journey</span>
            </h3>
          </div>

          {/* Realistic Fresh Graduate Stats */}
          <div ref={statsRef} className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { number: "5+", label: "Projects Completed", icon: "🚀", desc: "University & personal" },
              { number: "2", label: "Frameworks", icon: "⚡", desc: "React & Express" },
              { number: "70%+", label: "Skill Improvement", icon: "📈", desc: "Since starting CS" },
              { number: "3.23", label: "GPA", icon: "🎓", desc: "Computer Science" }
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