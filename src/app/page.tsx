import Clients from "@/components/modules/clients/Clients";
import Hero from "./_compnents/hero/Hero";
import Info from "./_compnents/info/Info";
import About from "./_compnents/about/About";
import Figures from "./_compnents/figures/Figures";
import Services from "./_compnents/services/Servisec";

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
