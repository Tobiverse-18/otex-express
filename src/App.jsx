import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import About from "./components/About/About";
import Booking from "./components/Booking/Booking";
import HowItWorks from "./components/HowItWorks/HowItWorks";
import CTA from "./components/CTA/CTA";
import Footer from "./components/Footer/Footer";

import BookShipment from "./components/BookShipment/BookShipment";

function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Booking />
      <HowItWorks />
      <CTA />
      <Footer />
    </>
  );
}

function BookShipmentPage() {
  return (
    <>
      <Navbar />
      <BookShipment />
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route
          path="/book-shipment"
          element={<BookShipmentPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;