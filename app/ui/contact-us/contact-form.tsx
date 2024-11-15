"use client";

import { useForm } from "react-hook-form";
import { sendContactForm } from "@/app/lib/utils";
import { ContactFormData } from "@/app/lib/definitions";

export default function ContactForm() {
  const { register, handleSubmit } = useForm<ContactFormData>();

  const onSubmit = (formData: ContactFormData) => {
    const formDataObj = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      formDataObj.append(key, value);
    });
    sendContactForm(formDataObj);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="col-span-2 flex flex-col gap-y-4 justify-center"
    >
      <div className="grid grid-cols-2 gap-6 text-darkGray">
        <div className="flex flex-col gap-y-2">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            required
            {...register("name", { required: true })}
          />
        </div>
        <div className="flex flex-col gap-y-2 text-darkGray">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            required
            {...register("email", { required: true })}
          />
        </div>
      </div>

      <div className="flex flex-col gap-y-2 text-darkGray">
        <label htmlFor="phone">Phone</label>
        <input
          type="tel"
          id="phone"
          {...register("phone")}
        />
      </div>

      <div className="flex flex-col gap-y-2 text-darkGray">
        <label htmlFor="subject">Subject</label>
        <input
          type="text"
          id="subject"
          required
          {...register("subject", { required: true })}
        />
      </div>

      <div className="flex flex-col gap-y-2 text-darkGray">
        <label htmlFor="enquiry">Enquiry</label>
        <textarea
          id="message"
          required
          {...register("enquiry", { required: true })}
        />
      </div>

      <div>
        <button
          type="submit"
          className="border-2 border-dark px-4 py-2 hover:bg-dark hover:text-light"
        >
          SUBMIT
        </button>
      </div>
    </form>
  );
}
