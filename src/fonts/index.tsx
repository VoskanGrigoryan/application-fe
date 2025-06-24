import { Roboto, Montserrat, Caprasimo } from "next/font/google";

export const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  variable: '--font-montserrat',
  display: 'swap',
});

export const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  variable: "--font-roboto",
  display: "swap",
});

export const caprasimo = Caprasimo({
  subsets: ["latin"],
  weight: ["400"], // Caprasimo only has weight 400
  variable: "--font-caprasimo",
  display: "swap",
});
