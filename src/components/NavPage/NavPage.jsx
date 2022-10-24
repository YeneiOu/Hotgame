import React from "react";
import styles from "./NavPage.module.css";
import { Routes, Route } from "react-router-dom";

import Trending from "../../pages/Trending/Trending";
import SidebarRoute from "../../pages/SidebarRoute";

const NavPage = () => {
  return (
    <div>
      <Routes>
        <Route path="/*" element={<Trending />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="/sidebarRoute" element={<SidebarRoute />} />
      </Routes>
    </div>
  );
};

export default NavPage;
