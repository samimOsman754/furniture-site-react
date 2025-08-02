import React from "react";

const TooltipButton = ({
  position = "bottom",
  colors = ["bg-red-700", "bg-green-700", "bg-blue-700"]
}) => {
  const positionClasses = {
    bottom: {
      tooltip: "bottom-full left-1/2 transform -translate-x-1/2 mb-3",
      arrow:
        "left-1/2 transform -translate-x-1/2 -bottom-2 border-t-8 border-t-white/35 border-l-8 border-l-transparent border-r-8 border-r-transparent"
    },
    // Add more positions if needed (top, left, right)
  };

  const currentPos = positionClasses[position] || positionClasses.bottom;

  return (
    <div className="relative group">
      <button className="relative p-4 bg-white/25 rounded-full">
        {/* Tooltip */}
        <div
          className={`hidden absolute p-2 space-x-1 rounded-lg bg-white/25 shadow-md group-hover:flex ${currentPos.tooltip}`}
        >
          {colors.map((color, index) => (
            <div
              key={index}
              className={`size-6 ${color} border border-white rounded-full`}
            ></div>
          ))}
          {/* Tooltip Arrow */}
          <div className={`absolute w-0 h-0 ${currentPos.arrow}`}></div>
        </div>
      </button>
    </div>
  );
};

export default TooltipButton;
