import React, { useState, useRef } from 'react';
import { useScrollAnimation, useStaggeredAnimation } from '../hooks/useScrollAnimation';

// Custom SVG Icons
const SendIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
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

const TwitterIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
  </svg>
);

const DevIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M7.826 10.083a.784.784 0 0 0-.468-.175h-.701v4.198h.701a.786.786 0 0 0 .468-.175c.155-.117.233-.292.233-.525v-2.798c.001-.233-.078-.408-.233-.525zM19.236 3H4.764C3.791 3 3.002 3.787 3.002 4.760v14.48c0 .973.789 1.760 1.762 1.760h14.472c.973 0 1.762-.787 1.762-1.760V4.760C20.998 3.787 20.209 3 19.236 3zM9.195 13.414c0 .755-.466 1.901-1.942 1.901H5.389V8.665h1.903c1.424 0 1.942 1.144 1.942 1.899v2.85zm4.045-3.562H11.1v1.544h1.309v1.188H11.1v1.543h2.142v1.188h-2.498a.813.813 0 0 1-.815-.815V9.667a.813.813 0 0 1 .815-.815h2.498v1.188zm4.165 4.4c-.584 1.686-1.317 1.336-1.317 1.336s-.733.35-1.317-1.336l-1.308-4.333h1.317l.816 3.167.816-3.167h1.317l-1.324 4.333z"/>
  </svg>
);

const PhoneIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
);

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // Animation hooks
  const [headerRef, isHeaderVisible] = useScrollAnimation();
  const [contactInfoRef, isContactInfoVisible] = useScrollAnimation();
  const [formRef, isFormVisible] = useScrollAnimation();
  const [socialRef, visibleSocials] = useStaggeredAnimation(4, {
    threshold: 0.3,
    staggerDelay: 150
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      setTimeout(() => {
        setSubmitStatus(null);
      }, 3000);
    }, 2000);
  };

  const contactInfo = [
    {
      icon: MailIcon,
      title: "Email",
      content: "taschai@example.com",
      subtitle: "Drop me a line anytime",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: MapPinIcon,
      title: "Location",
      content: "Bangkok, Thailand",
      subtitle: "Available for remote work",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: PhoneIcon,
      title: "Phone",
      content: "+66 XX XXX XXXX",
      subtitle: "Available 9 AM - 6 PM (GMT+7)",
      gradient: "from-purple-500 to-pink-500"
    }
  ];

  const socialLinks = [
    {
      icon: GithubIcon,
      name: "GitHub",
      url: "#",
      color: "hover:text-gray-400",
      bg: "hover:bg-gray-800"
    },
    {
      icon: LinkedinIcon,
      name: "LinkedIn",
      url: "#",
      color: "hover:text-blue-400",
      bg: "hover:bg-blue-900/30"
    },
    {
      icon: TwitterIcon,
      name: "Twitter",
      url: "#",
      color: "hover:text-sky-400",
      bg: "hover:bg-sky-900/30"
    },
    {
      icon: DevIcon,
      name: "Dev.to",
      url: "#",
      color: "hover:text-green-400",
      bg: "hover:bg-green-900/30"
    }
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
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Get In <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Touch</span>
          </h1>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full mb-8"></div>
          <p className="text-gray-300 text-base sm:text-lg lg:text-xl max-w-4xl mx-auto leading-relaxed">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. 
            Let's build something amazing together!
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
          {/* Contact Form */}
          <div 
            ref={formRef}
            className={`transform transition-all duration-1000 delay-500 ${
              isFormVisible 
                ? 'translate-x-0 opacity-100' 
                : '-translate-x-12 opacity-0'
            }`}
          >
            <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-purple-500/30 transition-all duration-500">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <div className="p-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg">
                  <SendIcon />
                </div>
                Send Me a Message
              </h2>
              
              <div className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="group">
                    <label className="block text-gray-300 text-sm font-medium mb-2">Your Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your name"
                      required
                      className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 group-hover:border-gray-500/70"
                    />
                  </div>
                  <div className="group">
                    <label className="block text-gray-300 text-sm font-medium mb-2">Your Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Enter your email"
                      required
                      className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 group-hover:border-gray-500/70"
                    />
                  </div>
                </div>
                
                <div className="group">
                  <label className="block text-gray-300 text-sm font-medium mb-2">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Enter subject"
                    required
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 group-hover:border-gray-500/70"
                  />
                </div>
                
                <div className="group">
                  <label className="block text-gray-300 text-sm font-medium mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Enter your message"
                    rows={6}
                    required
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 resize-none group-hover:border-gray-500/70"
                  ></textarea>
                </div>
                
                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className={`w-full py-4 rounded-lg font-semibold text-white transition-all duration-300 transform hover:scale-[1.02] focus:outline-none focus:ring-4 focus:ring-purple-500/30 ${
                    isSubmitting
                      ? 'bg-gray-600 cursor-not-allowed'
                      : 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40'
                  }`}
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center gap-3">
                      <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending Message...
                    </div>
                  ) : (
                    <div className="flex items-center justify-center gap-2">
                      <SendIcon />
                      Send Message
                    </div>
                  )}
                </button>
                
                {/* Success Message */}
                {submitStatus === 'success' && (
                  <div className="bg-green-500/20 border border-green-500/50 text-green-400 px-4 py-3 rounded-lg text-center animate-fade-in">
                    <div className="flex items-center justify-center gap-2">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Message sent successfully! I'll get back to you soon.
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Let's Connect Section */}
          <div className={`transform transition-all duration-1000 delay-700 ${
            isFormVisible 
              ? 'translate-x-0 opacity-100' 
              : 'translate-x-12 opacity-0'
          }`}>
            <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-purple-500/30 transition-all duration-500">
              <h2 className="text-2xl font-bold text-white mb-6">Let's Connect</h2>
              
              <p className="text-gray-300 leading-relaxed mb-8">
                I'm always open to discussing new projects, creative ideas, or opportunities to be 
                part of your vision. Whether you're looking for a developer, have a question, or just want 
                to connect, feel free to reach out!
              </p>

              {/* Fun Facts */}
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3 text-gray-300">
                  <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                  <span>Usually responds within 24 hours</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse delay-300"></div>
                  <span>Available for freelance projects</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse delay-700"></div>
                  <span>Open to remote collaboration</span>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="text-white font-semibold mb-4">Find me on</h3>
                <div 
                  ref={socialRef}
                  className="grid grid-cols-2 gap-4"
                >
                  {socialLinks.map((social, index) => {
                    const IconComponent = social.icon;
                    return (
                      <a
                        key={index}
                        href={social.url}
                        className={`group flex items-center gap-3 p-4 bg-gray-700/30 rounded-xl border border-gray-600/50 hover:border-purple-500/50 transition-all duration-300 transform hover:scale-105 ${social.bg} ${social.color} ${
                          visibleSocials.has(index)
                            ? 'translate-y-0 opacity-100' 
                            : 'translate-y-4 opacity-0'
                        }`}
                        style={{
                          transitionDelay: `${800 + index * 150}ms`
                        }}
                      >
                        <IconComponent />
                        <span className="text-gray-300 group-hover:text-white transition-colors">
                          {social.name}
                        </span>
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* Quick Contact Button */}
              <div className="mt-8 pt-6 border-t border-gray-700/50">
                <p className="text-gray-400 text-sm mb-4">This is a demo contact form.</p>
                <div className="flex gap-3">
                  <button className="flex-1 bg-gradient-to-r from-green-600 to-emerald-600 text-white py-3 rounded-lg font-medium hover:from-green-700 hover:to-emerald-700 transition-all duration-300 flex items-center justify-center gap-2">
                    <PhoneIcon />
                    <span className="hidden sm:inline">Quick Call</span>
                  </button>
                  <button className="flex-1 bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-3 rounded-lg font-medium hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center gap-2">
                    <MailIcon />
                    <span className="hidden sm:inline">Email Me</span>
                  </button>
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
        
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }
      `}</style>
    </div>
    </section>
  );
}

export default Contact;