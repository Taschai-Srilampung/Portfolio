import React, { useState, useEffect, useRef } from 'react';

// --- 1. IMPORT รูปภาพเข้ามาก่อน (เพื่อให้ Vite รู้จักไฟล์นี้) ---
// ตรวจสอบชื่อไฟล์ตัวเล็กตัวใหญ่ให้เป๊ะนะครับ (JPG vs jpg)
import imgWorkspace from '../assets/IMG_8171.JPG';
import imgHandsOn from '../assets/IMG_8170.JPG';
import imgRobotFinal from '../assets/IMG_7922.jpg';
import imgWiring from '../assets/IMG_7900.jpg';
import imgDevEnv from '../assets/IMG_4085.jpg';

// Custom SVG Icons
const ChevronLeftIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
  </svg>
);

const ChevronRightIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
);

const PlayIcon = () => (
  <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
    <path d="M8 5v14l11-7z" />
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

function WorkbenchGallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(null);
  const [isHovering, setIsHovering] = useState(false);
  const videoRefs = useRef({});
  const autoSlideTimerRef = useRef(null);
  const [headerRef, isHeaderVisible] = useScrollAnimation();

  // --- 2. ใช้ตัวแปรที่ Import มาใส่ใน src แทน String ---
  const galleryItems = [
    // Images
    {
      id: 3,
      type: 'image',
      src: imgWorkspace, // ใช้ตัวแปร imgWorkspace
      caption: 'My R&D Lab: Where prototyping happens',
      alt: 'R&D Lab workspace'
    },
    {
      id: 4,
      type: 'image',
      src: imgHandsOn, // ใช้ตัวแปร imgHandsOn
      caption: 'Hands-on: Component-level troubleshooting',
      alt: 'Component troubleshooting'
    },
    {
      id: 5,
      type: 'image',
      src: imgRobotFinal,
      caption: 'RC Robot: Final Assembly',
      alt: 'Robot final assembly'
    },
    {
      id: 6,
      type: 'image',
      src: imgWiring,
      caption: 'Wiring: Complex GPIO & Sensor Integration',
      alt: 'GPIO and sensor wiring'
    },
    {
      id: 7,
      type: 'image',
      src: imgDevEnv,
      caption: 'Dev Environment: Arduino IDE & ESP32 Testing',
      alt: 'Arduino IDE and ESP32 testing'
    },
    // YouTube Videos (อันนี้ใช้ String ได้เพราะเป็น Link ภายนอก)
    {
      id: 8,
      type: 'youtube',
      youtubeId: 'oZHkCvXODiU',
      caption: 'IoT Project: WiFi-controlled RC Car using ESP32',
      alt: 'WiFi controlled RC car demo'
    },
    {
      id: 9,
      type: 'youtube',
      youtubeId: 'tHGP9oJpWbw',
      caption: 'Embedded Control: IR Remote & Servo Motor Test',
      alt: 'IR remote servo motor test'
    }
  ];

  // Pause all videos
  const pauseAllVideos = () => {
    Object.values(videoRefs.current).forEach(video => {
      if (video) video.pause();
    });
  };

  // Navigate to previous slide
  const goToPrevious = () => {
    pauseAllVideos();
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? galleryItems.length - 1 : prevIndex - 1
    );
    setIsPlaying(null);
  };

  // Navigate to next slide
  const goToNext = () => {
    pauseAllVideos();
    setCurrentIndex((prevIndex) =>
      prevIndex === galleryItems.length - 1 ? 0 : prevIndex + 1
    );
    setIsPlaying(null);
  };

  // Go to specific slide
  const goToSlide = (index) => {
    pauseAllVideos();
    setCurrentIndex(index);
    setIsPlaying(null);
  };

  // Handle video play/pause
  const handlePlayClick = (index) => {
    setIsPlaying(isPlaying === index ? null : index);
    if (videoRefs.current[index]) {
      if (isPlaying === index) {
        videoRefs.current[index].pause();
      } else {
        videoRefs.current[index].play();
      }
    }
  };

  // Auto-slide effect
  useEffect(() => {
    // Determine if we should pause auto-slide
    const shouldPause = isHovering || isPlaying !== null;

    if (shouldPause) {
      // Clear existing timer
      if (autoSlideTimerRef.current) {
        clearInterval(autoSlideTimerRef.current);
        autoSlideTimerRef.current = null;
      }
      return;
    }

    // Set up auto-slide timer
    autoSlideTimerRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === galleryItems.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    // Cleanup timer
    return () => {
      if (autoSlideTimerRef.current) {
        clearInterval(autoSlideTimerRef.current);
        autoSlideTimerRef.current = null;
      }
    };
  }, [isHovering, isPlaying, galleryItems.length]);

  const currentItem = galleryItems[currentIndex];

  return (
    <section className="py-16 lg:py-24 bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-20">
        {/* Header */}
        <div 
          ref={headerRef}
          className={`text-center mb-12 lg:mb-16 transform transition-all duration-1000 ${
            isHeaderVisible 
              ? 'translate-y-0 opacity-100' 
              : 'translate-y-16 opacity-0'
          }`}
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            My <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Workbench</span> & <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Prototypes</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full mb-8"></div>
          <p className="text-gray-300 text-base sm:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed">
            A glimpse into my hands-on R&D lab where robotics projects come to life. 
            From IoT prototypes to component-level repairs, this is where innovation happens.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Main Media Display */}
          <div 
            className="relative h-[400px] sm:h-[500px] lg:h-[600px] bg-gray-800 rounded-2xl overflow-hidden border border-gray-700/50 group"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            {/* Media Content */}
            <div className="relative w-full h-full">
              {currentItem.type === 'youtube' ? (
                <iframe
                  src={`https://www.youtube.com/embed/${currentItem.youtubeId}?rel=0&modestbranding=1`}
                  className="w-full h-full object-contain bg-black"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title={currentItem.alt}
                />
              ) : currentItem.type === 'video' ? (
                <video
                  ref={(el) => {
                    if (el) videoRefs.current[currentIndex] = el;
                  }}
                  className="w-full h-full object-contain bg-black"
                  controls
                  onPlay={() => setIsPlaying(currentIndex)}
                  onPause={() => setIsPlaying(null)}
                >
                  <source src={currentItem.src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <img
                  src={currentItem.src}
                  alt={currentItem.alt}
                  className="w-full h-full object-cover"
                />
              )}

              {/* Play Button Overlay for Local Videos (when not playing) */}
              {currentItem.type === 'video' && isPlaying !== currentIndex && (
                <div 
                  className="absolute inset-0 bg-black/40 flex items-center justify-center cursor-pointer hover:bg-black/50 transition-colors pointer-events-auto"
                  onClick={() => handlePlayClick(currentIndex)}
                >
                  <div className="text-white/80 hover:text-white transition-colors">
                    <PlayIcon />
                  </div>
                </div>
              )}
            </div>

            {/* Navigation Buttons - HIGHER Z-INDEX to stay above video controls */}
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-300 hover:scale-110 z-50"
              aria-label="Previous slide"
            >
              <ChevronLeftIcon />
            </button>

            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-300 hover:scale-110 z-50"
              aria-label="Next slide"
            >
              <ChevronRightIcon />
            </button>

            {/* Video Badge */}
            {(currentItem.type === 'video' || currentItem.type === 'youtube') && (
              <div className="absolute top-4 left-4 bg-red-600/80 text-white px-3 py-1 rounded-full text-sm font-medium z-30">
                Video
              </div>
            )}
          </div>

          {/* Caption */}
          <div className="mt-6 text-center">
            <p className="text-gray-300 text-lg font-medium mb-4 min-h-[1.5rem]">
              {currentItem.caption}
            </p>
            <div className="flex items-center justify-center gap-2 text-gray-500 text-sm">
              <span>Slide {currentIndex + 1} of {galleryItems.length}</span>
            </div>
          </div>

          {/* Thumbnail Navigation */}
          <div className="mt-8 flex gap-3 overflow-x-auto pb-4 px-4 sm:px-0 sm:justify-center flex-wrap">
            {galleryItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => goToSlide(index)}
                className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all duration-300 transform hover:scale-105 ${
                  index === currentIndex
                    ? 'border-cyan-500 shadow-lg shadow-cyan-500/50'
                    : 'border-gray-600/50 hover:border-gray-500'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              >
                {item.type === 'video' || item.type === 'youtube' ? (
                  <div className="w-full h-full bg-gray-800 flex items-center justify-center">
                    <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                ) : (
                  <img
                    src={item.src}
                    alt={`Thumbnail ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                )}
              </button>
            ))}
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {galleryItems.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-cyan-500 w-8'
                    : 'bg-gray-600 w-2 hover:bg-gray-500'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default WorkbenchGallery;