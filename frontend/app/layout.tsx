import "./globals.css";
import { Home } from "./LandingPage/page";

export default function RootLayout({}) {
  return (
    <html lang="en">
      <body className="h-[100vh]">
        <Home />
      </body>
    </html>
  );
}
