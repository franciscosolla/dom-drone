import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: "Dom Drone - Serviços de Filmagem e Inspeção Aérea Profissional",
  description:
    "Dom Drone oferece serviços de filmagem e inspeção aérea para diversas áreas em Salvador e região, Bahia, incluindo hotelaria, mercado imobiliário, construção civil, eventos e turismo. Contate-nos para soluções inovadoras e de alta qualidade.",
  authors: [
    { name: "Francisco Solla", url: "https://solla.dev" },
    { name: "Jonatan Farias", url: "https://www.instagram.com/domdrone/" },
  ],
  keywords:
    "Dom Drone, drone, Salvador, Bahia, filmagem aérea, filmagem, inspeção aérea, serviços de drones, aérea, hotelaria, mercado imobiliário, construção civil, cobertura de eventos, turismo, eventos",
  creator: "Francisco Solla (solla.dev)",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://domdrone.com.br",
    title: "Dom Drone - Serviços de Filmagem e Inspeção Aérea Profissional",
    description:
      "Dom Drone oferece serviços de filmagem e inspeção aérea para diversas áreas em Salvador e região, Bahia. Contate-nos para soluções inovadoras e de alta qualidade.",
    siteName: "Dom Drone",
    images: [
      {
        url: "https://domdrone.com.br/logo.webp",
        width: 176,
        height: 176,
        alt: "Dom Drone - Serviços de Filmagem e Inspeção Aérea Profissional - Logo",
      },
      {
        url: "https://domdrone.com.br/profile.webp",
        width: 224,
        height: 224,
        alt: "Dom Drone - Serviços de Filmagem e Inspeção Aérea Profissional - Profile",
      },
      {
        url: "https://domdrone.com.br/banner-0.webp",
        width: 1344,
        height: 1008,
        alt: "Dom Drone - Serviços de Filmagem e Inspeção Aérea Profissional - Banner",
      },
      {
        url: "https://domdrone.com.br/banner-1.webp",
        width: 1344,
        height: 1008,
        alt: "Dom Drone - Serviços de Filmagem e Inspeção Aérea Profissional - Banner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@franciscosolla",
    title: "Dom Drone - Serviços de Filmagem e Inspeção Aérea Profissional",
    description:
      "Dom Drone oferece serviços de filmagem e inspeção aérea para diversas áreas em Salvador e região, Bahia. Contate-nos para soluções inovadoras e de alta qualidade.",
    images: [
      {
        type: "image/jpeg",
        url: "https://domdrone.com.br/logo.webp",
        width: 176,
        height: 176,
        alt: "Dom Drone - Serviços de Filmagem e Inspeção Aérea Profissional - Logo",
      },
      {
        type: "image/jpeg",
        url: "https://domdrone.com.br/profile.webp",
        width: 224,
        height: 224,
        alt: "Dom Drone - Serviços de Filmagem e Inspeção Aérea Profissional - Profile",
      },
      {
        type: "image/jpeg",
        url: "https://domdrone.com.br/banner-0.webp",
        width: 1344,
        height: 1008,
        alt: "Dom Drone - Serviços de Filmagem e Inspeção Aérea Profissional - Banner",
      },
      {
        type: "image/jpeg",
        url: "https://domdrone.com.br/banner-1.webp",
        width: 1344,
        height: 1008,
        alt: "Dom Drone - Serviços de Filmagem e Inspeção Aérea Profissional - Banner",
      },
    ],
  },
  alternates: {
    canonical: "https://domdrone.com.br",
  },
  other: {
    "geo.position": "-12.971442, -38.501392",
    "geo.region": "BR-BA",
    "geo.placename": "Salvador, Bahia, Brasil",
    ICBM: "-12.971442, -38.501392",
    "DC.title":
      "Dom Drone - Serviços de Filmagem e Inspeção Aérea Profissional",
    "DC.description":
      "Dom Drone oferece serviços de filmagem e inspeção aérea para diversas áreas em Salvador e região, Bahia. Contate-nos para soluções inovadoras e de alta qualidade.",
    "DC.coverage": "Salvador, Bahia, Brasil",
    "DC.subject":
      "Dom Drone, drone, Salvador, Bahia, filmagem aérea, filmagem, inspeção aérea, serviços de drones, aérea, hotelaria, mercado imobiliário, construção civil, cobertura de eventos, turismo, eventos",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Dom Drone",
  url: "https://domdrone.com.br",
  logo: "https://domdrone.com.br/logo.webp",
  image: "https://domdrone.com.br/profile.webp",
  telephone: "‪+55 71 99618‑1993‬",
  email: "contato@domdrone.com.br",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Salvador",
    addressRegion: "BA",
    addressCountry: "BR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -12.9714,
    longitude: -38.5014,
  },
  description:
    "Dom Drone oferece serviços de filmagem e inspeção aérea para diversas áreas em Salvador e região, Bahia, incluindo hotelaria, mercado imobiliário, construção civil, eventos e turismo. Contate-nos para soluções inovadoras e de alta qualidade.",
  sameAs: [
    "https://www.instagram.com/domdrone",
    "https://youtube.com/@domdrone",
    "https://www.facebook.com/people/Dom-Drone/61551731859342/?mibextid=ZbWKwL",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="bg-zinc-100 flex flex-col items-center">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
