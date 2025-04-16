import Brands from "@/components/HomePage/Brands";
import HeroSection from "@/components/HomePage/HeroSection";
import HowItWorks from "@/components/HomePage/HowItWorks";
import JoinOur from "@/components/HomePage/JoinOur";
import Testimonties from "@/components/HomePage/Testimonties";
import WhyChoose from "@/components/HomePage/WhyChoose";

export default function Home() {
  return (
    <div>
      <HeroSection/>
      <Brands/>
      <Testimonties/>
      <WhyChoose/>
      <HowItWorks/>
      <JoinOur/>
    </div>
  );
}
