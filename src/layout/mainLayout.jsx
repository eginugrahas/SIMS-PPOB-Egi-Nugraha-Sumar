import React from "react";
import Header from "../components/Elements/Header";
import ProfileHero from "../components/Elements/ProfileHero";

function MainLayout({ children }) {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="border-b border-gray"></div>
      <div className="py-5 px-[10%]">
        <ProfileHero />
        {children}
      </div>
    </div>
  );
}

export default MainLayout;
