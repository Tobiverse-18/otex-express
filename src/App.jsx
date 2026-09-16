import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import About from "./components/About/About";
import Booking from "./components/Booking/Booking";
import HowItWorks from "./components/HowItWorks/HowItWorks";
import CTA from "./components/CTA/CTA";
import Footer from "./components/Footer/Footer";
function App() {
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

export default App;