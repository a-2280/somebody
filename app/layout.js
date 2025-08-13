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
      className="h-screen w-screen flex justify-center items-center"
    >
      <body className="flex flex-col gap-14 p-8 h-1/2 w-full">
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
