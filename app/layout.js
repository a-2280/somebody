import "./globals.css";

export const metadata = {
  title: "somebody.online",
  description: "Web development",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
