import "./Contact.css";
function Contact() {
  return (
    <form id="contact-form">
      <span className="phrase">
        Feel free to reach out by email or directly through this form.
      </span>

      <input
        className="name input1 retroUi"
        type="text"
        name="name"
        placeholder="Name"
        required
      />

      <input
        className="email input2 retroUi"
        type="email"
        name="email"
        placeholder="Email"
        required
      />

      <textarea
        className="textarea retroUi"
        name="message"
        placeholder="What's up?"
        required
      ></textarea>
      <div
        className="g-recaptcha"
        data-sitekey="6LcFr88rAAAAAKaROmIuXpecwwGKo8edoclP0Wyw"
      ></div>

      <button className="submitbtn retroUi" type="submit">
        Send
      </button>
      <p id="status"></p>
    </form>
  );
}
export default Contact;
