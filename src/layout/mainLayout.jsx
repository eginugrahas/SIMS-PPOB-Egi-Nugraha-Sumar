import React, { useEffect } from "react";
import Header from "../components/Elements/Header";
import ProfileHero from "../components/Elements/ProfileHero";
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";

function MainLayout() {
  const token = useSelector((state) => state.auth.token);
  const navigate = useNavigate();
  useEffect(() => {
    if (!token) {
      navigate("/login")
    }
  }, [token]);
  return (
    <>
      {token ? (
        <div className="min-h-screen">
          <Header />
          <div className="border-b border-gray"></div>
          <div className="py-5 px-[10%]">
            <ProfileHero />
            <Outlet />
          </div>
        </div>
      ) : (
        <div className="min-h-screen flex items-center justify-center">loading</div>
      )}
    </>
  );
}

export default MainLayout;
