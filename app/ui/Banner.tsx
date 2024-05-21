import React from "react";
import Image from "next/image";
import banner0 from "@/public/banner-0.webp";

export const Banner: React.FC = () => (
  <div className="lg:w-auto max-w-full max-h-[80vh] aspect-[252/189] flex justify-center flex-[3]">
    <Image
      className="w-[2016px] lg:w-auto max-w-full max-h-[80vh] aspect-[252/189]"
      src={banner0}
      alt="Imagem aérea da Igreja do Senhor do Bonfim em Salvador, Bahia, feita por Dom Drone"
      priority
      placeholder="blur"
      sizes="(min-width: 1920px) 1344px, (min-width: 1024px) 66vw, (max-width: 1024px) 100vw"
    />
  </div>
);
