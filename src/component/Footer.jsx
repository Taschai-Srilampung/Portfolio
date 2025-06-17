import React from 'react';

// Custom SVG Icons
const GithubIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);

const LinkedinIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const FacebookIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const YoutubeIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

const PortfolioIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"/>
  </svg>
);

const MailIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 3.26a2 2 0 001.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const PhoneIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
);

const HeartIcon = () => (
  <svg className="w-4 h-4 text-red-500 animate-pulse" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
  </svg>
);

const ChevronUpIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
  </svg>
);

function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: GithubIcon,
      name: "GitHub",
      url: "https://github.com/Taschai-Srilampung",
      color: "hover:text-gray-300",
      bg: "hover:bg-gray-700"
    },
    {
      icon: LinkedinIcon,
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/taschai-srilampung-b65792353",
      color: "hover:text-blue-400",
      bg: "hover:bg-blue-900/30"
    },
    {
      icon: FacebookIcon,
      name: "Facebook",
      url: "https://www.facebook.com/palm.taschai",
      color: "hover:text-blue-500",
      bg: "hover:bg-blue-900/30"
    },
    {
      icon: YoutubeIcon,
      name: "YouTube",
      url: "https://www.youtube.com/@MyRyoLife",
      color: "hover:text-red-400",
      bg: "hover:bg-red-900/30"
    },
  
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="relative bg-gradient-to-t from-gray-900 via-gray-800 to-gray-900 border-t border-gray-700/50 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-0 right-1/4 w-48 h-48 bg-blue-500/5 rounded-full blur-3xl"></div>
        
        {/* Animated Stars */}
        <div className="absolute inset-0">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-20 py-12 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 mb-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-white mb-2">
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Taschai Srilampung
                </span>
              </h3>
              <div className="w-12 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-4"></div>
              <p className="text-gray-300 leading-relaxed mb-3">
                Hi, I'm Taschai — I enjoy solving unique problems and learning new things. 
                I'm a self-motivated learner with a strong interest in software development, AI, and cybersecurity.
              </p>
              <div className="text-purple-400 font-medium italic text-sm">
                "Sometimes I look impossible until it's done."
              </div>
            </div>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="text-center p-3 bg-gray-800/30 rounded-lg border border-gray-700/50">
                <div className="text-purple-400 font-bold text-lg">2024</div>
                <div className="text-gray-400 text-xs">Graduate</div>
              </div>
              <div className="text-center p-3 bg-gray-800/30 rounded-lg border border-gray-700/50">
                <div className="text-blue-400 font-bold text-lg">5+</div>
                <div className="text-gray-400 text-xs">Projects</div>
              </div>
              <div className="text-center p-3 bg-gray-800/30 rounded-lg border border-gray-700/50">
                <div className="text-green-400 font-bold text-lg">3.23</div>
                <div className="text-gray-400 text-xs">GPA</div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-1">
            <h4 className="text-white font-semibold text-lg mb-4">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2">
              {[ 'About', 'Skills', 'Projects', 'Contact'].map((link, index) => (
                <a
                  key={index}
                  href={`#${link.toLowerCase()}`}
                  className="text-gray-400 hover:text-purple-400 py-2 transition-colors duration-300 flex items-center gap-2 group"
                >
                  <div className="w-1 h-1 bg-purple-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  {link}
                </a>
              ))}
            </div>
            
            {/* Education Info */}
            <div className="mt-6 p-4 bg-gray-800/20 rounded-lg border border-gray-700/30">
              <h5 className="text-white font-medium text-sm mb-2">Education</h5>
              <div className="text-gray-300 text-xs">
                <div className="font-medium">Chulalongkorn University</div>
                <div className="text-gray-400">Computer Science (2020-2024)</div>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-1">
            <h4 className="text-white font-semibold text-lg mb-4">Let's Connect</h4>
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3 text-gray-300">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <MailIcon />
                </div>
                <span className="text-sm">taschai.sr@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                  <PhoneIcon />
                </div>
                <span className="text-sm">062-703-3574</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <span className="text-sm">Bangkok, Thailand</span>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="flex gap-3 flex-wrap">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 bg-gray-800/50 border border-gray-700/50 rounded-lg flex items-center justify-center text-gray-400 transition-all duration-300 transform hover:scale-110 ${social.color} ${social.bg} hover:border-purple-500/50`}
                    title={social.name}
                  >
                    <IconComponent />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700/50 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <span>© {currentYear} Taschai Srilampung. Made with</span>
              <HeartIcon />
              <span>in Thailand</span>
            </div>
            
            {/* Back to Top Button */}
            <button
              onClick={scrollToTop}
              className="group flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-lg text-purple-400 hover:from-purple-600/30 hover:to-pink-600/30 hover:border-purple-400/50 transition-all duration-300 transform hover:scale-105"
            >
              <ChevronUpIcon />
              <span className="text-sm font-medium">Back to Top</span>
            </button>
          </div>
          
          {/* Call to Action */}
          <div className="mt-6 pt-4 border-t border-gray-800/50 text-center">
            <p className="text-gray-300 text-sm mb-2">
              Currently open to new opportunities in Software Engineering, AI, and Cybersecurity!
            </p>
            <p className="text-purple-400 text-sm font-medium">
              Looking for a passionate developer who learns fast and stays committed? Let's connect! 🚀
            </p>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-4 right-4 w-2 h-2 bg-purple-400 rounded-full animate-ping opacity-20"></div>
      <div className="absolute top-12 right-12 w-1 h-1 bg-blue-400 rounded-full animate-ping opacity-30" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-8 right-8 w-1.5 h-1.5 bg-pink-400 rounded-full animate-ping opacity-25" style={{ animationDelay: '2s' }}></div>

      {/* Custom CSS */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </footer>
  );
}

export default Footer;