import Navbar from "@/components/Navbar";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata = {
  title: "somebody.online",
  description: "Web development",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className="h-screen w-screen flex justify-center items-center"
    >
      <body className="h-1/2 w-full flex flex-col justify-start items-start gap-8 p-8">
        <Navbar />
        <main className="w-full">
          {children} <SpeedInsights />
        </main>
      </body>
    </html>
  );
}
