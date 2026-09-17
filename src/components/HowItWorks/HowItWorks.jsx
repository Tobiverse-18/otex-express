import "./HowItWorks.css";

const steps = [
  {
    number: "01",
    title: "RECEIVE YOUR LOAD",
    description: "Goods are received at the office and prepared for the journey.",
  },
  {
    number: "02",
    title: "DOCUMENT THE SHIPMENT",
    description: "Receipt and payment details are documented for the shipment.",
  },
  {
    number: "03",
    title: "LOAD & TRANSPORT",
    description: "Goods are loaded with the manifest and transported to their destination.",
  },
  {
    number: "04",
    title: "ARRIVE & COLLECT",
    description: "The shipment arrives at the destination office for collection.",
  },
];

function HowItWorks() {
  return (
    <section className="how-it-works" id="how-it-works">
      <div className="how-it-works-container">

        <div className="how-it-works-header">
          <div className="how-it-works-title-block">
            <div className="how-it-works-eyebrow">
              <span></span>
               <p>HOW IT WORKS</p>
            </div>

            <h2>
              A clear process.
              <br />
              <em>From pickup to collection.</em>
            </h2>
          </div>

          
        </div>

        <div className="how-it-works-list">
          {steps.map((step, index) => (
            <div
              className={`how-it-works-item ${
                index === 0 ? "how-it-works-item-featured" : ""
              }`}
              key={step.number}
            >
              <div className="how-it-works-number">
                {step.number}
              </div>

              <div className="how-it-works-main">
                <h3>{step.title}</h3>

                <p>{step.description}</p>
              </div>

              <div className="how-it-works-line"></div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default HowItWorks;