import React from "react";
import Header from "../components/Elements/Header";
import ProfileHero from "../components/Elements/ProfileHero";
import { useSelector } from "react-redux";

function MainLayout({ children }) {
  const user = useSelector((state) => state.user);
  const balance = useSelector((state) => state.transaction.balance);
  console.log(balance)
  return (
    <div className="min-h-screen">
      <Header />
      <div className="border-b border-gray"></div>
      <div className="py-5 px-[10%]">
        <ProfileHero user={user.user} balance={balance.balance} />
        {children}
      </div>
    </div>
  );
}

export default MainLayout;
