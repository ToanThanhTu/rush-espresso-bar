"use client"

import { Input } from "@/components/shadcn/input"
import { ContactFormSchema } from "@/lib/types"
import { cn } from "@/lib/utils"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/shadcn/form"
import { Textarea } from "@/components/shadcn/textarea"
import { Button } from "@/components/shadcn/button"
import { motion } from "motion/react"

export default function ContactForm() {
  const contactForm = useForm<z.infer<typeof ContactFormSchema>>({
    resolver: zodResolver(ContactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      enquiry: "",
    },
  })

  function onSubmit(values: z.infer<typeof ContactFormSchema>) {
    console.log("Form submitted", values)
    contactForm.reset()
  }

  return (
    <Form {...contactForm}>
      <motion.form
        onSubmit={contactForm.handleSubmit(onSubmit)}
        className={cn("flex flex-col gap-4 p-4 border rounded-xl", "md:col-span-2")}
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <h2 className="text-2xl font-semibold">Send us a message</h2>

        <FormField
          control={contactForm.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input type="text" placeholder="John Doe" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={contactForm.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" placeholder="john.doe@email.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={contactForm.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone</FormLabel>
              <FormControl>
                <Input type="tel" placeholder="0401111111" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={contactForm.control}
          name="subject"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Subject</FormLabel>
              <FormControl>
                <Input type="text" placeholder="The subject of you equiry..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={contactForm.control}
          name="enquiry"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Enquiry</FormLabel>
              <FormControl>
                <Textarea placeholder="What is you enquiry?" {...field} className="min-h-40" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit">Submit</Button>
      </motion.form>
    </Form>
  )
}
