import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import TreatmentCenter from "@/components/TreatmentCenter";
import Toolbox from "@/components/Toolbox";
import Psychodrama from "@/components/Psychodrama";
import Approaches from "@/components/Approaches";
import Specialties from "@/components/Specialties";
import DeepProcess from "@/components/DeepProcess";
import OnlineTrack from "@/components/OnlineTrack";
import Courses from "@/components/Courses";
import WomensGroups from "@/components/WomensGroups";
import Philosophy from "@/components/Philosophy";
import Recommendations from "@/components/Recommendations";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppFAB from "@/components/WhatsAppFAB";

export default function Home() {
  return (
    <>
      <Nav />
      <main id="main-content">
        <Hero />
        <About />
        <TreatmentCenter />
        <Toolbox />
        <Psychodrama />
        <Approaches />
        <Specialties />
        <DeepProcess />
        <OnlineTrack />
        <Courses />
        <WomensGroups />
        <Philosophy />
        <Recommendations />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFAB />
    </>
  );
}
