import React from "react";
import Image from "next/image";
import hotelaria from "@/public/hotelaria.webp";
import imobiliario from "@/public/imobiliario.webp";
import construcao from "@/public/construcao.webp";
import evento from "@/public/evento.webp";
import inspecao from "@/public/inspecao.webp";
import turismo from "@/public/turismo.webp";

export const Services: React.FC = () => (
  <section className="flex flex-col gap-6 text-center">
    <h1 className="font-bold text-2xl px-4">Serviços</h1>
    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-y-3 text-left italic">
      <li className="relative text-center flex flex-col gap-1">
        <div className="aspect-square relative">
          <Image
            src={hotelaria}
            alt="Foto aérea de um hotel pousada"
            fill
            objectFit="cover"
            placeholder="blur"
            sizes="100vw, (min-width: 1024px) 50vw"
          />
        </div>
        <h2>Hotelaria</h2>
      </li>
      <li className="relative text-center flex flex-col gap-1">
        <div className="aspect-square relative">
          <Image
            src={imobiliario}
            alt="Foto aérea de uma casa de veraneio em estagio final de construção"
            fill
            objectFit="cover"
            placeholder="blur"
            sizes="100vw, (min-width: 1024px) 50vw"
          />
        </div>
        <h2>Mercado Imobiliário</h2>
      </li>
      <li className="relative text-center flex flex-col gap-1">
        <div className="aspect-square relative">
          <Image
            src={inspecao}
            alt="Foto aérea de um hotel pousada"
            fill
            objectFit="cover"
            placeholder="blur"
            sizes="100vw, (min-width: 1024px) 50vw"
          />
        </div>
        <h2>Inspeção Aérea</h2>
      </li>
      <li className="relative text-center flex flex-col gap-1">
        <div className="aspect-square relative">
          <Image
            src={construcao}
            alt="Foto aérea de um hotel pousada"
            fill
            objectFit="cover"
            placeholder="blur"
            sizes="100vw, (min-width: 1024px) 50vw"
          />
        </div>
        <h2>Construção Civil</h2>
      </li>
      <li className="relative text-center flex flex-col gap-1">
        <div className="aspect-square relative">
          <Image
            src={evento}
            alt="Foto aérea de um hotel pousada"
            fill
            objectFit="cover"
            placeholder="blur"
            sizes="100vw, (min-width: 1024px) 50vw"
          />
        </div>
        <h2>Cobertura de Eventos</h2>
      </li>
      <li className="relative text-center flex flex-col gap-1">
        <div className="aspect-square relative">
          <Image
            src={turismo}
            alt="Foto aérea de um hotel pousada"
            fill
            objectFit="cover"
            placeholder="blur"
            sizes="100vw, (min-width: 1024px) 50vw"
          />
        </div>
        <h2>Turismo</h2>
      </li>
    </ul>
  </section>
);
