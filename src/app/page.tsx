// src/app/page.tsx
import Hero from "@/components/home/Hero";
import ServicesSection from "@/components/home/ServicesSection";
import Ready from "@/components/home/Ready";
import TechStack from "@/components/home/TechStack";
import Industry from "@/components/home/Industry";
import Testimonials from "@/components/home/Testimonials";
import BottomCTA from "@/components/home/BottomCTA";


const Homepage = () => {
  return (
    <div>
      <Hero/>
      <ServicesSection/>
      <Ready/>
      <TechStack/>
      <Industry/>
      <Testimonials/>
      <BottomCTA/> 
    </div>
  );
};

export default Homepage;
