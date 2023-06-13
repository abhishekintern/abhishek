import { useState } from "react";

const InputBox = () => {
  const [text, setText] = useState("");

  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <input
      className="w-full p-2 border rounded overflow-x-hidden overflow-y-auto min-h-5 h-fit"
      type="text"
      placeholder="Type a message..."
      value={text}
      onChange={handleChange}
    />
  );
};

export default InputBox;
