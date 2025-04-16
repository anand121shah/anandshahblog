import { Inter } from "next/font/google";
import "./globals.css";
import type { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Anand Shah",
  description: "Personal website and blog of Anand Shah - Data Scientist, Photographer, and Lifelong Student",
  openGraph: {
    title: "Anand Shah",
    description: "Personal website and blog of Anand Shah - Data Scientist, Photographer, and Lifelong Student",
    url: "https://anandshah.blog",
    siteName: "Anand Shah",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Anand Shah",
    description: "Personal website and blog of Anand Shah - Data Scientist, Photographer, and Lifelong Student",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
