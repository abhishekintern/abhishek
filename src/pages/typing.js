import React, { useState, useEffect } from "react";

const TypingEffect = ({ message = "" }) => {
  const [text, setText] = useState("");

  useEffect(() => {
    let currentIndex = 1;
    const typingInterval = setInterval(() => {
      setText(message.substring(0, currentIndex + 1));
      currentIndex++;
      if (currentIndex === message.length) {
        clearInterval(typingInterval);
      }
    }, 100);

    return () => {
      clearInterval(typingInterval);
    };
    // eslint-disable-next-line
  }, []);

  return <p className="text-left py-8">{text}</p>;
};

export default TypingEffect;
