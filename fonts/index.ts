import { Quicksand, Montserrat } from "next/font/google";
import css from 'styled-jsx/css';

export const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
  variable: "--font-quicksand"
});

export const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
  variable: "--font-montserrat"
});
