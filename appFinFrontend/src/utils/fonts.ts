import { Inter, Archivo_Black, League_Spartan } from "next/font/google";

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
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
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-league",
  display: "swap",
});
