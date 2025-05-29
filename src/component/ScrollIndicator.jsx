function ScrollIndicator() {
    const scrollToNext = () => {
      window.scrollTo({
        top: window.innerHeight,
        behavior: 'smooth'
      });
    };
  
    return (
      <div className="flex flex-col items-center cursor-pointer" onClick={scrollToNext}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 text-white/70 animate-bounce mb-1"
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
  }
  
  export default ScrollIndicator;
  