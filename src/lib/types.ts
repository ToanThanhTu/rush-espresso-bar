import { z } from "zod"

export type ContactFormData = {
  name: string
  email: string
  phone: string
  subject: string
  enquiry: string
}

export type EmailBody = {
  firstName: string
  lastName: string
  email: string
  subject: string
  message: string
}

export type MailOptions = {
  from: string
  to: string | undefined
  subject: string
  cc: string
  text: string
}

export interface ApiResponse {
  message: string
}

export enum MenuType {
  FOOD = "Food",
  BEVERAGE = "Beverage",
}

export enum FoodCategory {
  LUNCH = "All Day Lunch",
  FOOD = "Food Menu",
}

export enum BeverageCategory {
  BEVERAGES = "Beverages",
  DESSERTS = "Desserts",
}

export type FoodMenu = {
  [key in FoodCategory]: SubMenu[]
}

export type BeverageMenu = {
  [key in BeverageCategory]: SubMenu[]
}

export interface SubMenu {
  header: string
  description?: string
  items: MenuItem[]
}

export interface MenuItem {
  name: string
  description?: string
  addons?: string
  price: string
}

export const ContactFormSchema = z.object({
  name: z.string().min(2, { message: "Please enter at least 2 characters" }),
  email: z.string().email({ message: "Invalid email address" }),
  phone: z.string().optional(),
  subject: z.string().min(1, { message: "Subject is required" }),
  enquiry: z.string().min(1, { message: "Enquiry is required" }),
})

export type MediaQuery = "sm" | "md" | "lg" | "xl" | "2xl"
