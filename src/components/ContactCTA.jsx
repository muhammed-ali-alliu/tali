import '../styles/ContactCTA.css';

function ContactCTA() {
  return (
    <section className="contact-cta" id="contact">
      <h2>Let’s Build Something<br />That Works For You</h2>
      <p>
        Get in touch to discuss your project or email us at<br />
        <a href="mailto:service@talisoftware.net">service@talisoftware.net</a>
      </p>
      <a href="#cta" className="cta-button">Book a Free Discovery Call</a>
    </section>
  );
}

export default ContactCTA;
