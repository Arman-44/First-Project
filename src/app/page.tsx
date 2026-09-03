import Clients from "@/components/modules/clients/Clients";
import Hero from "./_components/hero/Hero";
import Info from "./_components/info/Info";
import About from "./_components/about/About";
import Figures from "./_components/figures/Figures";
import Services from "./_components/services/Service";

export default function Home() {
  return (
    <>
      <Hero />
      <Info/>
      <Clients/>
      <div className="bg-main-pattern bg-top bg-size-[100%_auto] bg-no-repeat w-full min-h-[7000px]">
        <div className="layout-container">
          <About/>
          <Figures/>
          <Services/>
        </div>
      </div>
    </>
  );
}
