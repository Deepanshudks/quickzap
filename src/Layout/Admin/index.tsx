import React from "react";
import { Outlet } from "react-router-dom";
import Header from "Shared/Header";
import Sidebar from "Shared/Sidebar";

// import Sidebar from "Shared/Admin/Sidebar";
// import Header from "Shared/Admin/Header";

const AdminLayout: React.FC = () => {
  // const { pathname } = useLocation();

  // useLayoutEffect(() => {
  //   if (typeof window !== "undefined") {
  //     const token = localStorage.getItem("sic-token");
  //     const isAdmin = localStorage.getItem("sic-role") === "ADMIN";

  //     if (!token || !isAdmin) {
  //       window.location.href = "/admin/signin";
  //     }
  //   }
  // }, [pathname]);

  return (
    <div className="flex h-screen w-full bg-gray-50">
      <Sidebar />

      <div className="flex flex-col flex-1 overflow-hidden">
        <Header />

        <main className="flex-1 overflow-y-auto p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
