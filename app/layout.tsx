import "@/app/globals.css";

export const metadata = {
  title: {
    template: "%s | Rush Espresso Bar",
    default: "Rush Espresso Bar",
  },
  description:
    "Rush Espresson Bar located at 162 Goulburn St, Surry Hills NSW, serving delicious coffee and food, with great customer service.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-w-[320px]">{children}</body>
    </html>
  );
}
