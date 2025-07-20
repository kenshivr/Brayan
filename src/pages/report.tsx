import Menu from "@src/components/UI/menu";
import Table from "@components/table/table";
import ThemeToggle from "@src/components/UI/ThemeToggle";

export default function Report() {

  return (
    <>

      <Menu isDesktop={false} />

      <div className="flex flex-col gap-6 pr-4 items-end justify-center w-1/2 h-12">
        <ThemeToggle />
      </div>

      <Table />
      
    </>
  );
}
