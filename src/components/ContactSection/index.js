import React from "react";
import "./styles.css";

function ContactSection() {
  return (
    <div id="contact-section">
      <section id="left-section">
        <h3>There is only now.</h3>
        <p>
          All sessions are offered <span>online</span> or <span>In-person</span>
        </p>
        <h5>
          Online: <br />
          Zoom or Skype
        </h5>
        <h5>
          OFFICE LOCATION: <br />
          2001 S. BARRINGTON AVE <br />
          SUITE: 312
        </h5>
        <p className="yellow-text">All appointments are booked in advance.</p>
        <p>
          Please use contact form for questions.
          <br />
          All forms go to email: <br />
          UnlockMyChaos@gmail.com
        </p>
      </section>
      <section id="right-section">
        <h3>More coming soon, Keep in touch</h3>
        <h3>Subscribe</h3>
        <p className="yellow-text">We never share or spam your information</p>
        <form>
          <input placeholder="Name:"></input>
          <input placeholder="Phone:"></input>
          <input placeholder="Email:"></input>
          <input placeholder="Birthday:"></input>
          <button>Send</button>
        </form>
      </section>
    </div>
  );
}

export default ContactSection;
