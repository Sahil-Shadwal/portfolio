import React from "react";

const MagicButton = ({
  title,
  icon,
  position,
  handleClick,
  otherClasses,
}: {
  title: string;
  icon: React.ReactNode;
  position: string;
  handleClick?: () => void;
  otherClasses?: string;
}) => {
  return (
    //rounded lg for rectangular button do change it twice in and out
    <button
      className="relative px-8 py-2 rounded-full bg-slate-700/40 backdrop-blur-sm text-white/90 text-sm 
      hover:shadow-2xl hover:shadow-white/[0.1] hover:bg-slate-700/50 
      transition-all duration-300 ease-in-out border border-slate-500/40 w-full md:w-60 md:mt-10"
      onClick={handleClick}
    >
      <div
        className="absolute inset-x-0 h-px w-1/2 mx-auto -top-px shadow-2xl 
      bg-gradient-to-r from-transparent via-teal-400/60 to-transparent 
      animate-pulse"
      />
      <span
        className={`relative z-20 inline-flex items-center justify-center gap-2 ${otherClasses}`}
      >
        {position === "left" && icon}
        {title}
        {position === "right" && icon}
      </span>
    </button>
  );
};

export default MagicButton;
