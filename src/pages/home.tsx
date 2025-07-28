import Hero from "@components/home/hero";
import Menu from "@src/components/UI/menu";
import Carrer from "@components/home/carrer";
import Technologies from "@components/home/technologies";
// import ColorOrb from "@src/components/home/colorOrb";
import ThemeToggle from "@src/components/UI/ThemeToggle";

export default function Home() {
  return (
    <>
      <Menu isDesktop={false} />

      <Hero />

      <ThemeToggle />

      <div className="my-26" />

      <Technologies />

      <Carrer />

      {/* <ColorOrb colors={["#E3E6D8", "#BAC1C5", "#ABA7A6", "#958B8C", "#7B737D"]} size={96} />

      <div className="my-26" />
      
      <ColorOrb colors={["#BF7A8D", "#7A4CC5", "#3F458A", "#29243E", "#11121D"]} size={96} />
      
      <div className="my-26" />

      <ColorOrb colors={["#9BA8AB", "#4A5C6A", "#253745", "#11212D", "#06141B"]} size={96} />

      <div className="my-26" />
      
      <ColorOrb colors={["#DCE0E8", "#8EA1AE", "#6B212C", "#685652", "#27363F"]} size={96} /> 
            
      <div className="my-26" />
      
      <ColorOrb colors={["#DED1C6", "#A77693", "#174871", "#133B5E", "#0F2D4D"]} size={96} /> 
       */}
    </>
  );
}
