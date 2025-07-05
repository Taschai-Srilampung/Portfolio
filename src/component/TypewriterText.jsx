import React, { useState, useEffect } from 'react';

const phrases = [
  "I develop autonomous systems.",
  "I build robotic solutions.",
  "I create intelligent machines."
];

function TypewriterText() {
  const [index, setIndex] = useState(0);      // index ของข้อความ
  const [subIndex, setSubIndex] = useState(0); // index ของตัวอักษร
  const [forward, setForward] = useState(true);
  const [blink, setBlink] = useState(true);
  
  useEffect(() => {
    if (subIndex === phrases[index].length + 1 && forward) {
      setTimeout(() => setForward(false), 1000);
      return;
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

  return (
    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 md:mb-8 min-h-[3.5rem]">
      {phrases[index].substring(0, subIndex)}
      <span className={`text-purple-400 ${blink ? 'opacity-100' : 'opacity-0'}`}>|</span>
    </h2>
  );
}
export default TypewriterText