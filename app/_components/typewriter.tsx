import React, { useEffect, useState } from 'react';

interface TypewriterProps {
    text: string;
    speed: number;
    onTypingDone?: () => void;
}

const Typewriter: React.FC<TypewriterProps> = ({ text, speed, onTypingDone }) => {
    const [typedText, setTypedText] = useState<string>('');
    const [currentIndex, setCurrentIndex] = useState<number>(0); // Now explicitly typed as number
    const [isTypingComplete, setIsTypingComplete] = useState<boolean>(false);

    useEffect(() => {
        if (isTypingComplete || !text || currentIndex >= text.length) {
        return;
    }

    const typingInterval = setInterval(() => {
        setTypedText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prevIndex) => {
        const newIndex = prevIndex + 1;
        if (newIndex === text.length) {
            clearInterval(typingInterval);
            setIsTypingComplete(true);
            onTypingDone && onTypingDone();
        }
        return newIndex;
        });
    }, speed);

    return () => clearInterval(typingInterval);
    }, [text, speed, onTypingDone, isTypingComplete, currentIndex]);

    useEffect(() => {
    setTypedText('');
    setCurrentIndex(0);
    setIsTypingComplete(false);
    }, [text]);

    return <span>{typedText}</span>;
};

export default Typewriter;