import { BiMenuAltLeft } from "react-icons/bi";

export default function ButtonSidebar({ handleSidebarOpen }: any) {
  return (
    <button
      className="border-none outline-none p-3 bg-primary bg-opacity-30 cursor-pointer rounded-xl hover:bg-opacity-50 transition-colors duration-300 ease-in-out"
      onClick={handleSidebarOpen}
    >
      <BiMenuAltLeft className="text-3xl text-primary font-bold" />
    </button>
  );
}
