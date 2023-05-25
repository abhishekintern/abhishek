import Tooltip from "@/components/Tooltip";
import React from "react";

const MyComponent = () => {
  return (
    <div className="flex justify-center items-center h-screen w-full bg-red-100">
      <div className="flex justify-center items-center h-[100px] border-2 bg-green-100">
        <button className="group bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Hover me
          <Tooltip
            className={
              "absolute z-10 hidden group-hover:inline-block bg-gray-900 text-white text-sm px-2 py-1 rounded-md"
            }
            content="This is a tooltip"
          />
        </button>
      </div>
    </div>
  );
};

export default MyComponent;
