// src/components/Services.js
import '../styles/Services.css';

function Services() {
  return (
    <section className="services-section" id="services">
      <h2>What We Can Help You Build</h2>
      <div className="services-cards">
        <div className="service-card">
          <h3>Business Websites</h3>
          <p>We discuss your needs and goals</p>
        </div>
        <div className="service-card">
          <h3>Internal Tools & Dashboards</h3>
          <p>We create a tailored plan and quote</p>
        </div>
        <div className="service-card">
          <h3>Process Automation</h3>
          <p>We develop, implement, and assist</p>
        </div>
      </div>
    </section>
  );
}

export default Services;
