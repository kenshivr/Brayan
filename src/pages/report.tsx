import Menu from "@src/components/UI/menu";
import Table from "@components/table/table";
import Introduction from "@src/components/table/introduction";

export default function Report() {

  return (
    <>

      <Menu isDesktop={true} />

      <Introduction />

      <Table />

    </>
  );
}
