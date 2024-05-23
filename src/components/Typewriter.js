import React, { useState, useEffect } from 'react';

const Typewriter = () => {
  const strings = [
    'Full Stack Developer',
    'HTML',
    'CSS',
    'JavaScript',
    'TypeScript',
    'Python',
    'MySQL',
    'React',
    'AWS S3',
    'AWS Redshift',
    'Docker', 
    'Storyblok',
    'Flask',
    'Jquery', 
    'ReactJS', 
    'Express.JS',
    'Psychology enthusiast',
  ];
  const [currentStringIndex, setCurrentStringIndex] = useState(0);
  const [currentString, setCurrentString] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    if (isTyping) {
      if (currentString === strings[currentStringIndex]) {
        setTimeout(() => {
          setIsTyping(false);
        }, 500); // Adjust the pause duration before erasing (in milliseconds)
      } else {
        const timeout = setTimeout(() => {
          setCurrentString(strings[currentStringIndex].slice(0, currentString.length + 1));
        }, 100); // Adjust the typing speed here (in milliseconds)

        return () => clearTimeout(timeout);
      }
    } else {
      if (currentString === '') {
        setCurrentStringIndex((prevIndex) => (prevIndex + 1) % strings.length);
        setIsTyping(true);
      } else {
        const timeout = setTimeout(() => {
          setCurrentString(currentString.slice(0, currentString.length - 1));
        }, 50); // Adjust the erasing speed here (in milliseconds)

        return () => clearTimeout(timeout);
      }
    }
  }, [currentString, currentStringIndex, isTyping, strings]);

  return (
    <span className="font-[500] dark:font-[400] text-black dark:text-[#d0f0c0;] text-[1.5rem] mb-2 sm:text-[2rem]">
      {currentString}
    </span>
  );
};

export default Typewriter;
