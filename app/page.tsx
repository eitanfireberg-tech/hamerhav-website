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
import FAQSection from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppFAB from "@/components/WhatsAppFAB";
import type { Metadata } from "next";
import { buildHomeFaqJsonLd } from "@/lib/seo";

// Canonical lives here, not in the root layout, so subpages never inherit "/" as canonical.
export const metadata: Metadata = { alternates: { canonical: "/" } };

const faqJsonLd = buildHomeFaqJsonLd();

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
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
        <FAQSection />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFAB />
    </>
  );
}
