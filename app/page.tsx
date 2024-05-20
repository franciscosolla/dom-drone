import Image from "next/image";
import banner0 from "../public/banner-0.jpg";
import profile from "../public/profile.jpg";
import YoutubeSVG from "./ui/YoutubeSVG";
import WhatsAppSVG from "./ui/WhatsAppSVG";
import InstagramSVG from "./ui/InstagramSVG";

export default function Home() {
  return (
    <main className="flex flex-col gap-16 text-zinc-900 text-xl bg-zinc-100 min-h-screen max-w-[1920px]">
      <div className="flex flex-col lg:flex-row w-full items-center">
        <section className="flex flex-col items-center gap-4 whitespace-nowrap p-16 flex-1">
          <Image
            className="rounded-full w-28 h-28"
            src={profile}
            width={224}
            height={224}
            alt="Foto de Jonatan Farias, dono da Dom Drone, mostrando o seu drone de trabalho."
            priority
            placeholder="blur"
          />
          <div className="flex flex-col items-center">
            <h1 className="font-bold text-3xl">Jonatan Farias</h1>
            <p className="text-justify text-lg italic">Piloto da Dom Drone</p>
          </div>
          <ul className="flex gap-8">
            <li>
              <a
                href="https://www.instagram.com/domdrone/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <InstagramSVG
                  className="w-5 h-5"
                  width={40}
                  height={40}
                  alt="Acessar o Instagram da Dom Drone"
                />
              </a>
            </li>
            <li>
              <a href="https://wa.me/5571996181993" target="_blank">
                <WhatsAppSVG
                  className="w-5 h-5"
                  width={40}
                  height={40}
                  alt="Contato via WhatsApp com Dom Drone"
                />
              </a>
            </li>
            <li>
              <a href="https://youtube.com/@domdrone" target="_blank">
                <YoutubeSVG
                  className="w-5 h-5"
                  width={40}
                  height={40}
                  alt="Acessar o Youtube da Dom Drone"
                />
              </a>
            </li>
          </ul>
        </section>
        <Image
          className="w-[2016px] lg:h-[1512px] max-w-full max-h-[80vh] aspect-[252/189]"
          src={banner0}
          width={2016}
          height={1512}
          alt="Imagem aérea da Igreja do Senhor do Bonfim em Salvador, Bahia, feita por Dom Drone"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 80vw"
          priority
          placeholder="blur"
        />
      </div>
      <div className="flex flex-col lg:flex-row gap-16 lg:px-16">
        <section className="flex flex-col gap-6 px-4 flex-1">
          <h2 className="font-bold text-2xl">Serviços</h2>
          <ul className="grid grid-cols-2 gap-4 gap-x-8 text-left italic">
            <li>Hotelaria</li>
            <li>Mercado Imobiliário</li>
            <li>Inspeção Aérea</li>
            <li>Construção Civil</li>
            <li>Cobertura de Eventos</li>
            <li>Turismo</li>
          </ul>
        </section>
        <section className="flex flex-col gap-6 px-4 flex-1">
          <h2 className="font-bold text-2xl">Sobre mim</h2>
          <p className="text-justify text-lg">
            Me chamo Jonatan, dono da Dom Drone, empresa especializada em
            serviços aéreos à 3 anos no mercado profissional. Oferecemos
            soluções inovadoras para diversas áreas, entregando resultados de
            alta qualidade que atendam às necessidades específicas da sua
            empresa, sempre com segurança e eficiência.
          </p>
        </section>
      </div>
    </main>
  );
}
