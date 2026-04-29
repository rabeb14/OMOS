import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import History from "./components/History";
import Contact from "./components/Contact";
import PhilosophyVision from "./components/Philosophy&Vision";
import HolisticMaintenance from "./components/HolisticMaintenance";
import HSSEPolicy from "./components/HSSE";
import References from "./components/References";
export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col">
        <Hero />
        <History />
        <PhilosophyVision />
        <HolisticMaintenance />
        <HSSEPolicy />
        {/* <Certificates /> */}
        <References />
        {/* <Photos /> */}
        <Contact />
      </main>
    </>
  );
}