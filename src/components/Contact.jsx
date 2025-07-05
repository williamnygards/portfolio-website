import styles from "./ContactStyles.module.css";

const Contact = () => {
  return (
    <section id="contact" className={styles.container}>
      <h1 className="sectionTitle">Contact Me</h1>
      <form>
        <div className="formGroup">
          <label htmlFor="name" hidden>
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your Name"
            required
          ></input>
        </div>
        <div className="formGroup">
          <label htmlFor="email" hidden>
            Name
          </label>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="Your email"
            required
          ></input>
        </div>
        <div className="formGroup">
          <label htmlFor="message" hidden>
            Message
          </label>
          <textarea
            name="message"
            id="message"
            placeholder="Message"
            required
          ></textarea>
        </div>
        <input className="hover btn" type="submit" value="Submit"/>
      </form>
    </section>
  );
};

export default Contact;
