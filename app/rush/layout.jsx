import { inter } from "@/app/ui/fonts";
import Footer from "@/app/ui/rush/footer";
import Header from "@/app/ui/rush/header";
import ScrollTopButton from "@/app/ui/scrollTopButton";

export default function Layout({ children }) {
  return (
    <div className="h-screen flex flex-col justify-between">
      <Header />
      <div className={`${inter.className} antialiased py-20`}>{children}</div>
      <ScrollTopButton />
      <Footer />
    </div>
  );
}
