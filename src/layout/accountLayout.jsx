import React from "react";
import Header from "../components/Elements/Header";
import { Outlet } from "react-router-dom";

function AccountLayout() {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="border-b border-gray"></div>
      <div className="py-5 px-[10%]">
        <Outlet />
      </div>
    </div>
  );
}

export default AccountLayout;
