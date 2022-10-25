import React from "react";
import styles from "./NavPage.module.css";
import { Routes, Route } from "react-router-dom";

import Trending from "../../pages/Trending/Trending";
import SidebarRoute from "../../pages/SidebarRoute";
import Navbar_two from "../Navbar/NavbarTwo";

const NavPage = () => {
  return (
    <div>
      <Routes>
        <Route path="/*" element={<Trending />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="/sidebarRoute" element={<SidebarRoute />} />
        <Route path="/login" element={<Navbar_two />} />
      </Routes>
    </div>
  );
};

export default NavPage;
