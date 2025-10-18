import Menu from "@src/components/UI/menu";
import Carrer from "@components/home/carrer";
import Introduction from "@components/home/introduction";
import Technologies from "@components/home/technologies";
import CharactersMobile from "@components/home/charactersMobile";
import CharactersDesktop from "@src/components/home/charactersDesktop";

export default function Home() {
  return (
    <>
      <Menu isDesktop />

      <Introduction />

      <div className="hidden md:flex">
        <CharactersDesktop />
      </div>

      <div className="flex md:hidden">
        <CharactersMobile />
      </div>

      <div className="my-26" />

      <Technologies />

      <Carrer />

    </>
  );
}
