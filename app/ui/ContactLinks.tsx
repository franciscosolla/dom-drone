import React from "react";
import { InstagramLink } from "./InstagramLink";
import { WhatsAppLink } from "./WhatsAppLink";
import { YoutubeLink } from "./YoutubeLink";

export const ContactLinks: React.FC = () => (
  <ul className="flex gap-8">
    <li>
      <InstagramLink />
    </li>
    <li>
      <WhatsAppLink />
    </li>
    <li>
      <YoutubeLink />
    </li>
  </ul>
);
