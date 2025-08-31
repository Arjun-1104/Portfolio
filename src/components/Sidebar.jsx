import React from "react";
import assets from "../assets/assets";
const Sidebar = () => {
  return (
    <div className="w-fit flex flex-col gap-6 justify-center items-center fixed right-4 top-1/2 -translate-y-1/2">
      <div className="h-[150px] w-1 bg-[#c5ba22] rounded"></div>
      <div className="flex flex-col gap-3">
        <a
          href="https://www.linkedin.com/in/arjun-rathore-ar/"
          target="_blank"
          className="aboutSocialIconsDiv bg-[#c5ba22] rounded-full inline-block p-2 w-10"
        >
          <img
            className="aboutSocialIcons w-8"
            src={assets.linkedinIcon}
            alt="linkedin"
          />
        </a>
        <a
          href="https://github.com/Arjun-1104"
          target="_blank"
          className="aboutSocialIconsDiv bg-[#c5ba22] rounded-full inline-block p-2 w-10"
        >
          <img
            className="aboutSocialIcons w-8"
            src={assets.githubIcon}
            alt="github"
          />
        </a>
      </div>
      <div className="h-[150px] w-1 bg-[#c5ba22] rounded"></div>
    </div>
  );
};

export default Sidebar;
