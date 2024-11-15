'use client';

import { useState, useEffect } from "react";

const getWindowDimensions = () => {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
};

export const useWindowDimensions = () => {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions(getWindowDimensions());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
};

interface ApiResponse {
  message: string;
}

export const sendContactForm = (formData: FormData): void => {
  const apiUrl = "/api/email";

  fetch(apiUrl, {
    method: "POST",
    body: JSON.stringify(formData),
  })
    .then((res) => res.json())
    .then((response: ApiResponse) => {
      alert(response.message);
    })
    .catch((error: Error) => {
      alert(error.message);
    });
};
