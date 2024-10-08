export default function ContactForm() {
  return (
    <form action="" className="col-span-2 flex flex-col gap-y-4 justify-center">
      <div className="grid grid-cols-2 gap-6 text-darkGray">
        <div className="flex flex-col gap-y-2">
          <label htmlFor="firstname">First Name</label>
          <input type="text" name="firstname" id="firstname" />
        </div>
        <div className="flex flex-col gap-y-2">
          <label htmlFor="lastname">Last Name</label>
          <input type="text" name="lastname" id="lastname" />
        </div>
      </div>

      <div className="flex flex-col gap-y-2 text-darkGray">
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" />
      </div>

      <div className="flex flex-col gap-y-2 text-darkGray">
        <label htmlFor="subject">Subject</label>
        <input type="text" name="subject" id="subject" />
      </div>

      <div className="flex flex-col gap-y-2 text-darkGray">
        <label htmlFor="message">Message</label>
        <textarea type="textarea" name="message" id="message" />
      </div>

      <div>
        <button className="border-2 border-dark px-4 py-2">SUBMIT</button>
      </div>
    </form>
  );
}
