import React, { useState } from "react";
import logo from "/Logo.png";
import { NavLink } from "react-router-dom";

function Header() {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <div
      id="header"
      className="flex w-full justify-between items-center p-4 px-[10%] "
    >
      <NavLink to="/" className="font-medium flex items-center gap-2 text-md">
        <span>
          <img src={logo} width={"80%"} alt="" />
        </span>
        SIMS PPOB
      </NavLink>
      <div className="hidden md:flex lg:flex items-center gap-12 ml-auto font-medium">
        <NavLink to="/topup">Top Up</NavLink>
        <NavLink to="/transaction">Transaction</NavLink>
        <NavLink to="/account">Akun</NavLink>
      </div>
      <div className="md:hidden lg:hidden relative">
        <i className={`icon-menu text-xl ${openMenu ? "text-red" : ""} cursor-pointer`}
        onClick={()=>setOpenMenu(!openMenu)}></i>
        <ul className={`${openMenu ? "flex" : "hidden"} flex-col justify-between min-h-[50px] absolute top-6 right-0 px-4 py-2 bg-white border border-gray rounded`}>
          <li className="py-2 cursor-pointer" onClick={()=>setOpenMenu(!openMenu)}>
            <NavLink to="/topup">Top Up</NavLink>
          </li>
          <li className="py-2 cursor-pointer" onClick={()=>setOpenMenu(!openMenu)}>
            <NavLink to="/transaction">Transaction</NavLink>
          </li>
          <li className="py-2 cursor-pointer" onClick={()=>setOpenMenu(!openMenu)}>
            <NavLink to="/account">Akun</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
