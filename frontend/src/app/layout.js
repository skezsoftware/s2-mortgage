import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import UpButton from "./components/up_button/upButton";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";

export const metadata = {
  title: "S2 Mortgage",
  description: "Your trusted mortgage partner in San Diego and Los Angeles",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" href="/favicon_2.png" type="image/png" />
      </head>
      <body>
        <Header />
        {children}
        <UpButton />
        <Footer />
      </body>
    </html>
  );
}
