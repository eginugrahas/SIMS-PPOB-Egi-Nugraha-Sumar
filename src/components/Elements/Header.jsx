import React from "react";
import logo from "../../assets/Logo.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="flex w-full justify-between items-center p-4 px-[10%]">
      <Link to="/" className="font-medium flex items-center gap-2 text-md">
        <span>
          <img src={logo} width={"80%"} alt="" />
        </span>
        SIMS PPOB
      </Link>
      <div className="flex items-center gap-12 ml-auto font-medium">
        <Link to="/topup">Top Up</Link>
        <Link to="/transaction">Transaction</Link>
        <Link to="/account">Akun</Link>
      </div>

    </div>
  );
}

export default Header;
