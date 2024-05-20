import type { Metadata } from "next";
import "./globals.css";

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
        url: "https://domdrone.com.br/logo.jpeg",
        width: 176,
        height: 176,
        alt: "Dom Drone - Serviços de Filmagem e Inspeção Aérea Profissional - Logo",
      },
      {
        url: "https://domdrone.com.br/profile.jpg",
        width: 2252,
        height: 2252,
        alt: "Dom Drone - Serviços de Filmagem e Inspeção Aérea Profissional - Profile",
      },
      {
        url: "https://domdrone.com.br/banner.jpg",
        width: 8064,
        height: 6048,
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
        url: "https://domdrone.com.br/logo.jpeg",
        width: 176,
        height: 176,
        alt: "Dom Drone - Serviços de Filmagem e Inspeção Aérea Profissional - Logo",
      },
      {
        type: "image/jpeg",
        url: "https://domdrone.com.br/profile.jpg",
        width: 2252,
        height: 2252,
        alt: "Dom Drone - Serviços de Filmagem e Inspeção Aérea Profissional - Profile",
      },
      {
        type: "image/jpeg",
        url: "https://domdrone.com.br/banner.jpg",
        width: 8064,
        height: 6048,
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
  logo: "https://domdrone.com.br/logo.jpeg",
  telephone: "+55 71 99293-3755",
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <body>{children}</body>
    </html>
  );
}
