import 'bootstrap/dist/css/bootstrap.min.css';
import {Outlet } from "react-router-dom";

import AdminHeader from "../partials/AdminHeader";
import AdminFooter from "../partials/AdminFooter";

export default function LayoutAdmin() {
  return (
      <div>
        <AdminHeader />
            <Outlet />
        <AdminFooter />
      </div>
  );
}

