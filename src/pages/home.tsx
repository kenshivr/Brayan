import Menu from "@src/components/UI/menu";
import Carrer from "@components/home/carrer";
import Introduction from "@components/home/introduction";
import Technologies from "@components/home/technologies";

export default function Home() {
  return (
    <>
      <Menu isDesktop />

      <Introduction />

      <div className="my-26" />

      <Technologies />

      <Carrer />

    </>
  );
}
