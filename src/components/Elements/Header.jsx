import React from "react";
import logo from "../../assets/Logo.png";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div id="header" className="flex w-full justify-between items-center p-4 px-[10%]">
      <NavLink to="/" className="font-medium flex items-center gap-2 text-md">
        <span>
          <img src={logo} width={"80%"} alt="" />
        </span>
        SIMS PPOB
      </NavLink>
      <div className="flex items-center gap-12 ml-auto font-medium">
        <NavLink to="/topup">Top Up</NavLink>
        <NavLink to="/transaction">Transaction</NavLink>
        <NavLink to="/account">Akun</NavLink>
      </div>

    </div>
  );
}

export default Header;
