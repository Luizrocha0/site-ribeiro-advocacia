import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



export const metadata: Metadata = {
  title: "Dr. Wellington Ribeiro | Advocacia com atendimento em Olinda/PE e Recife/PE",
  description: "Advogado em Olinda e Recife atuando com Direito Médico, Direitos de Autistas e PCDs, Civil e Previdenciário. Atendimento direto, humanizado e focado em resultados.",
  keywords: "advogado em olinda, advogado em recife, advogado direito médico, advogado plano de saúde, advogado autismo, advogado pcd, previdenciário, pernambuco",
  openGraph: {
    title: "Dr. Wellington Ribeiro | Advocacia",
    description: "Defesa jurídica especializada, estratégica e humanizada em Olinda e Recife.",
    type: "website",
    locale: "pt_BR",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
