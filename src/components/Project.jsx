import React from "react";
import assets from "../assets/assets";
import { projectsData } from "../data/data";

const Project = () => {
  return (
    <div id="projects" className="mt-20 bg-white/7 w-full p-5 scroll-mt-20">
      <div className="flex items-center justify-center gap-3 mb-15">
        <img src={assets.web} className="w-8 h-8" alt="Project Icon" />
        <p className="text-white/80 text-3xl tracking-wider">Projects</p>
      </div>

      <div className="space-y-30 w-[90%]">
        {projectsData.map((item) => {
          return (
            <div
              key={item.id}
              className={`w-full space-y-10 md:space-y-0 flex flex-col ${
                item.id % 2 == 0 ? "md:flex-row-reverse" : "md:flex-row"
              } items-start md:items-center justify-center md:justify-between xl:justify-evenly`}
            >
              <div className="w-full md:w-[45%] md:h-50">
                <img
                  src={item.image}
                  alt="image"
                  className="rounded-xl md:h-full"
                />
              </div>
              <div className="space-y-4 md:w-[45%] xl:pr-30">
                <h2 className="text-2xl font-bold text-blue-500">
                  {item.label}
                </h2>
                <p className="text-white/70 text-sm tracking-wide">
                  {item.desc}
                </p>
                <div className="text-[#c5ba22] text-lg flex gap-4">
                  {item.languageUse.map((lang, idx) => {
                    return <span key={idx}>{lang}</span>;
                  })}
                </div>
                <div className="flex items-center gap-3">
                  <a href={item.path} target="_blank">
                    <button className="flex items-center justify-center rounded-full gap-3 py-2 px-4  bg-[#c5ba22] hover:bg-[#e3d514] transition-all duration-400 cursor-pointer">
                      <img
                        src={assets.takeLookIcon}
                        className="w-4 h-4"
                        alt="image"
                      />
                      <p className="font-semibold text-base tracking-widest">
                        Take a Look
                      </p>
                    </button>
                  </a>
                  <a href={item.gitPath} target="_blank">
                    <img
                      src={assets.githubIcon}
                      alt="image"
                      className="w-10 h-10 p-1.5 rounded-full bg-blue-500"
                    />
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Project;
