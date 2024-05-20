import React from "react";
import WhatsAppSVG from "./WhatsAppSVG";

export const WhatsAppLink: React.FC = () => (
  <a href="https://wa.me/5571996181993" target="_blank">
    <WhatsAppSVG
      className="w-5 h-5"
      width={40}
      height={40}
      alt="Contato via WhatsApp com Dom Drone"
    />
  </a>
);
