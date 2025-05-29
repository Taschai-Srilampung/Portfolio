import React, { useState, useEffect, useRef } from 'react';
import { useScrollAnimation, useStaggeredAnimation } from '../hooks/useScrollAnimation';

// Custom SVG Icons
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

const ShieldIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.031 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
);

const BarChart3Icon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
  </svg>
);

const ShoppingBagIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l-1 12H6L5 9z" />
  </svg>
);

function FeaturedProjects() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [hoveredProject, setHoveredProject] = useState(null);
  
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
      title: "Secure Banking Platform",
      category: "Full Stack",
      type: "Enterprise",
      description: "A comprehensive online banking platform with multi-factor authentication, real-time transaction monitoring, and advanced encryption for data protection.",
      longDescription: "Built a complete banking solution from the ground up, implementing industry-standard security protocols and real-time fraud detection systems.",
      image: "💳",
      technologies: ["React", "Node.js", "MySQL", "Cybersecurity"],
      features: [
        "Multi-factor Authentication",
        "Real-time Transaction Monitoring", 
        "Advanced Data Encryption",
        "Fraud Detection System",
        "Mobile-responsive Design"
      ],
      metrics: {
        users: "10K+",
        uptime: "99.9%",
        transactions: "50K+/day"
      },
      status: "Production",
      timeline: "6 months",
      team: "5 developers",
      role: "Full Stack Developer",
      challenges: [
        "Implementing real-time fraud detection",
        "Ensuring PCI DSS compliance",
        "Optimizing for high transaction volumes"
      ],
      achievements: [
        "Zero security breaches in production",
        "99.9% uptime achievement",
        "Reduced transaction processing time by 40%"
      ],
      demoUrl: "#",
      githubUrl: "#",
      gradient: "from-purple-600 to-blue-600",
      icon: ShieldIcon
    },
    {
      id: 2,
      title: "AI-Powered Analytics Dashboard",
      category: "Frontend",
      type: "Business Intelligence",
      description: "An interactive dashboard that uses machine learning algorithms to analyze business data and provide actionable insights with beautiful visualizations.",
      longDescription: "Developed a sophisticated analytics platform that processes large datasets and presents insights through interactive charts and AI-powered recommendations.",
      image: "📊",
      technologies: ["React", "D3.js", "Python", "TensorFlow"],
      features: [
        "Real-time Data Processing",
        "Machine Learning Insights",
        "Interactive Visualizations",
        "Custom Report Generation",
        "Predictive Analytics"
      ],
      metrics: {
        dataPoints: "1M+",
        accuracy: "94%",
        reports: "500+/month"
      },
      status: "Production",
      timeline: "4 months",
      team: "3 developers",
      role: "Frontend Lead",
      challenges: [
        "Handling large dataset visualizations",
        "Implementing real-time data updates",
        "Creating intuitive user experience"
      ],
      achievements: [
        "Improved decision-making speed by 60%",
        "Reduced manual reporting time by 80%",
        "94% prediction accuracy achieved"
      ],
      demoUrl: "#",
      githubUrl: "#",
      gradient: "from-blue-600 to-cyan-600",
      icon: BarChart3Icon
    },
    {
      id: 3,
      title: "Threat Intelligence Platform",
      category: "Cybersecurity",
      type: "Security",
      description: "A platform that collects, analyzes, and visualizes cyber threat intelligence data to help organizations identify and respond to security threats.",
      longDescription: "Created a comprehensive cybersecurity platform that aggregates threat data from multiple sources and provides actionable intelligence for security teams.",
      image: "🛡️",
      technologies: ["Python", "React", "MongoDB", "Docker"],
      features: [
        "Threat Data Collection",
        "Risk Assessment Algorithms",
        "Real-time Threat Monitoring",
        "Automated Alert System",
        "Threat Intelligence Reports"
      ],
      metrics: {
        threats: "100K+",
        accuracy: "96%",
        response: "<5min"
      },
      status: "Production",
      timeline: "8 months",
      team: "4 developers",
      role: "Backend Developer",
      challenges: [
        "Processing large volumes of threat data",
        "Minimizing false positive alerts",
        "Ensuring real-time performance"
      ],
      achievements: [
        "96% threat detection accuracy",
        "Reduced incident response time by 70%",
        "Zero false negatives in critical threats"
      ],
      demoUrl: "#",
      githubUrl: "#",
      gradient: "from-green-600 to-emerald-600",
      icon: ShieldIcon
    },
    {
      id: 4,
      title: "Microservices E-Commerce Platform",
      category: "Backend",
      type: "E-commerce",
      description: "A scalable e-commerce platform built with microservices architecture, featuring product management, order processing, and payment integration.",
      longDescription: "Architected and developed a modern e-commerce solution using microservices, Docker containers, and cloud infrastructure for maximum scalability.",
      image: "🛒",
      technologies: ["Node.js", "Docker", "Kubernetes", "MySQL"],
      features: [
        "Microservices Architecture",
        "Scalable Product Catalog",
        "Order Processing System",
        "Payment Gateway Integration",
        "Inventory Management"
      ],
      metrics: {
        orders: "25K+",
        uptime: "99.8%",
        response: "<200ms"
      },
      status: "Production",
      timeline: "10 months",
      team: "6 developers",
      role: "Backend Architect",
      challenges: [
        "Designing service communication patterns",
        "Implementing distributed transactions",
        "Ensuring data consistency across services"
      ],
      achievements: [
        "Handled 10x traffic increase seamlessly",
        "Reduced deployment time by 85%",
        "Achieved sub-200ms response times"
      ],
      demoUrl: "#",
      githubUrl: "#",
      gradient: "from-red-600 to-pink-600",
      icon: ShoppingBagIcon
    }
  ];

  // Filter categories
  const categories = ['All', 'Full Stack', 'Frontend', 'Backend', 'Cybersecurity'];

  // Filter projects based on active filter
  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);



  return (
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
            Featured <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Projects</span>
          </h1>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full mb-8"></div>
          <p className="text-gray-300 text-base sm:text-lg lg:text-xl max-w-4xl mx-auto leading-relaxed">
            Here are some of my recent projects that showcase my skills and expertise in modern web development, 
            cybersecurity, and full-stack solutions.
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
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 mb-16 lg:mb-20"
        >
          {filteredProjects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <div
                key={project.id}
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
                    <h4 className="text-white font-semibold mb-3">Performance Metrics</h4>
                    <div className="grid grid-cols-3 gap-4">
                      {Object.entries(project.metrics).map(([key, value]) => (
                        <div key={key} className="text-center">
                          <div className="text-lg font-bold text-purple-400">{value}</div>
                          <div className="text-xs text-gray-500 capitalize">{key.replace(/([A-Z])/g, ' $1')}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-700/50">
                    <div>
                      <span className="text-gray-500 text-xs">Timeline</span>
                      <p className="text-white text-sm font-medium">{project.timeline}</p>
                    </div>
                    <div>
                      <span className="text-gray-500 text-xs">Team Size</span>
                      <p className="text-white text-sm font-medium">{project.team}</p>
                    </div>
                    <div>
                      <span className="text-gray-500 text-xs">My Role</span>
                      <p className="text-white text-sm font-medium">{project.role}</p>
                    </div>
                    <div>
                      <span className="text-gray-500 text-xs">Status</span>
                      <span className="inline-block px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded-full border border-green-500/30">
                        {project.status}
                      </span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-4">
                    <button className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg font-medium hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center justify-center gap-2 group">
                      <EyeIcon />
                      Live Demo
                    </button>
                    <button className="flex-1 bg-gray-700/50 text-gray-300 py-3 rounded-lg font-medium hover:bg-gray-600/50 hover:text-white transition-all duration-300 flex items-center justify-center gap-2 group">
                      <GithubIcon />
                      Source Code
                    </button>
                  </div>
                </div>

                {/* Hover Effect Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`}></div>
              </div>
            );
          })}
        </div>

        


        {/* Call to Action */}
        <div className="text-center">
          <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40">
            View All Projects
          </button>
        </div>
      </div>
    </div>
  );
}

export default FeaturedProjects;