import React, { useEffect } from "react";
import Header from "../components/Elements/Header";
import ProfileHero from "../components/Elements/ProfileHero";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";


function MainLayout() {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="border-b border-gray"></div>
      <div className="py-5 px-[10%]">
        <ProfileHero />
        <Outlet />
      </div>
    </div>
  );
}

export default MainLayout;
