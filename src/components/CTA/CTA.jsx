import "./CTA.css";

function CTA() {
  return (
    <section className="cta" id="contact">
      <div className="cta-container">

        <div className="cta-header">
          <div className="cta-title-block">
            <div className="cta-eyebrow">
              <span></span>
              <p>READY WHEN YOU ARE</p>
            </div>

            <h2>
              Move what matters.
              <br />
              <em>Let OTEX handle the journey.</em>
            </h2>
          </div>

          <div className="cta-header-side">
            <span className="cta-side-label">
              OTEX EXPRESS
            </span>

            <span className="cta-side-subtitle">
              HAULAGE & LOGISTICS
            </span>
          </div>
        </div>

        <div className="cta-content">
          <p>
            Whether you're moving goods for your business or sending
            a load to its destination, start with a shipment request.
          </p>

          <a href="/book-shipment" className="cta-button">
            REQUEST A SHIPMENT
            <span>→</span>
          </a>
        </div>

        <div className="cta-footer-line">
          <span>OTEX EXPRESS</span>
          <span>HAULAGE & LOGISTICS</span>
        </div>

      </div>
    </section>
  );
}

export default CTA;