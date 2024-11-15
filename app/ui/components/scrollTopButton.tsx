"use client";

import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { useEffect, useState } from "react";

export default function ScrollTopButton() {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0 })}
      className={`fixed sm:bottom-20 sm:right-20 bottom-10 right-10 p-2 rounded-full bg-dark text-white ${
        scroll > 100 ? "block" : "hidden"
      }`}
    >
      <KeyboardArrowUpIcon />
    </button>
  );
}
