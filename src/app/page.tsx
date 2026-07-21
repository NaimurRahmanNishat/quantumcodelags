// src/app/page.tsx
import Hero from "@/components/home/Hero";
import ServicesSection from "@/components/home/ServicesSection";
import TechStack from "@/components/home/TechStack";


const Homepage = () => {
  return (
    <div>
      <Hero/>
      <ServicesSection/>
      <TechStack/>
    </div>
  );
};

export default Homepage;
