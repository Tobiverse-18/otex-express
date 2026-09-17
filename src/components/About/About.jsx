import { useEffect, useState } from "react";
import "./About.css";

import oneImage from "../../assets/images/one.JPG";
import twoImage from "../../assets/images/two.JPG";
import threeImage from "../../assets/images/three.JPG";

const aboutImages = [
  {
    src: oneImage,
    alt: "OTEX Express logistics transportation",
  },
  {
    src: twoImage,
    alt: "OTEX Express cargo handling",
  },
  {
    src: threeImage,
    alt: "OTEX Express haulage and logistics",
  },
];

function About() {
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImage((current) => (current + 1) % aboutImages.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const gallery = (
    <div className="about-gallery">
      {aboutImages.map((image, index) => (
        <div
          className={`about-slide ${
            activeImage === index ? "active" : ""
          }`}
          key={image.src}
        >
          <img src={image.src} alt={image.alt} />

          <div className="about-image-overlay"></div>

          <div className="about-image-caption">
            <span>OTEX EXPRESS</span>
            <small>HAULAGE & LOGISTICS</small>
          </div>
        </div>
      ))}

      <div className="about-slide-indicators">
        {aboutImages.map((_, index) => (
          <span
            key={index}
            className={activeImage === index ? "active" : ""}
          ></span>
        ))}
      </div>

      <div className="about-slide-counter">
        <span>0{activeImage + 1}</span>
        <i></i>
        <span>0{aboutImages.length}</span>
      </div>
    </div>
  );

  return (
    <section className="about" id="about">
      <div className="about-container">

        <div className="about-content">

          <div className="about-eyebrow">
            <span></span>
            <p>ABOUT OTEX EXPRESS</p>
          </div>

          <h2>
            Logistics built around
            <br />
            <em>The journey.</em>
          </h2>

          <div className="about-mobile-gallery">
            {gallery}
          </div>

          <div className="about-text">
            <p>
              OTEX EXPRESS provides practical haulage and logistics
              services for moving goods from their point of origin to
              their intended destination.
            </p>

            <p>
              From receiving and documenting loads to transportation,
              offloading and branch collection, we maintain a clear
              process throughout the journey of every shipment.
            </p>
          </div>

          <div className="about-details">

            <div className="about-detail">
              <div className="about-detail-number">01</div>

              <div>
                <h3>Interstate Haulage</h3>
                <p>
                  Connecting key operating locations across Nigeria.
                </p>
              </div>
            </div>

            <div className="about-detail">
              <div className="about-detail-number">02</div>

              <div>
                <h3>Structured Handling</h3>
                <p>
                  From loading and manifests to arrival and collection.
                </p>
              </div>
            </div>

            <div className="about-detail">
              <div className="about-detail-number">03</div>

              <div>
                <h3>Clear Communication</h3>
                <p>
                  Keeping customers informed throughout the shipment
                  journey.
                </p>
              </div>
            </div>

          </div>

          <a href="/about" className="about-link">
            Discover OTEX EXPRESS
            <span>→</span>
          </a>

        </div>

        <div className="about-desktop-gallery">
          {gallery}
        </div>

      </div>
    </section>
  );
}

export default About;