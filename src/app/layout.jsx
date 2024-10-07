import "./globals.css";
import { inter } from "./ui/fonts";
import Footer from "./ui/home/footer";
import NavBar from "./ui/home/navbar";

export const metadata = {
  title: {
    template: "%s | Rush Espresso Bar",
    default: "Rush Espresso Bar",
  },
  description:
    "Rush Espresson Bar located at 162 Goulburn St, Surry Hills NSW, serving delicious coffee and food, with great customer service.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased h-screen flex flex-col justify-between`}>
        <div>
          <NavBar />
        </div>
        <div>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
