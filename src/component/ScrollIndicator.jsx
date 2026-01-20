import React, { useCallback } from 'react';

const ScrollIndicator = React.memo(() => {
  const scrollToNext = useCallback(() => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  }, []);

  return (
    <div 
      className="flex flex-col items-center cursor-pointer will-change-transform" 
      onClick={scrollToNext}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          scrollToNext();
        }
      }}
      aria-label="Scroll to next section"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6 text-white/70 animate-bounce mb-1 will-change-transform"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
      </svg>
      <span className="text-white/70 text-sm">scroll</span>
    </div>
  );
});

ScrollIndicator.displayName = 'ScrollIndicator';

export default ScrollIndicator;
  