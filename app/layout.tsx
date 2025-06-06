import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "@mantine/core/styles.css";
import '@mantine/carousel/styles.css';
import { MantineProvider, createTheme } from "@mantine/core";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Patitas Felices",
  description: "Generated by create next app",
  icons: {
    icon: '/favicon.ico',
  },
};

const theme = createTheme({
  breakpoints: {
    xs: "500px",
    sm: "768px",
    md: "992px",
    lg: "1280px",
    xl: "1920px",
  },
  primaryColor: "violet",
  primaryShade: 6,
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <MantineProvider theme={theme}>{children}</MantineProvider>
      </body>
    </html>
  );
}
