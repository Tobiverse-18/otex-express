import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-main">

          <div className="footer-brand">
            <div className="footer-logo">
              OTEX EXPRESS
            </div>

            <div className="footer-tagline">
              HAULAGE & LOGISTICS
            </div>

            <p>
              Moving goods. Connecting destinations.
            </p>
          </div>

          <div className="footer-column">
            <span className="footer-heading">NAVIGATION</span>

            <a href="/">Home</a>
            <a href="#services">Services</a>
            <a href="#about">About</a>
            <a href="#booking">Book a Shipment</a>
            <a href="/track">Track Shipment</a>
          </div>

          <div className="footer-column">
            <span className="footer-heading">CONTACT</span>

            <a href="tel:08163567358">
              0816 356 7358
            </a>

            <a href="tel:08038251084">
              0803 825 1084
            </a>

            <a href="mailto:otexpresshaulage@gmail.com">
              otexexpresshaulage@gmail.com
            </a>
          </div>

        </div>

        <div className="footer-location">
          <div>
            <span className="footer-heading">OPERATIONS OFFICE</span>
            <p>
              Alaba International Market,
              <br />
              behind St. Patrick's Catholic Church,
              <br />
              Alaba, Ojo, Lagos.
            </p>
          </div>

          <div>
            <span className="footer-heading">HEAD OFFICE</span>
            <p>
              12–14, Adetiba Street,
              <br />
              Off Abeokuta Expressway,
              <br />
              Ajegunle Tollgate, Sango, Ogun State.
            </p>
          </div>
        </div>

        <div className="footer-legal">
          <div className="footer-copyright">
            © {new Date().getFullYear()} OTEX EXPRESS. All rights reserved.
          </div>

          <div className="footer-legal-links">
            <a href="/privacy-policy">Privacy Policy</a>
            <a href="/terms">Terms & Conditions</a>
            <a href="/cookie-policy">Cookie Policy</a>
          </div>
        </div>

        <div className="footer-bottom">
          <span>OTEX EXPRESS</span>

          <span>
            LAGOS · UYO · CALABAR · PORT HARCOURT · ONITSHA
          </span>

          <span>HAULAGE & LOGISTICS</span>
        </div>

      </div>
    </footer>
  );
}

export default Footer;