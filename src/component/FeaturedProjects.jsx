import React, { useState, useEffect, useRef } from 'react';
// ลบ import hooks ที่ไม่มี - ใช้ intersection observer แทน

// Custom SVG Icons (เหมือนเดิม)
const ExternalLinkIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
  </svg>
);

const GithubIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);

const EyeIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
  </svg>
);

const CodeIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
  </svg>
);

const ZapIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
);

const DatabaseIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
  </svg>
);

const MonitorIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const BrainIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
  </svg>
);

// Custom hook for scroll animation
const useScrollAnimation = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return [ref, isVisible];
};

// Custom hook for staggered animation
const useStaggeredAnimation = (itemCount, options = {}) => {
  const [visibleItems, setVisibleItems] = useState(new Set());
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index);
            setVisibleItems(prev => new Set([...prev, index]));
          }
        });
      },
      { threshold: options.threshold || 0.1 }
    );

    if (ref.current) {
      const items = ref.current.querySelectorAll('[data-index]');
      items.forEach(item => observer.observe(item));
    }

    return () => observer.disconnect();
  }, []);

  return [ref, visibleItems];
};

function FeaturedProjects() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [hoveredProject, setHoveredProject] = useState(null);
  const [showAll, setShowAll] = useState(false);

  // Reset showAll when filter changes
  useEffect(() => {
    setShowAll(false);
  }, [activeFilter]);

  // Animation hooks
  const [headerRef, isHeaderVisible] = useScrollAnimation();
  const [filtersRef, isFiltersVisible] = useScrollAnimation();
  const [projectsRef, visibleProjects] = useStaggeredAnimation(4, {
    threshold: 0.2,
    staggerDelay: 200
  });
  const [statsRef, visibleStats] = useStaggeredAnimation(4, {
    threshold: 0.3,
    staggerDelay: 150
  });

  // Projects data
  const projects = [
    {
      id: 1,
      title: "Equipment Management System",
      category: "Full Stack",
      type: "Final Project",
      description: "A comprehensive equipment management system for tracking and managing organizational assets with role-based access control and real-time updates.",
      longDescription: "Built as my final year project, this full-stack application handles equipment inventory, user management, and reporting with modern web technologies.",
      image: "🏢",
      technologies: ["React", "Vite", "Tailwind CSS", "Ant Design", "Strapi", "MySQL"],
      features: [
        "Equipment tracking and inventory",
        "Role-based user management",
        "Real-time data updates",
        "Responsive design",
        "Search and filtering system"
      ],
      metrics: {
        role: "Full Stack",
        duration: "6 months",
        status: "Live Demo"
      },
      timeline: "6 months",
      team: "Individual project",
      role: "Full Stack Developer",
      challenges: [
        "Implementing complex search functionality",
        "Managing server resources and deployment",
        "Designing intuitive user interface"
      ],
      achievements: [
        "Successfully deployed with Docker",
        "Implemented complete CRUD operations",
        "Created responsive design for all devices"
      ],
      demoUrl: "https://www.myryolife.tech/docker-project/",
      githubUrl: "https://github.com/Taschai-Srilampung",
      gradient: "from-blue-600 to-purple-600",
      icon: DatabaseIcon,
      credentials: {
        admin: { username: "Admin", password: "Admin1234" },
        user: { username: "User", password: "User1234" }
      }
    },
    {
      id: 2,
      title: "Mobile Repair Shop Website",
      category: "Frontend",
      type: "Freelance",
      description: "A responsive website for a local mobile repair shop featuring service information, contact details, and modern design optimized for both desktop and mobile.",
      longDescription: "Developed as a freelance project for a local mobile repair shop, focusing on responsive design and user-friendly interface.",
      image: "📱",
      technologies: ["React", "Vite", "Tailwind CSS"],
      features: [
        "Responsive design",
        "Service showcase",
        "Contact information",
        "Mobile-first approach",
        "Fast loading performance"
      ],
      metrics: {
        role: "Frontend",
        duration: "5 days",
        status: "Deployed"
      },
      timeline: "5 days",
      team: "Individual project",
      role: "Frontend Developer",
      challenges: [
        "Creating responsive design across all devices",
        "Optimizing for mobile performance",
        "Managing client requirements"
      ],
      achievements: [
        "Delivered responsive design for all screen sizes",
        "Improved business online presence",
        "Successfully deployed and maintained"
      ],
      demoUrl: "#",
      githubUrl: "https://github.com/Taschai-Srilampung",
      gradient: "from-green-600 to-teal-600",
      icon: MonitorIcon
    },
    {
      id: 3,
      title: "AI Vehicle & Barrier Detection",
      category: "AI/ML",
      type: "Term Project",
      description: "An AI-powered system using YOLOv8 for detecting vehicles and barriers in images, trained on custom dataset for traffic monitoring applications.",
      longDescription: "Developed an object detection system using YOLO architecture for identifying vehicles and traffic barriers in various environments.",
      image: "🚗",
      technologies: ["Python", "YOLOv8", "Computer Vision"],
      features: [
        "Vehicle detection and classification",
        "Barrier identification",
        "Custom dataset training",
        "Real-time processing",
        "Accuracy optimization"
      ],
      metrics: {
        role: "ML Engineer",
        duration: "2 weeks",
        status: "Research"
      },
      timeline: "2 weeks",
      team: "Group project",
      role: "Data Labeling & Model Training",
      challenges: [
        "Limited training data from single source",
        "Improving model accuracy",
        "Handling various lighting conditions"
      ],
      achievements: [
        "Successfully trained custom YOLO model",
        "Achieved satisfactory detection accuracy",
        "Learned end-to-end ML workflow"
      ],
      demoUrl: "#",
      githubUrl: "https://github.com/Taschai-Srilampung",
      gradient: "from-orange-600 to-red-600",
      icon: BrainIcon
    },
    {
      id: 4,
      title: "Bird Species Classification AI",
      category: "AI/ML",
      type: "Term Project",
      description: "A machine learning model using MobileNet architecture to classify bird species from images, optimized for mobile deployment and efficiency.",
      longDescription: "Built an image classification system to identify different bird species using transfer learning with MobileNet architecture.",
      image: "🐦",
      technologies: ["Python", "MobileNet", "TensorFlow", "Image Processing"],
      features: [
        "Bird species classification",
        "Transfer learning implementation",
        "Mobile-optimized model",
        "Image preprocessing",
        "Multi-class prediction"
      ],
      metrics: {
        role: "ML Developer",
        duration: "2 months",
        status: "Research"
      },
      timeline: "2 months",
      team: "Pair programming",
      role: "Model Developer",
      challenges: [
        "Long training times on limited hardware",
        "Google Colab session interruptions",
        "Optimizing model for mobile use"
      ],
      achievements: [
        "Implemented transfer learning successfully",
        "Developed epoch-based training strategy",
        "Learned mobile ML optimization techniques"
      ],
      demoUrl: "#",
      githubUrl: "https://github.com/Taschai-Srilampung",
      gradient: "from-purple-600 to-pink-600",
      icon: BrainIcon
    }
  ];

  // Filter categories
  const allCategories = ['All', 'Full Stack', 'Frontend', 'AI/ML', 'Backend', 'Robotics', 'Cybersecurity'];
  const categories = allCategories.filter(category => {
    if (category === 'All') return true;
    return projects.some(project => project.category === category);
  });

  // Filter projects based on active filter
  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  // Limit displayed projects unless showing all
  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 4);
  const hasMoreProjects = filteredProjects.length > 4;

  // Project statistics
  const projectStats = [
    {
      number: "5+",
      label: "Projects Completed",
      description: "Academic and freelance projects"
    },
    {
      number: "2",
      label: "Frameworks",
      description: "React & Express experience"
    },
    {
      number: "70%",
      label: "Skill Improvement",
      description: "Since starting my journey"
    },
    {
      number: "1",
      label: "Live Deployment",
      description: "Production-ready application"
    }
  ];

  return (
    <section id="projects">
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 py-16 lg:py-24 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pink-500/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
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
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              My <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Projects</span>
            </h1>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full mb-8"></div>
            <p className="text-gray-300 text-base sm:text-lg lg:text-xl max-w-4xl mx-auto leading-relaxed">
              A collection of projects I've worked on during my studies and early career, showcasing my learning journey 
              in web development, AI, and software engineering.
            </p>
          </div>

          {/* Filter Buttons */}
          <div 
            ref={filtersRef}
            className={`flex flex-wrap justify-center gap-3 mb-12 lg:mb-16 transform transition-all duration-1000 delay-300 ${
              isFiltersVisible 
                ? 'translate-y-0 opacity-100' 
                : 'translate-y-8 opacity-0'
            }`}
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                  activeFilter === category
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/25'
                    : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:text-white border border-gray-600/50'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div 
            ref={projectsRef}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 mb-8"
          >
            {displayedProjects.map((project, index) => {
              const IconComponent = project.icon;
              return (
                <div
                  key={project.id}
                  data-index={index}
                  className={`group bg-gray-800/30 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50 hover:border-purple-500/50 transition-all duration-700 transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-500/10 ${
                    visibleProjects.has(index)
                      ? 'translate-y-0 opacity-100' 
                      : 'translate-y-12 opacity-0'
                  }`}
                  style={{
                    transitionDelay: `${index * 200}ms`
                  }}
                  onMouseEnter={() => setHoveredProject(project.id)}
                  onMouseLeave={() => setHoveredProject(null)}
                >
                  {/* Project Header */}
                  <div className={`bg-gradient-to-r ${project.gradient} p-6 relative overflow-hidden`}>
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-700"></div>
                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className="p-2 bg-white/20 rounded-lg">
                            <IconComponent />
                          </div>
                          <div>
                            <span className="bg-white/20 text-white px-3 py-1 rounded-full text-xs font-medium">
                              {project.type}
                            </span>
                          </div>
                        </div>
                        <div className="text-4xl opacity-80 group-hover:scale-110 transition-transform duration-300">
                          {project.image}
                        </div>
                      </div>
                      <h3 className="text-xl lg:text-2xl font-bold text-white mb-2 group-hover:text-gray-100 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-white/80 text-sm leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6 space-y-6">
                    {/* Technologies */}
                    <div>
                      <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                        <CodeIcon />
                        Technologies
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-purple-500/10 text-purple-300 rounded-full text-xs border border-purple-500/20 hover:bg-purple-500/20 transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Key Features */}
                    <div>
                      <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                        <ZapIcon />
                        Key Features
                      </h4>
                      <ul className="space-y-1">
                        {project.features.slice(0, 3).map((feature, featureIndex) => (
                          <li key={featureIndex} className="text-gray-300 text-sm flex items-center gap-2">
                            <div className="w-1 h-1 bg-purple-400 rounded-full"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Project Metrics */}
                    <div>
                      <h4 className="text-white font-semibold mb-3">Project Details</h4>
                      <div className="grid grid-cols-3 gap-4">
                        {Object.entries(project.metrics).map(([key, value]) => (
                          <div key={key} className="text-center">
                            <div className="text-sm font-bold text-purple-400">{value}</div>
                            <div className="text-xs text-gray-500 capitalize">{key.replace(/([A-Z])/g, ' $1')}</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Special credentials for Equipment Management System */}
                    {project.credentials && (
                      <div className="bg-gray-700/30 p-4 rounded-lg border border-gray-600/30">
                        <h5 className="text-white font-medium mb-2">Demo Credentials:</h5>
                        <div className="text-xs text-gray-300 space-y-1">
                          <div>Admin: {project.credentials.admin.username} / {project.credentials.admin.password}</div>
                          <div>User: {project.credentials.user.username} / {project.credentials.user.password}</div>
                        </div>
                      </div>
                    )}

                    {/* Action Buttons */}
                    <div className="flex gap-3 pt-4">
                      {project.demoUrl && project.demoUrl !== "#" ? (
                        <a 
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg font-medium hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center justify-center gap-2 group"
                        >
                          <EyeIcon />
                          Live Demo
                        </a>
                      ) : (
                        <div className="flex-1 bg-gray-600/30 text-gray-500 py-3 rounded-lg font-medium flex items-center justify-center gap-2 cursor-not-allowed">
                          <EyeIcon />
                          Demo N/A
                        </div>
                      )}
                      <a 
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-gray-700/50 text-gray-300 py-3 rounded-lg font-medium hover:bg-gray-600/50 hover:text-white transition-all duration-300 flex items-center justify-center gap-2 group"
                      >
                        <GithubIcon />
                        View Code
                      </a>
                    </div>
                  </div>

                  {/* Hover Effect Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`}></div>
                </div>
              );
            })}
          </div>

          {/* View All Button */}
          {hasMoreProjects && !showAll && (
            <div className="text-center mb-16 lg:mb-20">
              <button
                onClick={() => setShowAll(true)}
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 inline-flex items-center gap-3"
              >
                <span>View All Projects</span>
                <span className="bg-white/20 text-white px-2 py-1 rounded-full text-sm">
                  {filteredProjects.length}
                </span>
              </button>
            </div>
          )}

          {/* Show Less Button */}
          {showAll && hasMoreProjects && (
            <div className="text-center mb-16 lg:mb-20">
              <button
                onClick={() => setShowAll(false)}
                className="bg-gray-700/50 text-gray-300 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-600/50 hover:text-white transition-all duration-300 transform hover:scale-105 border border-gray-600/50 hover:border-gray-500/50"
              >
                Show Less
              </button>
            </div>
          )}

          {/* Project Statistics */}
          <div 
            ref={statsRef}
            className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          >
            {projectStats.map((stat, index) => (
              <div
                key={index}
                data-index={index}
                className={`text-center bg-gray-800/30 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 transform hover:scale-105 ${
                  visibleStats.has(index)
                    ? 'translate-y-0 opacity-100' 
                    : 'translate-y-8 opacity-0'
                }`}
                style={{
                  transitionDelay: `${index * 150}ms`
                }}
              >
                <div className="text-3xl font-bold text-purple-400 mb-2">{stat.number}</div>
                <div className="text-white font-semibold mb-1">{stat.label}</div>
                <div className="text-gray-400 text-sm">{stat.description}</div>
              </div>
            ))}
          </div>

          {/* Contact Call to Action */}
          <div className="text-center">
            <p className="text-gray-300 mb-6 text-lg">
              Interested in working together or learning more about my projects?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturedProjects;