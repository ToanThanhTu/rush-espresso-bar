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
    <main className="grid grid-cols-3 w-fit m-auto gap-x-24">
      <ul className="list-disc text-darkGray space-y-2">
        {requests.map((request, index) => (
          <li key={index}>{request}</li>
        ))}
      </ul>
      <ContactForm />
    </main>
  );
}
