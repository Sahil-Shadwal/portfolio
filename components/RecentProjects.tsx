import { projects } from "@/data/index";
import React from "react";
import { PinContainer } from "./ui/3d-pin";
import { FaLocationArrow } from "react-icons/fa";

const RecentProjects = () => {
  return (
    <div className="py-20 px-4" id="projects">
      <h1 className="heading text-center">
        A small selection of{" "}
        <span className="text-purple">recent projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center gap-6 mt-10">
        {projects.map(({ id, title, des, img, iconLists, link }) => (
          <div
            key={id}
            className="flex flex-col items-center justify-center w-full sm:w-[570px] h-auto"
          >
            <PinContainer title={link} href={link}>
              <div className="relative flex items-center justify-center w-full h-[200px] sm:h-[300px] overflow-hidden mb-6">
                <div className="relative w-full h-full overflow-hidden rounded-xl">
                  <img
                    src="/bg.png"
                    alt="bg-img"
                    className="w-full h-full object-cover"
                  />
                </div>
                <img
                  src={img}
                  alt={title}
                  className="absolute bottom-0 z-10 w-[80px] sm:w-[100px]"
                />
              </div>
              <h1 className="font-bold text-lg sm:text-2xl line-clamp-1 text-center">
                {title}
              </h1>
              <p className="text-sm sm:text-base font-light line-clamp-2 text-center">
                {des}
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-between mt-5 space-y-4 sm:space-y-0">
                <div className="flex items-center space-x-2">
                  {iconLists.map((icon, index) => (
                    <div
                      key={icon}
                      className="border border-white/[0.2] rounded-full bg-black-200 w-8 h-8 flex justify-center items-center"
                      style={{
                        transform: `translateX(-${5 * index}px)`,
                      }}
                    >
                      <img src={icon} alt={icon} className="p-2" />
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-center">
                  <a
                    href={link}
                    className="text-sm sm:text-base text-purple flex items-center"
                  >
                    Check Live Site
                  </a>
                  <FaLocationArrow className="ms-2" color="#CBACF9" />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
