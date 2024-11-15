import { inter } from "@/app/ui/fonts";
import Footer from "@/app/ui/components/footer";
import Header from "@/app/ui/components/header";
import ScrollTopButton from "@/app/ui/components/scrollTopButton";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-screen flex flex-col justify-between">
      <Header />
      <div className={`${inter.className} antialiased py-20`}>{children}</div>
      <ScrollTopButton />
      <Footer />
    </div>
  );
}
