import { Inter, Archivo_Black, League_Spartan } from "next/font/google";

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const archivo = Archivo_Black({
  subsets: ["latin"],
  variable: "--font-archivo",
  weight: "400",
  display: "swap",
});

export const league = League_Spartan({
  subsets: ["latin"],
  weight: ["400", "900"],
  variable: "--font-league",
  display: "swap",
});
