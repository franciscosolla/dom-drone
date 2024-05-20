import { Banner } from "./ui/Banner";
import { Profile } from "./ui/Profile";

export default function Home() {
  return (
    <main className="flex flex-col gap-16 text-zinc-900 text-xl bg-zinc-100 min-h-screen max-w-[1920px]">
      <div className="flex flex-col lg:flex-row w-full items-center">
        <Profile />
        <Banner />
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
