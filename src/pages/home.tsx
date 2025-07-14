import Hero from "@components/home/hero";
import Carrer from "@components/home/carrer";
import Technologies from "@components/home/technologies";
import Menu from "@src/components/UI/menu";

export default function Home() {
  return (
    <>
      <Menu isDesktop={false} />

      <Hero />

      <div className="my-26" />

      <Technologies />

      <Carrer />
    </>
  );
}
