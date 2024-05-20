import React from "react";
import InstagramSVG from "./InstagramSVG";

export const InstagramLink: React.FC = () => (
  <a href="https://www.instagram.com/domdrone/" target="_blank">
    <InstagramSVG
      className="w-5 h-5"
      width={40}
      height={40}
      alt="Acessar o Instagram da Dom Drone"
    />
  </a>
);
