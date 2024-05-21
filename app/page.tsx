import Image from "next/image";
import { Banner } from "./ui/Banner";
import { Profile } from "./ui/Profile";
import hotelaria from "../public/hotelaria.jpeg";
import imobiliario from "../public/imobiliario.jpg";
import { ContactForm } from "./ui/ContactForm";
import construcao from "../public/construcao.jpg";
import evento from "../public/evento.jpg";
import inspecao from "../public/inspecao.jpg";
import turismo from "../public/turismo.jpg";

export default function Home() {
  return (
    <main className="flex flex-col gap-8 text-zinc-900 text-xl bg-zinc-100 min-h-screen max-w-[1920px]">
      <div className="flex flex-col lg:flex-row w-full items-center">
        <Profile />
        <Banner />
      </div>
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
              />
            </div>
            <h2>Turismo</h2>
          </li>
        </ul>
      </section>
      <div className="flex flex-col gap-8 lg:flex-row">
        <section className="flex flex-col gap-6 px-4 flex-1">
          <h1 className="font-bold text-2xl">Sobre mim</h1>
          <p className="text-justify text-lg">
            Me chamo Jonatan, dono da Dom Drone, empresa especializada em
            serviços aéreos à 3 anos no mercado profissional de Salvador e
            região metropolitana. Oferecemos soluções inovadoras em diversas
            aéreas para toda a Bahia, entregando resultados de alta qualidade
            que atendam às necessidades específicas da sua empresa, sempre com
            segurança e eficiência.
          </p>
        </section>
        <section className="flex-[2]">
          <ContactForm />
        </section>
      </div>
    </main>
  );
}
