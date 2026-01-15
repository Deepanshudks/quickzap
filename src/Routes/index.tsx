import { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import AdminLayout from "Layout/Admin";
import Login from "Pages/Login";
import Transactions from "Pages/Transactions";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route path="/" element={<Login />} />

          <Route path="/" element={<AdminLayout />}>
            <Route path="transaction" element={<Transactions />} />
          </Route>

          <Route path="*" element={<p>Not Found</p>} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default AppRoutes;
