import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import History from "./components/History";
import Contact from "./components/Contact";
import PhilosophyVision from "./components/Philosophy&Vision";
import Businesses from "./components/Business";
import HSSEPolicy from "./components/HSSE";
import Certificates from "./components/Certificates";
import References from "./components/References";
import Photos from "./components/Photos";
export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <History />
      <PhilosophyVision />
      <Businesses />
      <HSSEPolicy />
      <Certificates />
      <References />
      <Photos />
      <Contact />
    </>
  );
}