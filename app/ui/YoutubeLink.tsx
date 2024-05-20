import React from "react";
import YoutubeSVG from "./YoutubeSVG";

export const YoutubeLink: React.FC = () => (
  <a href="https://youtube.com/@domdrone" target="_blank">
    <YoutubeSVG
      className="w-5 h-5"
      width={40}
      height={40}
      alt="Acessar o Youtube da Dom Drone"
    />
  </a>
);
