import "./Services.css";

const services = [
  {
    number: "01",
    title: "Interstate Haulage",
    description:
      "The movement of goods between our operating locations, with arrangements made around the nature, size and destination of each shipment.",
  },
  {
    number: "02",
    title: "Pickup & Delivery",
    description:
      "Pickup and delivery arrangements that make it easier to move goods from their point of origin to their intended destination.",
  },
  {
    number: "03",
    title: "Branch Collection",
    description:
      "Goods are received at the destination branch and made available for collection with the appropriate receipt.",
  },
  {
    number: "04",
    title: "Cargo Handling",
    description:
      "Goods are handled through loading, transportation and offloading as part of a structured delivery process.",
  },
  {
    number: "05",
    title: "Shipment Tracking",
    description:
      "Customers can stay informed about the progress of their shipment from the point of dispatch through the delivery process.",
  },
  {
    number: "06",
    title: "Doorstep Delivery",
    description:
      "For customers who need more than branch collection, goods can be delivered from the destination branch to a preferred location.",
  },
];

function Services() {
  return (
    <section className="services" id="services">
      <div className="services-container">

        <div className="services-header">

          <div className="services-title-block">
            <div className="services-eyebrow">
              <span></span>
              OUR SERVICES
            </div>

            <h2>
              Moving what matters.
              <br />
              <em>Wherever it needs to go.</em>
            </h2>
          </div>

        </div>

        <div className="services-list">

          {services.map((service, index) => (
            <div
              className={`service-item ${
                index === 0 ? "service-item-featured" : ""
              }`}
              key={service.number}
            >
              <div className="service-number">
                {service.number}
              </div>

              <div className="service-main">
                <h3>{service.title}</h3>

                <p>{service.description}</p>
              </div>

              <div className="service-line"></div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Services;