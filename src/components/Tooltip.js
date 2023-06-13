import { useState } from "react";

const Tooltip = ({ text, position = "top", children }) => {
  const [isTooltipVisible, setTooltipVisible] = useState(false);

  const showTooltip = () => {
    setTooltipVisible(true);
  };

  const hideTooltip = () => {
    setTooltipVisible(false);
  };

  const getTooltipPosition = () => {
    switch (position) {
      case "right":
        return "right-0";
      case "left":
        return "left-0";
      case "bottom":
        return "bottom-0";
      default:
        return "top-0";
    }
  };

  const tooltipPosition = getTooltipPosition();

  return (
    <div className="relative inline-block">
      <div
        onMouseEnter={showTooltip}
        onMouseLeave={hideTooltip}
        className="inline-block"
      >
        {children}
      </div>
      {isTooltipVisible && (
        <div
          className={`absolute z-10 px-2 py-1 text-white bg-gray-700 rounded ${tooltipPosition}`}
        >
          {text}
          <div
            className={`absolute ${position === "top" ? "bottom-0" : "top-0"}`}
          >
            <svg
              className="absolute text-gray-700 fill-current"
              width="16"
              height="8"
            >
              <path d="M0 0h16L8 8z" />
            </svg>
          </div>
        </div>
      )}
    </div>
  );
};

export default Tooltip;
