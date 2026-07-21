// src/app/page.tsx
import Hero from "@/components/home/Hero";
import ServicesSection from "@/components/home/ServicesSection";
import TechStack from "@/components/home/TechStack";
import Testimonials from "@/components/home/Testimonials";


const Homepage = () => {
  return (
    <div>
      <Hero/>
      <ServicesSection/>
      <TechStack/>
      <Testimonials/>
    </div>
  );
};

export default Homepage;
