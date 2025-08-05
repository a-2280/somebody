import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "somebody",
  description: "somebody is a web developer and illustrator.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <div className="w-screen h-screen flex justify-center items-center">
          <div className="w-1/2 h-1/2 flex flex-col gap-8">
            <Navbar />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
