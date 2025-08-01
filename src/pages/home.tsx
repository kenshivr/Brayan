import Hero from "@components/home/hero";
import Menu from "@src/components/UI/menu";
import Carrer from "@components/home/carrer";
import Introduction from "@components/home/introduction";
import Technologies from "@components/home/technologies";
import ThemeToggle from "@src/components/UI/ThemeToggle";

export default function Home() {
  return (
    <>
      <Menu isDesktop={false} />

      <Hero />

      <Introduction />

      <ThemeToggle />

      <div className="my-26" />

      <Technologies />

      <Carrer />

    </>
  );
}
