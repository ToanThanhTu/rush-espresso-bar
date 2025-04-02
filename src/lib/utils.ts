"use client"

import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { ApiResponse } from "@/lib/types"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const sendContactForm = (formData: FormData): void => {
  const apiUrl = "/api/email"

  fetch(apiUrl, {
    method: "POST",
    body: JSON.stringify(formData),
  })
    .then((res) => res.json())
    .then((response: ApiResponse) => {
      alert(response.message)
    })
    .catch((error: Error) => {
      alert(error.message)
    })
}
