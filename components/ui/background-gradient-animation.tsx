"use client";
import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";

const themes = {
  moonlight: {
    gradientBackgroundStart: "rgb(30, 41, 59)",
    gradientBackgroundEnd: "rgb(17, 24, 39)",
    firstColor: "147, 197, 253",
    secondColor: "196, 181, 253",
    thirdColor: "167, 139, 250",
    fourthColor: "139, 92, 246",
    fifthColor: "129, 140, 248",
    pointerColor: "147, 197, 253",
  },
  dawn: {
    gradientBackgroundStart: "rgb(249, 250, 251)",
    gradientBackgroundEnd: "rgb(243, 244, 246)",
    firstColor: "254, 202, 202",
    secondColor: "252, 165, 165",
    thirdColor: "254, 240, 138",
    fourthColor: "253, 186, 116",
    fifthColor: "253, 164, 175",
    pointerColor: "251, 207, 232",
  },
  sage: {
    gradientBackgroundStart: "rgb(236, 253, 245)",
    gradientBackgroundEnd: "rgb(209, 250, 229)",
    firstColor: "167, 243, 208",
    secondColor: "110, 231, 183",
    thirdColor: "52, 211, 153",
    fourthColor: "16, 185, 129",
    fifthColor: "6, 148, 102",
    pointerColor: "167, 243, 208",
  },
  ocean: {
    gradientBackgroundStart: "rgb(238, 242, 255)",
    gradientBackgroundEnd: "rgb(224, 231, 255)",
    firstColor: "199, 210, 254",
    secondColor: "165, 180, 252",
    thirdColor: "129, 140, 248",
    fourthColor: "99, 102, 241",
    fifthColor: "79, 70, 229",
    pointerColor: "165, 180, 252",
  },
  lavender: {
    gradientBackgroundStart: "rgb(245, 243, 255)",
    gradientBackgroundEnd: "rgb(237, 233, 254)",
    firstColor: "221, 214, 254",
    secondColor: "196, 181, 253",
    thirdColor: "167, 139, 250",
    fourthColor: "139, 92, 246",
    fifthColor: "124, 58, 237",
    pointerColor: "196, 181, 253",
  },
  sunset: {
    gradientBackgroundStart: "rgb(255, 241, 235)",
    gradientBackgroundEnd: "rgb(254, 228, 226)",
    firstColor: "254, 215, 170",
    secondColor: "253, 186, 116",
    thirdColor: "251, 146, 60",
    fourthColor: "249, 115, 22",
    fifthColor: "234, 88, 12",
    pointerColor: "254, 215, 170",
  },
  mint: {
    gradientBackgroundStart: "rgb(236, 254, 255)",
    gradientBackgroundEnd: "rgb(207, 250, 254)",
    firstColor: "165, 243, 252",
    secondColor: "103, 232, 249",
    thirdColor: "34, 211, 238",
    fourthColor: "6, 182, 212",
    fifthColor: "8, 145, 178",
    pointerColor: "165, 243, 252",
  },
  rose: {
    gradientBackgroundStart: "rgb(255, 241, 242)",
    gradientBackgroundEnd: "rgb(254, 228, 226)",
    firstColor: "253, 164, 175",
    secondColor: "251, 113, 133",
    thirdColor: "244, 63, 94",
    fourthColor: "225, 29, 72",
    fifthColor: "225, 29, 72",
    pointerColor: "251, 113, 133",
  },
  serenity: {
    gradientBackgroundStart: "rgb(240, 249, 255)",
    gradientBackgroundEnd: "rgb(224, 242, 254)",
    firstColor: "186, 230, 253",
    secondColor: "125, 211, 252",
    thirdColor: "56, 189, 248",
    fourthColor: "14, 165, 233",
    fifthColor: "2, 132, 199",
    pointerColor: "125, 211, 252",
  },
  pearl: {
    gradientBackgroundStart: "rgb(250, 250, 250)",
    gradientBackgroundEnd: "rgb(244, 244, 245)",
    firstColor: "228, 228, 231",
    secondColor: "212, 212, 216",
    thirdColor: "161, 161, 170",
    fourthColor: "113, 113, 122",
    fifthColor: "82, 82, 91",
    pointerColor: "212, 212, 216",
  },
};

