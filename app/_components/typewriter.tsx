import React, { useEffect, useState } from 'react';

interface TypewriterProps {
  text: string;
  speed: number;
  onTypingDone?: () => void;
}

const Typewriter: React.FC<TypewriterProps> = ({ text, speed, onTypingDone }) => {
  const [typedText, setTypedText] = useState<string>('');
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    if (currentIndex >= text.length) {
      // Invoke the callback in a way that it's not directly during the render phase
      if (onTypingDone) {
        setTimeout(onTypingDone, 0);
      }
      return;
    }

    const typingTimeout = setTimeout(() => {
      setTypedText((prev) => prev + text[currentIndex]);
      setCurrentIndex(currentIndex + 1);
    }, speed);

    // Clean up the timeout when the component unmounts or when the dependencies change
    return () => clearTimeout(typingTimeout);
  }, [currentIndex, text, speed, onTypingDone]);

  useEffect(() => {
    // Reset the typing effect when the `text` prop changes
    if (text) {
      setTypedText('');
      setCurrentIndex(0);
    }
  }, [text]);

  return <span>{typedText}</span>;
};

export default Typewriter;
