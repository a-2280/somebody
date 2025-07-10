import "./globals.css";

export const metadata = {
  title: "somebody",
  description: "somebody is a web developer and illustrator.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
