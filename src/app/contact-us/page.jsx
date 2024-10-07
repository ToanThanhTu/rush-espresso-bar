import ContactForm from "../ui/contact-us/contact-form";

export default function ContactUs() {
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
    <div className="grid grid-cols-3 w-fit m-auto gap-x-44">
      <ul className="list-disc">
        {requests.map((request, index) => (
          <li key={index}>{request}</li>
        ))}
      </ul>
      <ContactForm />
    </div>
  );
}
