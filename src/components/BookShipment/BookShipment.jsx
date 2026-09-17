import { useState } from "react";
import "./BookShipment.css";

import {
  states,
  deliveryMethods,
  urgencyOptions,
  packageTypes,
} from "./bookingData";

const initialFormData = {
  journey: {
    pickupLocation: "",
    destination: "",
    deliveryMethod: "",
  },

  shipment: {
    description: "",
    weight: "",
    size: "",
    packageType: "",
    fragile: "",
    perishable: "",
  },

  delivery: {
    urgency: "",
    preferredDate: "",
    additionalDetails: "",
  },

  customer: {
    fullName: "",
    phone: "",
    email: "",
    notes: "",
  },
};

function BookShipment() {
  const [formData, setFormData] = useState(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const updateField = (section, field, value) => {
    setFormData((current) => ({
      ...current,
      [section]: {
        ...current[section],
        [field]: value,
      },
    }));

    setSubmitError("");
    setSubmitSuccess(false);
  };

  const validateForm = () => {
    const requiredFields = [
      ["journey", "pickupLocation", "Pickup location"],
      ["journey", "destination", "Destination"],
      ["journey", "deliveryMethod", "Delivery method"],

      ["shipment", "description", "What are you shipping?"],
      ["shipment", "weight", "Weight"],
      ["shipment", "size", "Size / dimensions"],
      ["shipment", "packageType", "Package type"],
      ["shipment", "fragile", "Fragile selection"],
      ["shipment", "perishable", "Perishable selection"],

      ["delivery", "urgency", "Urgency"],
      ["delivery", "preferredDate", "Preferred date"],

      ["customer", "fullName", "Full name"],
      ["customer", "phone", "Phone number"],
      ["customer", "email", "Email address"],
    ];

    for (const [section, field, label] of requiredFields) {
      const value = formData[section][field];

      if (!value || !String(value).trim()) {
        setSubmitError(
          `You have to fill in "${label}" before you can submit your shipment request.`
        );

        return false;
      }
    }

    return true;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setSubmitError("");
    setSubmitSuccess(false);

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    /*
      Temporary frontend submission.

      When the Django API is ready, this is where we will send
      formData to the backend.

      Example later:

      const response = await fetch("/api/shipments/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
    */

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      console.log("Shipment request:", formData);

      setSubmitSuccess(true);
      setFormData(initialFormData);
    } catch (error) {
      console.error(error);

      setSubmitError(
        "We could not submit your shipment request. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="book-shipment">
      <div className="book-shipment-container">

        {/* HEADER */}
        <header className="book-shipment-header">
          <div className="book-shipment-title-block">
            <div className="book-shipment-eyebrow">
              <span></span>
              <p>BOOK A SHIPMENT</p>
            </div>

            <h1>
              Move what matters.
              <br />
              <em>With clarity.</em>
            </h1>
          </div>
        </header>

        {/* INTRODUCTION */}
        <div className="book-shipment-introduction">
          <p>
            Tell us about your shipment and where it needs to go.
            Submit your details and our team will review the request
            and confirm the appropriate service and charge.
          </p>
        </div>

        {/* FORM */}
        <form
          className="book-shipment-form"
          onSubmit={handleSubmit}
          noValidate
        >

          {/* JOURNEY */}
          <section className="booking-form-section">
            <div className="booking-form-number">
              01
            </div>

            <div className="booking-form-content">
              <div className="booking-form-section-heading">
                <h2>JOURNEY</h2>

                <p>
                  Tell us where the shipment is coming from
                  and where it needs to go.
                </p>
              </div>

              <div className="booking-fields booking-fields-two">

                <div className="booking-field">
                  <label htmlFor="pickupLocation">
                    PICKUP LOCATION
                  </label>

                  <select
                    id="pickupLocation"
                    value={formData.journey.pickupLocation}
                    onChange={(event) =>
                      updateField(
                        "journey",
                        "pickupLocation",
                        event.target.value
                      )
                    }
                  >
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

                  <select
                    id="destination"
                    value={formData.journey.destination}
                    onChange={(event) =>
                      updateField(
                        "journey",
                        "destination",
                        event.target.value
                      )
                    }
                  >
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

              <div className="booking-field booking-field-full">
                <label>
                  DELIVERY METHOD
                </label>

                <div className="booking-choice-group">
                  {deliveryMethods.map((method) => (
                    <label
                      className={`booking-choice ${
                        formData.journey.deliveryMethod ===
                        method.value
                          ? "active"
                          : ""
                      }`}
                      key={method.value}
                    >
                      <input
                        type="radio"
                        name="deliveryMethod"
                        value={method.value}
                        checked={
                          formData.journey.deliveryMethod ===
                          method.value
                        }
                        onChange={(event) =>
                          updateField(
                            "journey",
                            "deliveryMethod",
                            event.target.value
                          )
                        }
                      />

                      <span>{method.label}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* SHIPMENT */}
          <section className="booking-form-section">
            <div className="booking-form-number">
              02
            </div>

            <div className="booking-form-content">
              <div className="booking-form-section-heading">
                <h2>SHIPMENT</h2>

                <p>
                  Give us enough information to understand
                  what you are sending.
                </p>
              </div>

              <div className="booking-field booking-field-full">
                <label htmlFor="description">
                  WHAT ARE YOU SHIPPING?
                </label>

                <input
                  id="description"
                  type="text"
                  placeholder="Describe your package"
                  value={formData.shipment.description}
                  onChange={(event) =>
                    updateField(
                      "shipment",
                      "description",
                      event.target.value
                    )
                  }
                />
              </div>

              <div className="booking-fields booking-fields-two">

                <div className="booking-field">
                  <label htmlFor="weight">
                    WEIGHT
                  </label>

                  <input
                    id="weight"
                    type="text"
                    placeholder="e.g. 20kg"
                    value={formData.shipment.weight}
                    onChange={(event) =>
                      updateField(
                        "shipment",
                        "weight",
                        event.target.value
                      )
                    }
                  />
                </div>

                <div className="booking-field">
                  <label htmlFor="size">
                    SIZE / DIMENSIONS
                  </label>

                  <input
                    id="size"
                    type="text"
                    placeholder="e.g. 60 × 40 × 30cm"
                    value={formData.shipment.size}
                    onChange={(event) =>
                      updateField(
                        "shipment",
                        "size",
                        event.target.value
                      )
                    }
                  />
                </div>

              </div>

              <div className="booking-field booking-field-full">
                <label htmlFor="packageType">
                  PACKAGE TYPE
                </label>

                <select
                  id="packageType"
                  value={formData.shipment.packageType}
                  onChange={(event) =>
                    updateField(
                      "shipment",
                      "packageType",
                      event.target.value
                    )
                  }
                >
                  <option value="" disabled>
                    Select package type
                  </option>

                  {packageTypes.map((type) => (
                    <option
                      key={type.value}
                      value={type.value}
                    >
                      {type.label}
                    </option>
                  ))}
                </select>
              </div>

              <div className="booking-fields booking-fields-two">

                <div className="booking-field">
                  <label>
                    IS IT FRAGILE?
                  </label>

                  <div className="booking-choice-group compact">
                    {["yes", "no"].map((value) => (
                      <label
                        className={`booking-choice ${
                          formData.shipment.fragile === value
                            ? "active"
                            : ""
                        }`}
                        key={value}
                      >
                        <input
                          type="radio"
                          name="fragile"
                          value={value}
                          checked={
                            formData.shipment.fragile === value
                          }
                          onChange={(event) =>
                            updateField(
                              "shipment",
                              "fragile",
                              event.target.value
                            )
                          }
                        />

                        <span>
                          {value === "yes" ? "Yes" : "No"}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="booking-field">
                  <label>
                    IS IT PERISHABLE?
                  </label>

                  <div className="booking-choice-group compact">
                    {["yes", "no"].map((value) => (
                      <label
                        className={`booking-choice ${
                          formData.shipment.perishable === value
                            ? "active"
                            : ""
                        }`}
                        key={value}
                      >
                        <input
                          type="radio"
                          name="perishable"
                          value={value}
                          checked={
                            formData.shipment.perishable === value
                          }
                          onChange={(event) =>
                            updateField(
                              "shipment",
                              "perishable",
                              event.target.value
                            )
                          }
                        />

                        <span>
                          {value === "yes" ? "Yes" : "No"}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          </section>

          {/* DELIVERY */}
          <section className="booking-form-section">
            <div className="booking-form-number">
              03
            </div>

            <div className="booking-form-content">
              <div className="booking-form-section-heading">
                <h2>DELIVERY</h2>

                <p>
                  Let us know how quickly the shipment is needed
                  and provide any useful delivery information.
                </p>
              </div>

              <div className="booking-fields booking-fields-two">

                <div className="booking-field">
                  <label htmlFor="urgency">
                    URGENCY
                  </label>

                  <select
                    id="urgency"
                    value={formData.delivery.urgency}
                    onChange={(event) =>
                      updateField(
                        "delivery",
                        "urgency",
                        event.target.value
                      )
                    }
                  >
                    <option value="" disabled>
                      Select urgency
                    </option>

                    {urgencyOptions.map((option) => (
                      <option
                        key={option.value}
                        value={option.value}
                      >
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="booking-field">
                  <label htmlFor="preferredDate">
                    PREFERRED DATE
                  </label>

                  <input
                    id="preferredDate"
                    type="date"
                    value={formData.delivery.preferredDate}
                    onChange={(event) =>
                      updateField(
                        "delivery",
                        "preferredDate",
                        event.target.value
                      )
                    }
                  />
                </div>

              </div>

              <div className="booking-field booking-field-full">
                <label htmlFor="additionalDetails">
                  DELIVERY DETAILS
                </label>

                <textarea
                  id="additionalDetails"
                  rows="5"
                  placeholder="Add any delivery instructions or useful information"
                  value={formData.delivery.additionalDetails}
                  onChange={(event) =>
                    updateField(
                      "delivery",
                      "additionalDetails",
                      event.target.value
                    )
                  }
                />
              </div>
            </div>
          </section>

          {/* CUSTOMER */}
          <section className="booking-form-section">
            <div className="booking-form-number">
              04
            </div>

            <div className="booking-form-content">
              <div className="booking-form-section-heading">
                <h2>CUSTOMER</h2>

                <p>
                  Provide your contact details so our team can
                  respond to your shipment request.
                </p>
              </div>

              <div className="booking-fields booking-fields-two">

                <div className="booking-field">
                  <label htmlFor="fullName">
                    FULL NAME
                  </label>

                  <input
                    id="fullName"
                    type="text"
                    placeholder="Your full name"
                    value={formData.customer.fullName}
                    onChange={(event) =>
                      updateField(
                        "customer",
                        "fullName",
                        event.target.value
                      )
                    }
                  />
                </div>

                <div className="booking-field">
                  <label htmlFor="phone">
                    PHONE NUMBER
                  </label>

                  <input
                    id="phone"
                    type="tel"
                    placeholder="080..."
                    value={formData.customer.phone}
                    onChange={(event) =>
                      updateField(
                        "customer",
                        "phone",
                        event.target.value
                      )
                    }
                  />
                </div>

              </div>

              <div className="booking-field booking-field-full">
                <label htmlFor="email">
                  EMAIL ADDRESS
                </label>

                <input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  value={formData.customer.email}
                  onChange={(event) =>
                    updateField(
                      "customer",
                      "email",
                      event.target.value
                    )
                  }
                />
              </div>

              <div className="booking-field booking-field-full">
                <label htmlFor="notes">
                  ADDITIONAL NOTES
                </label>

                <textarea
                  id="notes"
                  rows="5"
                  placeholder="Anything else OTEX should know?"
                  value={formData.customer.notes}
                  onChange={(event) =>
                    updateField(
                      "customer",
                      "notes",
                      event.target.value
                    )
                  }
                />
              </div>
            </div>
          </section>

          {/* SUBMISSION */}
          <div className="booking-submit-area">

            {submitSuccess && (
              <div className="booking-message booking-success">
                Your shipment request has been received.
                Our team will review the details and contact you.
              </div>
            )}

            {submitError && (
              <div className="booking-message booking-error">
                {submitError}
              </div>
            )}

            <div className="booking-submit-content">
              <p>
                Charges are subject to confirmation after your
                shipment details have been reviewed by OTEX EXPRESS.
              </p>

              <button
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting
                  ? "SUBMITTING..."
                  : "REQUEST SHIPMENT"}

                <span>→</span>
              </button>
            </div>
          </div>

        </form>
      </div>
    </main>
  );
}

export default BookShipment;