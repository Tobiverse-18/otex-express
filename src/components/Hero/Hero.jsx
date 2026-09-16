import { useEffect, useState } from "react";
import "./Hero.css";

const heroImages = [
  "https://oyoroadtaxes.com/images/landing/truck_on_road.png",

  "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=2000&q=85",

  "https://www.coopitalianfoodna.com/web/image/51621-c76a3070/Warehouse.png",
];

function Hero() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((previous) => (previous + 1) % heroImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero" id="home">
      <div className="hero-backgrounds">
        {heroImages.map((image, index) => (
          <div
            key={image}
            className={`hero-background ${
              index === currentImage ? "active" : ""
            }`}
            style={{
              backgroundImage: `url("${image}")`,
            }}
          />
        ))}
      </div>

      <div className="hero-overlay"></div>

      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-eyebrow">
            <span></span>
            OTEX EXPRESS · HAULAGE & LOGISTICS
          </div>

          <h1>
            Moving goods.
            <br />
            <em>Connecting destinations.</em>
          </h1>

          <p className="hero-description">
            Reliable haulage and logistics services connecting businesses
            and customers across key destinations in Nigeria.
          </p>

          <div className="hero-actions">
            <a href="#book" className="hero-primary-btn">
              Book a Shipment
              <span>↗</span>
            </a>

            <a href="#track" className="hero-secondary-btn">
              Track Shipment
            </a>
          </div>

          <div className="hero-location">
            <span className="location-dot"></span>

            <span>
              Lagos · Uyo · Calabar · Port Harcourt · Onitsha
            </span>
          </div>
        </div>

        <div className="hero-side-card">
          <div className="side-card-top">
            <span>SHIPMENT TRACKING</span>
            <span className="status-dot"></span>
          </div>

          <div className="tracking-line"></div>

          <div className="tracking-route">
            <div>
              <small>FROM</small>
              <strong>Alaba, Lagos</strong>
            </div>

            <div className="route-arrow">→</div>

            <div className="route-destination">
              <small>TO</small>
              <strong>Onitsha</strong>
            </div>
          </div>

          <div className="tracking-status">
            <div className="status-icon">✓</div>

            <div>
              <small>SHIPMENT STATUS</small>
              <strong>In Transit</strong>
            </div>
          </div>

          <a href="#track" className="card-link">
            Track your shipment <span>→</span>
          </a>
        </div>
      </div>

      <div className="hero-bottom">
        <span>INTERSTATE HAULAGE</span>
        <span>SECURE CARGO HANDLING</span>
        <span>BRANCH COLLECTION</span>
        <span>TRANSPARENT TRACKING</span>
      </div>

      <div className="hero-indicators">
        {heroImages.map((_, index) => (
          <span
            key={index}
            className={index === currentImage ? "active" : ""}
          ></span>
        ))}
      </div>
    </section>
  );
}

export default Hero;