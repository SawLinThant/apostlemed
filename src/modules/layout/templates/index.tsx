import { LayoutWithChildren } from "~/types/utils";
import Sidebar from "../components/sidebar";
import Navbar from "./navbar";

const Layout: LayoutWithChildren = ({ children }) => {
  return (
    <div className="flex h-full w-full flex-row gap-4">
      <Sidebar />
      <main className="flex relative min-h-screen w-full flex-col items-center overflow-y-auto overflow-x-hidden">
        <Navbar/>
        <div className="min-h-[85vh] mt-24 pb-2 mb-2 w-[95%] border border-gray-500 rounded-md bg-slate-100">{children}</div>
      </main>
    </div>
  );
};
export default Layout;
