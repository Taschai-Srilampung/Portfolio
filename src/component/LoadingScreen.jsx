import React, { useState, useEffect } from 'react';

function LoadingScreen({ onLoadingComplete }) {
  const [progress, setProgress] = useState(0);
  const [loadingText, setLoadingText] = useState('Loading');
  const [phase, setPhase] = useState(0); // 0: initial, 1: middle, 2: complete

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setPhase(2);
          setTimeout(() => onLoadingComplete(), 800);
          return 100;
        }
        if (prev > 60) setPhase(1);
        return prev + 1.5;
      });
    }, 60);

    return () => clearInterval(interval);
  }, [onLoadingComplete]);

  useEffect(() => {
    const textCycle = ['Loading', 'Loading.', 'Loading..', 'Loading...'];
    let index = 0;
    
    const textInterval = setInterval(() => {
      setLoadingText(textCycle[index]);
      index = (index + 1) % textCycle.length;
    }, 400);

    return () => clearInterval(textInterval);
  }, []);

  return (
    <div className="fixed inset-0 z-50 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 flex items-center justify-center overflow-hidden">
      {/* Enhanced Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-pink-500/15 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        
        {/* Moving particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/30 rounded-full animate-ping"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: '3s'
            }}
          ></div>
        ))}
      </div>

      <div className="relative z-10 text-center">
        {/* Logo/Name with enhanced styling */}
        <div className="mb-12">
          <div className="relative">
            <h1 className={`text-5xl md:text-7xl font-bold text-white mb-4 transition-all duration-1000 ${
              phase >= 1 ? 'scale-110 drop-shadow-2xl' : 'scale-100'
            }`}>
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent animate-pulse">
                Taschai
              </span>
            </h1>
            
            {/* Glowing effect behind name */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 blur-3xl opacity-20 animate-pulse"></div>
          </div>
          
          <p className="text-purple-300 text-xl font-light tracking-wider">Portfolio</p>
        </div>

        {/* Enhanced Loading Animation */}
        <div className="mb-12">
          <div className="relative w-80 h-80 mx-auto">
            {/* Multiple rotating rings */}
            <div className="absolute inset-8 rounded-full border border-purple-500/30 animate-spin" style={{animationDuration: '8s'}}></div>
            <div className="absolute inset-12 rounded-full border border-pink-500/40 animate-spin" style={{animationDuration: '6s', animationDirection: 'reverse'}}></div>
            <div className="absolute inset-16 rounded-full border border-blue-500/20 animate-spin" style={{animationDuration: '10s'}}></div>
            
            {/* Main progress ring */}
            <svg className="absolute inset-0 w-full h-full transform -rotate-90" viewBox="0 0 100 100">
              <circle
                cx="50"
                cy="50"
                r="45"
                fill="none"
                stroke="url(#mainGradient)"
                strokeWidth="1"
                strokeLinecap="round"
                strokeDasharray={283}
                strokeDashoffset={283 - (283 * progress) / 100}
                className="transition-all duration-200 ease-out drop-shadow-lg"
              />
              <defs>
                <linearGradient id="mainGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#a855f7" />
                  <stop offset="50%" stopColor="#ec4899" />
                  <stop offset="100%" stopColor="#3b82f6" />
                </linearGradient>
              </defs>
            </svg>

            {/* Center Content */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                {/* Animated logo in center */}
                <div className={`relative transition-all duration-1000 ${
                  phase >= 1 ? 'scale-125 rotate-12' : 'scale-100 rotate-0'
                }`}>
                  <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-purple-600 flex items-center justify-center shadow-2xl">
                    <span className="text-3xl font-bold text-white">T</span>
                  </div>
                  
                  {/* Rotating halo */}
                  <div className="absolute inset-0 rounded-full border-2 border-transparent bg-gradient-to-r from-purple-400 to-pink-400 animate-spin" style={{
                    background: 'conic-gradient(from 0deg, transparent, #a855f7, transparent)',
                    animationDuration: '2s'
                  }}></div>
                </div>
              </div>
            </div>

            {/* Orbiting elements */}
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-ping"
                style={{
                  top: '50%',
                  left: '50%',
                  transform: `rotate(${i * 45}deg) translateX(140px) translateY(-50%)`,
                  animationDelay: `${i * 0.2}s`,
                  animationDuration: '2s'
                }}
              ></div>
            ))}
          </div>
        </div>

        {/* Enhanced Loading Text */}
        <div className="space-y-4">
          <div className="text-white text-2xl font-light tracking-widest">
            {loadingText}
          </div>
          
          <div className="flex justify-center space-x-2">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="w-2 h-2 bg-purple-400 rounded-full animate-bounce"
                style={{
                  animationDelay: `${i * 0.2}s`,
                  animationDuration: '1.4s'
                }}
              ></div>
            ))}
          </div>
          
          <p className="text-gray-400 text-lg font-light mt-4">
            {phase === 0 && "Initializing..."}
            {phase === 1 && "Almost ready..."}
            {phase === 2 && "Welcome!"}
          </p>
        </div>

        {/* Bottom decorative line */}
        <div className="mt-12">
          <div className="w-64 h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent mx-auto animate-pulse"></div>
        </div>
      </div>
    </div>
  );
}

export default LoadingScreen;