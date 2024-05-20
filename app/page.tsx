import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col gap-16 text-zinc-900 text-xl bg-zinc-100 min-h-screen max-w-[1920px]">
      <div className="flex flex-col lg:flex-row w-full items-center">
        <section className="flex flex-col items-center gap-4 whitespace-nowrap p-16 flex-1">
          <Image
            className="rounded-full w-28 h-28"
            src="/profile.jpg"
            width={2252}
            height={2252}
            alt="Foto de Jonatan Farias, dono da Dom Drone, mostrando o seu drone de trabalho."
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
                <Image
                  className="w-5 h-5"
                  src="/instagram.svg"
                  width={512}
                  height={512}
                  alt="Acessar o Instagram da Dom Drone"
                />
              </a>
            </li>
            <li>
              <a href="https://wa.me/5571996181993" target="_blank">
                <Image
                  className="w-5 h-5"
                  src="/whatsapp.svg"
                  width={512}
                  height={512}
                  alt="Contato via WhatsApp com Dom Drone"
                />
              </a>
            </li>
            <li>
              <a href="https://youtube.com/@domdrone" target="_blank">
                <Image
                  className="w-5 h-5"
                  src="/youtube.svg"
                  width={512}
                  height={512}
                  alt="Acessar o Youtube da Dom Drone"
                />
              </a>
            </li>
          </ul>
        </section>
        <Image
          className="w-full max-h-[80vh]"
          src="/banner-0.jpg"
          width={8064}
          height={6048}
          alt="Imagem aérea da Igreja do Senhor do Bonfim em Salvador, Bahia, feita por Dom Drone"
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
