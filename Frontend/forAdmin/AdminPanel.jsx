import React from "react";
import "./admin.css";
import SideBarForAdmin from "./SideBarForAdmin";
import createItem from "./createItem";
import AllItemForAdmin from "./AllItemForAdmin";

import { BrowserRouter, Route, Routes } from "react-router-dom";
const AdminPanel = () => {
  return (
    <>
      <SideBarForAdmin />
      <Routes>
        <Route path="/Create-Item" element={<createItem />} />
        <Route path="/Edit-items" element={<AllItemForAdmin />} />
      </Routes>
    </>
  );
};

export default AdminPanel;
