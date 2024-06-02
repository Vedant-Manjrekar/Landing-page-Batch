import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Advantages from "./components/Advantages";
import GetStarted from "./components/GetStarted";
import FAQ from "./components/FAQ";

export default function Home() {
  return (
    <main className='overflow-hidden'>
      <Hero />
      <Features />
      <Advantages />
      <FAQ />
      <GetStarted />
      <Footer />
    </main>
  );
}
