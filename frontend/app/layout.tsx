import "./globals.css";
import LandingPage from "./LandingPage/page";

export default function RootLayout({}) {
  return (
    <html lang="en">
      <body className="h-[100vh]">
        <LandingPage />
      </body>
    </html>
  );
}
