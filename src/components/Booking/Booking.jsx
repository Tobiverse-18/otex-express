import "./Booking.css";

const states = [
  "Abia",
  "Adamawa",
  "Akwa Ibom",
  "Anambra",
  "Bauchi",
  "Bayelsa",
  "Benue",
  "Borno",
  "Cross River",
  "Delta",
  "Ebonyi",
  "Edo",
  "Ekiti",
  "Enugu",
  "Gombe",
  "Imo",
  "Jigawa",
  "Kaduna",
  "Kano",
  "Katsina",
  "Kebbi",
  "Kogi",
  "Kwara",
  "Lagos",
  "Nasarawa",
  "Niger",
  "Ogun",
  "Ondo",
  "Osun",
  "Oyo",
  "Plateau",
  "Rivers",
  "Sokoto",
  "Taraba",
  "Yobe",
  "Zamfara",
  "Federal Capital Territory",
];

function Booking() {
  return (
    <section className="booking" id="booking">
      <div className="booking-container">

        <div className="booking-header">
          <div className="booking-title-block">
            <div className="booking-eyebrow">
              <span></span>
              <p>BOOK A SHIPMENT</p>
            </div>

            <h2>
              Move what matters.
              <br />
              <em>With clarity.</em>
            </h2>
          </div>

          
        </div>

        <div className="booking-introduction">
          <p>
            Tell us what you're sending and where it needs to go.
            Submit a shipment request and our team can confirm the
            appropriate service and charge.
          </p>
        </div>

        <form className="booking-form">

          <div className="booking-section">
            <div className="booking-number">01</div>

            <div className="booking-fields">

              <div className="booking-field">
                <label htmlFor="pickup">
                  PICKUP LOCATION
                </label>

                <select id="pickup" defaultValue="">
                  <option value="" disabled>
                    Select state
                  </option>

                  {states.map((state) => (
                    <option key={state} value={state}>
                      {state}
                    </option>
                  ))}
                </select>
              </div>

              <div className="booking-field">
                <label htmlFor="destination">
                  DESTINATION
                </label>

                <select id="destination" defaultValue="">
                  <option value="" disabled>
                    Select state
                  </option>

                  {states.map((state) => (
                    <option key={state} value={state}>
                      {state}
                    </option>
                  ))}
                </select>
              </div>

            </div>
          </div>

          <div className="booking-section">
            <div className="booking-number">02</div>

            <div className="booking-fields-single">
              <div className="booking-field">
                <label htmlFor="package">
                  WHAT ARE YOU SHIPPING?
                </label>

                <input
                  id="package"
                  type="text"
                  placeholder="Describe your package"
                />
              </div>
            </div>
          </div>

          <div className="booking-section">
            <div className="booking-number">03</div>

            <div className="booking-fields">

              <div className="booking-field">
                <label htmlFor="weight">
                  WEIGHT / SIZE
                </label>

                <input
                  id="weight"
                  type="text"
                  placeholder="Enter details"
                />
              </div>

              <div className="booking-field">
                <label htmlFor="urgency">
                  URGENCY
                </label>

                <select id="urgency" defaultValue="">
                  <option value="" disabled>
                    Select urgency
                  </option>
                  <option value="standard">
                    Standard
                  </option>
                  <option value="urgent">
                    Urgent
                  </option>
                </select>
              </div>

            </div>
          </div>

          <div className="booking-footer">
            <button type="submit">
              REQUEST SHIPMENT
              <span>→</span>
            </button>
          </div>

        </form>

      </div>
    </section>
  );
}

export default Booking;