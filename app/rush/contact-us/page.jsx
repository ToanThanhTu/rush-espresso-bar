import ContactForm from "@/app/ui/contact-us/contact-form";

export default function Page() {
  const requests = [
    "E-mail us at info@rushespressobar.com",
    "Follow us on Instagram @rusespressobar",
    "Give us a call (+61) 421 916 354",
    "Say hello",
    "Give us feedback",
    "Ask us a question",
    "Place an order",
  ];

  return (
    <main className="m-auto w-fit space-y-6 px-6">
      <h1 className="text-3xl font-bold">Contact Us</h1>

      <div className="md:grid md:grid-cols-3 md:gap-x-20 md:space-y-0 m-auto space-y-6">
        <ul className="list-disc list-inside text-darkGray space-y-2">
          {requests.map((request, index) => (
            <li key={index}>{request}</li>
          ))}
        </ul>
        <ContactForm />
      </div>
    </main>
  );
}