export const BackgroundGradientAnimation = ({
  theme = "moonlight", // dawn, sage , ocean , lavender , sunset , mint , rose , serenity , pearl
  size = "80%",
  blendingValue = "hard-light",
  children,
  className,
  interactive = true,
  containerClassName,
}: {
  theme?: keyof typeof themes;
  size?: string;
  blendingValue?: string;
  children?: React.ReactNode;
  className?: string;
  interactive?: boolean;
  containerClassName?: string;
}) => {
  const selectedTheme = themes[theme];
  const interactiveRef = useRef<HTMLDivElement>(null);

  const [curX, setCurX] = useState(0);
  const [curY, setCurY] = useState(0);
  const [tgX, setTgX] = useState(0);
  const [tgY, setTgY] = useState(0);

  useEffect(() => {
    document.body.style.setProperty(
      "--gradient-background-start",
      selectedTheme.gradientBackgroundStart
    );
    document.body.style.setProperty(
      "--gradient-background-end",
      selectedTheme.gradientBackgroundEnd
    );
    document.body.style.setProperty("--first-color", selectedTheme.firstColor);
    document.body.style.setProperty(
      "--second-color",
      selectedTheme.secondColor
    );
    document.body.style.setProperty("--third-color", selectedTheme.thirdColor);
    document.body.style.setProperty(
      "--fourth-color",
      selectedTheme.fourthColor
    );
    document.body.style.setProperty("--fifth-color", selectedTheme.fifthColor);
    document.body.style.setProperty(
      "--pointer-color",
      selectedTheme.pointerColor
    );
    document.body.style.setProperty("--size", size);
    document.body.style.setProperty("--blending-value", blendingValue);
  }, [selectedTheme, size, blendingValue]);

  useEffect(() => {
    function move() {
      if (!interactiveRef.current) {
        return;
      }
      setCurX(curX + (tgX - curX) / 20);
      setCurY(curY + (tgY - curY) / 20);
      interactiveRef.current.style.transform = `translate(${Math.round(
        curX
      )}px, ${Math.round(curY)}px)`;
    }

    move();
  }, [tgX, tgY]);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (interactiveRef.current) {
      const rect = interactiveRef.current.getBoundingClientRect();
      setTgX(event.clientX - rect.left);
      setTgY(event.clientY - rect.top);
    }
  };

  const [isSafari, setIsSafari] = useState(false);
  useEffect(() => {
    setIsSafari(/^((?!chrome|android).)*safari/i.test(navigator.userAgent));
  }, []);

  return (
    <div
      className={cn(
        "h-screen w-screen relative overflow-hidden top-0 left-0 bg-[linear-gradient(40deg,var(--gradient-background-start),var(--gradient-background-end))]",
        containerClassName
      )}
    >
      <svg className="hidden">
        <defs>
          <filter id="blurMe">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="10"
              result="blur"
            />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
              result="goo"
            />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>
      <div className={cn("", className)}>{children}</div>
      <div
        className={cn(
          "gradients-container h-full w-full blur-lg",
          isSafari ? "blur-2xl" : "[filter:url(#blurMe)_blur(40px)]"
        )}
      >
        <div
          className={cn(
            `absolute [background:radial-gradient(circle_at_center,_var(--first-color)_0,_var(--first-color)_50%)_no-repeat]`,
            `[mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)]`,
            `[transform-origin:center_center]`,
            `animate-first`,
            `opacity-100`
          )}
        ></div>
        <div
          className={cn(
            `absolute [background:radial-gradient(circle_at_center,_rgba(var(--second-color),_0.8)_0,_rgba(var(--second-color),_0)_50%)_no-repeat]`,
            `[mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)]`,
            `[transform-origin:calc(50%-400px)]`,
            `animate-second`,
            `opacity-100`
          )}
        ></div>
        <div
          className={cn(
            `absolute [background:radial-gradient(circle_at_center,_rgba(var(--third-color),_0.8)_0,_rgba(var(--third-color),_0)_50%)_no-repeat]`,
            `[mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)]`,
            `[transform-origin:calc(50%+400px)]`,
            `animate-third`,
            `opacity-100`
          )}
        ></div>
        <div
          className={cn(
            `absolute [background:radial-gradient(circle_at_center,_rgba(var(--fourth-color),_0.8)_0,_rgba(var(--fourth-color),_0)_50%)_no-repeat]`,
            `[mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)]`,
            `[transform-origin:calc(50%-200px)]`,
            `animate-fourth`,
            `opacity-70`
          )}
        ></div>
        <div
          className={cn(
            `absolute [background:radial-gradient(circle_at_center,_rgba(var(--fifth-color),_0.8)_0,_rgba(var(--fifth-color),_0)_50%)_no-repeat]`,
            `[mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)]`,
            `[transform-origin:calc(50%-800px)_calc(50%+800px)]`,
            `animate-fifth`,
            `opacity-100`
          )}
        ></div>

        {interactive && (
          <div
            ref={interactiveRef}
            onMouseMove={handleMouseMove}
            className={cn(
              `absolute [background:radial-gradient(circle_at_center,_rgba(var(--pointer-color),_0.8)_0,_rgba(var(--pointer-color),_0)_50%)_no-repeat]`,
              `[mix-blend-mode:var(--blending-value)] w-full h-full -top-1/2 -left-1/2`,
              `opacity-70`
            )}
          ></div>
        )}
      </div>
    </div>
  );
};
