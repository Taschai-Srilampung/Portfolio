import React, { useState, useEffect, useMemo } from 'react';

const phrases = [
  "I build real-time IoT platforms.",
  "I develop full-stack web apps.",
  "I design hardware & software."
];

// Memoize the display text computation
const TypewriterText = React.memo(() => {
  const [index, setIndex] = useState(0);      // index ของข้อความ
  const [subIndex, setSubIndex] = useState(0); // index ของตัวอักษร
  const [forward, setForward] = useState(true);
  const [blink, setBlink] = useState(true);
  
  useEffect(() => {
    if (subIndex === phrases[index].length + 1 && forward) {
      const timer = setTimeout(() => setForward(false), 1000);
      return () => clearTimeout(timer);
    }

    if (subIndex === 0 && !forward) {
      setForward(true);
      setIndex((prev) => (prev + 1) % phrases.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (forward ? 1 : -1));
    }, forward ? 80 : 40);

    return () => clearTimeout(timeout);
  }, [subIndex, index, forward]);

  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setBlink((prev) => !prev);
    }, 500);
    return () => clearInterval(blinkInterval);
  }, []);

  // Memoize the text rendering to prevent recalculation
  const displayText = useMemo(() => {
    return phrases[index].substring(0, subIndex);
  }, [index, subIndex]);

  return (
    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 md:mb-8 min-h-[3.5rem] will-change-contents">
      {displayText}
      <span className={`text-purple-400 transition-opacity duration-75 will-change-opacity ${blink ? 'opacity-100' : 'opacity-0'}`}>|</span>
    </h2>
  );
});

TypewriterText.displayName = 'TypewriterText';

export default TypewriterText