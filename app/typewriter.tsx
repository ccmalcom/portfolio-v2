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
            "opening..."
        ];
        if (currentMessageIndex < messages.length - 1) {
            const currentMessage = messages[currentMessageIndex];
            if (cursorPosition < currentMessage.length) {
                setTimeout(() => {
                    setDisplayedText(displayedText + currentMessage[cursorPosition]);
                    setCursorPosition(cursorPosition + 1);
                    // messy way to check if the next character is a y and slow down
                }, currentMessage[cursorPosition] === 'y'  && currentMessageIndex === messages.length - 2 ? 800 : 15); // !Adjust this value for typing speed
            } else {
                if (currentMessageIndex === messages.length - 2) {
                    //wait 500ms, then clear the screen and move to the next message
                    setTimeout(() => {
                        setDisplayedText('');
                        setCursorPosition(0);
                        setCurrentMessageIndex(currentMessageIndex + 1);
                    }, 250); //! Adjust this value for delay before starting the next message
                }
                else {
                    setTimeout(() => {
                        setDisplayedText(displayedText + '\n');
                        setCursorPosition(0);

                        setCurrentMessageIndex(currentMessageIndex + 1);
                        // Only add a newline and move to the next message if it's not the last message
                    }, 250); //! Adjust this value for delay before starting the next message
                }
            }
        } else if (currentMessageIndex === messages.length - 1) {
            //replace displayedText with only last line, print it, then set isLoaded to true
            const currentMessage = messages[currentMessageIndex];
            // setDisplayedText('')
                ; if (cursorPosition < currentMessage.length) {
                    setTimeout(() => {
                        setDisplayedText(displayedText + currentMessage[cursorPosition]);
                        setCursorPosition(cursorPosition + 1);
                    }, currentMessage[cursorPosition] === '.'?800:30);
                } else {
                    setTimeout(() => {
                setIsLoaded(true);
                    }, 800);
            }

        }
    }, [cursorPosition, displayedText, currentMessageIndex, setIsLoaded]);

    return (
        <div className="text-2xl font-courier top-1/5 text-[#F1E6D3] whitespace-pre typewriter">
            {displayedText}
            <span className="animate-blink bg-white p-0"> </span>
        </div>
    );
};

export default TypingAnimation;
