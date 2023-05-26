import React, { useState, useEffect } from "react";

const TypingEffect = () => {
  const [text, setText] = useState("");
  const message =
    "In the above example, we create a functional component called TypingEffect. We use the useState hook to keep track of the current text that is being typed. Inside the useEffect hook, we set up an interval that runs every 100 milliseconds. It appends the next character of the message to the text state and updates the index. Once the typing is finished, the interval is cleared using the clearInterval function.";

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
  }, []);

  return (
    <div className="text-left py-8">
      <h1 className="text-3xl text-left font-bold">{text}</h1>
    </div>
  );
};

export default TypingEffect;
