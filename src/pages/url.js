import React, { useState } from "react";

const URLWEBSITE = () => {
  const [website, setWebsite] = useState("");
  const handlePaste = (e) => {
    let url = e.target.value;
    url = url.replace(/^https?:\/\//i, "");
    setWebsite(url);
  };
  return (
    <div>
      <input
        className="border-2 bg-gray-500 text-green-100"
        type="text"
        name="url"
        id="url"
        value={website}
        onChange={(e) =>
          setWebsite(e.target.value.replace(/^https?:\/\//i, ""))
        }
      />
      <p>{website}</p>
    </div>
  );
};

export default URLWEBSITE;
