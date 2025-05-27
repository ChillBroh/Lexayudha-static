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
  title: "LexAyudha - AI-based Personalized Rehabilitation for Dyslexia and Dyscalculia Adolescents​",
  description: "Welcome to our innovative platform specializing in AI-based Personalized Rehabilitation for Dyslexia and Dyscalculia Adolescents. Discover tailored solutions designed to empower young learners with cutting-edge technologies, fostering confidence and academic success. Our program combines advanced AI algorithms with expert insights to deliver personalized support, ensuring every adolescent receives targeted assistance to overcome challenges in reading, numeracy, and cognitive skills. Join us in transforming education with adaptive learning experiences that inspire growth and achievement",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-zinc-950 text-zinc-100 selection:bg-primary-500 selection:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
