import React from "react";
import Image from "next/image";
import banner0 from "@/public/banner-0.jpg";

export const Banner: React.FC = () => (
  <div className="lg:w-auto max-w-full max-h-[80vh] aspect-[252/189] flex justify-center">
    <Image
      className="w-[2016px] lg:w-auto max-w-full max-h-[80vh] aspect-[252/189]"
      src={banner0}
      width={2016}
      height={1512}
      alt="Imagem aérea da Igreja do Senhor do Bonfim em Salvador, Bahia, feita por Dom Drone"
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 80vw"
      priority
      placeholder="blur"
    />
  </div>
);
