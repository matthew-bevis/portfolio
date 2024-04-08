import React, { useEffect, useState } from 'react';

interface TypewriterProps {
    text: string;
    speed: number;
    onTypingDone?: () => void;
}

const Typewriter: React.FC<TypewriterProps> = ({ text, speed, onTypingDone }) => {
    const [typedText, setTypedText] = useState<string>('');
    const [isTypingComplete, setIsTypingComplete] = useState<boolean>(false);

    useEffect(() => {
        if (isTypingComplete) {
            return;
        }

        let index = 0;
        const typingInterval = setInterval(() => {
            if (index < text.length) {
                setTypedText((prev) => prev + text[index]);
                index++;
            } else {
                clearInterval(typingInterval);
                setIsTypingComplete(true);
                if (onTypingDone) {
                    onTypingDone();
                }
            }
        }, speed);

        return () => clearInterval(typingInterval);
    }, [text, speed, onTypingDone, isTypingComplete]);

    return <span>{typedText}</span>;
};

export default Typewriter;