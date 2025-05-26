import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar.jsx";
import { ThemeProvider } from "@/components/theme-provider";
import Footer from "@/components/Footer";
import Link from "next/link";
import ScrollToTopButton from "@/components/ScrollToTopButton";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "The German Guy",
  description: "You Decide, We Support",
   openGraph: {
    title: "The German Guy",
    description: "You Decide, We Support",
    url: "https://www.thegermanguy.org/",
    images: [
      {
        url: "https://www.thegermanguy.org/assets/shareImage.png",
        width: 1200,
        height: 630,
        alt: "The German Guy Logo"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "The German Guy",
    description: "You Decide, We Support",
    images: ["https://www.thegermanguy.org/assets/shareImage.png"]
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
          <Footer />
          <div className="bg-white dark:text-black text-center">
            Developed with 💖 by{" "}
            <Link
              href="https://github.com/janak1998"
              target="_blank"
              title="Janak Bohra Github"
            >
              Janak Bohra
            </Link>
          </div>
          <ScrollToTopButton />
        </ThemeProvider>
      </body>
    </html>
  );
}
