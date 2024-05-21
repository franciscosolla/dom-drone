import React from "react";
import Image from "next/image";
import profile from "@/public/profile.webp";

export const ProfileImage: React.FC = () => (
  <Image
    className="rounded-full w-28 h-28"
    src={profile}
    alt="Foto de Jonatan Farias, dono da Dom Drone, mostrando o seu drone de trabalho."
    priority
    placeholder="blur"
  />
);
