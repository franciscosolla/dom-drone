import React from "react";
import { ContactLinks } from "./ContactLinks";
import { ProfileImage } from "./ProfileImage";

export const Profile: React.FC = () => (
  <section className="flex flex-col items-center gap-4 whitespace-nowrap p-16 flex-1">
    <ProfileImage />
    <div className="flex flex-col items-center">
      <h1 className="font-bold text-3xl">Jonatan Farias</h1>
      <p className="text-justify text-lg italic">Piloto da Dom Drone</p>
    </div>
    <ContactLinks />
  </section>
);
