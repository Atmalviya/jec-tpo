import Image from "next/image";
import NavbarComp from "./_components/Navbar";
import Hero from "./_components/Hero";
import Features from "./_components/Features";
import InformationSection from "./_components/InformationSection";
import Companies from "./_components/Companies";
import DownloadSection from "./_components/DownloadSection";
import Footer from "./_components/Footer";

export default function Home() {
  return (
    <div className="smooth-scroll">
      <NavbarComp />
      <Hero />
      <Features />
      <Companies />
      <InformationSection />
      <DownloadSection />
      <Footer />
    </div>
  );
}
