import cn from "@src/services/clsx";
import Hero from "@components/home/hero";
import Test from "@components/test";
import Carrer from "@components/home/carrer";
import Technologies from "@components/home/technologies";
import Menu from "@src/components/UI/menu";
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
    </>
  );
}
