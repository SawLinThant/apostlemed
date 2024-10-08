import { LayoutWithChildren } from "~/types/utils";
import Sidebar from "../components/sidebar";
import Navbar from "./navbar";

const Layout: LayoutWithChildren = ({ children }) => {
  return (
    <div className="flex h-full w-full flex-row gap-2">
      <Sidebar />
      <main className="flex h-screen max-h-screen w-full flex-col overflow-y-auto">
        <Navbar/>
        <div className="h-full w-full">{children}</div>
      </main>
    </div>
  );
};
export default Layout;
