import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Selverthing E-commerce",
  description: "Your ultimate e-commerce website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Favicon */}
        <link
          href="https://cdn.jsdelivr.net/npm/remixicon/fonts/remixicon.css"
          rel="stylesheet"
        />
        <link rel="icon" href="/selverthing_logo.svg" type="image/svg+xml" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body className={`${inter.className} bg-gray-50 text-gray-900`}>
        {/* Header / Navigation */}
        <header className="w-full bg-[#633185] text-white p-4">
          <nav className="max-w-7xl mx-auto flex justify-between items-center">
            {/* Logo Image */}
            <div className="flex items-center">
              <img
                src="/selverthing-logo.png"
                alt="Site Logo"
                className="h-10 w-auto mr-4"
              />
              <h1 className="text-2xl font-bold">Selverthing</h1>
            </div>
            <ul className="flex space-x-4">
              <li>
                <a href="/" className="text-white hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="/products" className="text-white hover:underline">
                  Products
                </a>
              </li>
              <li>
                <a href="/about" className="text-white hover:underline">
                  About
                </a>
              </li>
              <li>
                <a href="/contact" className="text-white hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </header>

        {/* Main Content */}
        <main className="max-w-7xl mx-auto p-6">{children}</main>

        {/* Footer */}
        <Footer /> 
      </body>
    </html>
  );
}
