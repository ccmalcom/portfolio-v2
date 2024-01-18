'use client'

import React, { useEffect, useState } from 'react';

const TypingAnimation = ({ setIsLoaded }: { setIsLoaded: any }) => {
    
    const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
    const [displayedText, setDisplayedText] = useState('');
    const [cursorPosition, setCursorPosition] = useState(0);
    
    useEffect(() => {
        // console.log(currentMessageIndex);
        const messages = [
            "let coder = {",
            "    name: 'Chase Malcom',",
            "    type: 'Cloud-Based Software Developer',",
            "    location: 'Indianapolis',",
            "    items: ['coffee', 'laptop']",
            "    readyToWork: true",
            "};",
            "    ENTER?: y",
            "    opening..."
        ];
        if (currentMessageIndex < messages.length) {
            const currentMessage = messages[currentMessageIndex];
            if (cursorPosition < currentMessage.length) {
                setTimeout(() => {
                    setDisplayedText(displayedText + currentMessage[cursorPosition]);
                    setCursorPosition(cursorPosition + 1);
                    // console.log('timeout');
                }, currentMessage[cursorPosition] === '.' ? 800 :15); // Adjust this value for typing speed
            } else if (currentMessageIndex < messages.length) {
                setTimeout(() => {
                    if (currentMessageIndex < messages.length - 1) {
                        setDisplayedText(displayedText + '\n');
                        setCursorPosition(0);
                    }
                    setCurrentMessageIndex(currentMessageIndex + 1);
                    // Only add a newline and move to the next message if it's not the last message
                }, 250); // Delay before starting the next message
            }
            
        } else {
            setIsLoaded(true);
        }
    }, [cursorPosition, displayedText, currentMessageIndex]);

    return (
        <div className="text-2xl font-courier top-1/5 text-[#F1E6D3] whitespace-pre typewriter">
            {displayedText}
            <span className="animate-blink bg-white p-0"> </span>
        </div>
    );
};

export default TypingAnimation;
