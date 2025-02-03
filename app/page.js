import AboutSection from "@/components/About";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import HeroSection from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/ProjectSec";

import { FlipWords } from "@/components/ui/flip-words";
import LogoCarousel from "@/components/ui/logo-carousel";


// import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-items-center min-h-screen font-[family-name:var(--font-geist-sans)]">
{/* grid grid-rows-[auto_auto_auto] */}
     <Navbar/>      
    <HeroSection>
    <FlipWords/>
    </HeroSection>
    <LogoCarousel/>
    <Projects/>
    <ContactForm/>
    <AboutSection/>
    <Footer/>

{/* add links section - icon par click karne se link copy ho jaye - already gn in footer */}
    {/* scroll karne par next section reveal hona chanhiye - learn */}
    </div>
  );
}
