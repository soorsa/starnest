import { Outlet } from "react-router-dom";
import Header from "../../components/AdminComponents/Header";
import SideNav from "../../components/AdminComponents/SideNav";

const Layout = () => {
  return (
    <main className="fixed inset-0 z-50 flex flex-col w-screen h-screen scrollbar-hide text-white bg-gray-700">
      <Header />
      <div className="grid grid-cols-4 flex-1 overflow-auto scrollbar-hide">
        <SideNav />
        <div className="col-span-4 md:col-span-3 overflow-y-auto scrollbar-hide p-4 rounded-tl-lg rounded-tr-lg bg-gray-900">
          <Outlet />
        </div>
      </div>
    </main>
  );
};

export default Layout;
