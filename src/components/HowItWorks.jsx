// src/components/HowItWorks.js
import '../styles/HowItWorks.css';

function HowItWorks() {
  return (
    <section className="how-it-works" id="process">
      <h2>How It Works</h2>
      <div className="steps-container">
        <div className="step">
          <div className="step-icon">💬</div>
          <h3>Discovery Call</h3>
          <p>We discuss your needs and goals</p>
        </div>
        <div className="step">
          <div className="step-icon">📝</div>
          <h3>Planning & Proposal</h3>
          <p>We create a tailored plan and quote</p>
        </div>
        <div className="step">
          <div className="step-icon">🚀</div>
          <h3>Build & Support</h3>
          <p>We develop, implement, and assist</p>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
