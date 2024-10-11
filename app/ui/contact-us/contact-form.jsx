"use client";

import { useForm } from "react-hook-form";
import { sendContactForm } from "@/app/lib/utils";

export default function ContactForm() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (formData) => {
    sendContactForm(formData);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="col-span-2 flex flex-col gap-y-4 justify-center"
    >
      <div className="grid grid-cols-2 gap-6 text-darkGray">
        <div className="flex flex-col gap-y-2">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            required
            {...register("firstName", { required: true })}
          />
        </div>
        <div className="flex flex-col gap-y-2">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            required
            {...register("lastName", { required: true })}
          />
        </div>
      </div>

      <div className="flex flex-col gap-y-2 text-darkGray">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          required
          {...register("email", { required: true })}
        />
      </div>

      <div className="flex flex-col gap-y-2 text-darkGray">
        <label htmlFor="subject">Subject</label>
        <input
          type="text"
          name="subject"
          id="subject"
          required
          {...register("subject", { required: true })}
        />
      </div>

      <div className="flex flex-col gap-y-2 text-darkGray">
        <label htmlFor="message">Message</label>
        <textarea
          type="textarea"
          name="message"
          id="message"
          required
          {...register("message", { required: true })}
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
