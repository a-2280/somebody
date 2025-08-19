import Navbar from "@/components/Navbar";
import "./globals.css";

export const metadata = {
  title: "somebody.online",
  description: "Web development",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className="h-screen w-screen flex justify-center items-center overflow-x-hidden"
    >
      <body className="h-1/2 w-full flex flex-col justify-start items-start gap-8 p-8 md:max-w-3/4">
        <Navbar />
        <main className="w-full">{children}</main>
      </body>
    </html>
  );
}
