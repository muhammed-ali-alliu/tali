import '../styles/Hero.css';
import heroImage from '../assets/heroImage.jpg'; // Optional: use any image for now

function Hero() {
  return (
    <section className="hero">
      <div className="hero-text">
        <h1>Smart Software <br />Solutions for<br />Growing Small Businesses</h1>
        <p>
          From custom websites to automation tools,<br />
          we help businesses streamline operations,<br />
          boost performance, and go digital.
        </p>
        <a href="#contact" className="hero-cta">Book a Free Discovery Call</a>
      </div>
      <div className="hero-image">
        <img src={heroImage} alt="Dashboard Illustration" />
      </div>
    </section>
  );
}

export default Hero;
