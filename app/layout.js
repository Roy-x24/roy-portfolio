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

export const metadata = {
  metadataBase: new URL("https://roy-portfolio-peach.vercel.app"),
  title: "Roy Barrera | Full Stack Developer",
  description:
    "Portafolio de Roy Barrera, desarrollador de software en Panamá: microservicios, APIs con FastAPI y Bun, interfaces con React y Next.js.",
  openGraph: {
    title: "Roy Barrera | Full Stack Developer",
    description:
      "Proyectos, experiencia y habilidades de Roy Barrera, desarrollador de software en Panamá.",
    type: "website",
    locale: "es_PA",
    images: ["/Roy.jpg"],
  },
};

export const viewport = {
  themeColor: "#07060d",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
