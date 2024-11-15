import { Inter, Work_Sans } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const worksans = Work_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
});

export { inter, worksans };
