import "./globals.css";
import CustomCursor from "../components/ui/CustomCursor";
import SmoothScroll from "../components/ui/SmoothScroll";
import { Inter, Space_Grotesk } from "next/font/google";

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-sans',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: '--font-display',
});

export const metadata = {
  title: "Ankit Kuniyal",
  description: "Personal Portfolio ",
  icons: {
    icon: "/vite.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}>
      <body>
        <CustomCursor />
        <SmoothScroll>
          <div className="min-h-screen bg-background text-white selection:bg-accent/30 selection:text-white">
            {children}
          </div>
        </SmoothScroll>
      </body>
    </html>
  );
}
