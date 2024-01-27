import About from "@/components/About";
import CEO from "@/components/CEO";
import Features from "@/components/Features";
import LandingPage from "@/components/LandingPage";
import Team from "@/components/Team";

export default function Home() {
  return (
    <>
      <LandingPage />
      <About />
      <Features />
      <CEO />
      <Team />
    </>
  );
}
