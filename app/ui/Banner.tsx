"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import banner0 from "@/public/banner-0.webp";
import banner1 from "@/public/banner-1.webp";

const images = [banner0, banner1];

const getNext = (current: number) => {
  return current + 1 < images.length ? current + 1 : 0;
};

const SHOWING_TIME_IN_MS = 5000;
const TRANSITION_TIME_IN_MS = 1000;

export const Banner: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [next, setNext] = useState(0);

  useEffect(() => {
    if (current === next) {
      setTimeout(() => {
        setNext(getNext);

        setTimeout(() => {
          setCurrent(getNext);
        }, TRANSITION_TIME_IN_MS);
      }, SHOWING_TIME_IN_MS);
    }
  }, [current, next]);

  return (
    <div className="lg:w-auto max-w-full max-h-[80vh] aspect-[252/189] flex justify-center flex-[3] relative">
      <Image
        className="w-[2016px] lg:w-auto max-w-full max-h-[80vh] aspect-[252/189]"
        src={images[current]}
        alt="Imagem aérea da Igreja do Senhor do Bonfim em Salvador, Bahia, feita por Dom Drone"
        priority
        placeholder="blur"
        sizes="(min-width: 1920px) 1344px, (min-width: 1024px) 66vw, (max-width: 1024px) 100vw"
      />
      <Image
        className={`absolute top-0 left-0 ${current !== next ? "opacity-100" : "opacity-0"} transition-opacity transition-duration-1 w-[2016px] lg:w-auto max-w-full max-h-[80vh] aspect-[252/189]`}
        src={images[next]}
        alt="Imagem aérea da Igreja do Senhor do Bonfim em Salvador, Bahia, feita por Dom Drone"
        priority
        placeholder="blur"
        sizes="(min-width: 1920px) 1344px, (min-width: 1024px) 66vw, (max-width: 1024px) 100vw"
      />
    </div>
  );
};
