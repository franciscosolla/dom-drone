import { Banner } from "@/app/ui/Banner";
import { Profile } from "@/app/ui/Profile";
import { ContactForm } from "@/app/ui/ContactForm";
import { Services } from "@/app/ui/Services";
import { About } from "@/app/ui/About";

export default function Home() {
  return (
    <main className="flex flex-col gap-8 text-zinc-900 text-xl bg-zinc-100 min-h-screen max-w-[1280px]">
      <div className="flex flex-col lg:flex-row w-full items-center">
        <Profile />
        <Banner />
      </div>
      <Services />
      <div className="flex flex-col gap-8 lg:flex-row">
        <About />
        <section className="flex-[2]">
          <ContactForm />
        </section>
      </div>
    </main>
  );
}
