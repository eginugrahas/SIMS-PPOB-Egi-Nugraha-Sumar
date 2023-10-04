import React from "react";
import illusration from "/Illustrasi Login.png";
import logo from "/Logo.png";
import FormRegister from "../components/Fragments/FormRegister";
import { Link } from "react-router-dom";
import { Toaster } from "react-hot-toast";

function RegisterPage() {
  return (
    <div className="grid grid-cols-2 max-h-screen">
      <div className="flex flex-col gap-7 justify-center items-center">
        <Toaster />
        <div className="font-medium flex items-center gap-2 text-lg">
          <span>
            <img src={logo} width={"85%"} alt="" />
          </span>
          SIMS PPOB
        </div>
        <div className="text-xl font-bold text-center">
          Lengkapi data untuk membuat akun
        </div>
        <FormRegister />
        <div className="text-xs text-dark-gray font-medium">
          sudah punya akun? login{" "}
          <span className="text-red font-medium cursor-pointer">
            <Link to="/login">di sini</Link>
          </span>
        </div>
      </div>
      <div className="">
        <img
          src={illusration}
          alt="illustrasi-login"
          style={{ height: "100vh", width: "100%" }}
        />
      </div>
    </div>
  );
}

export default RegisterPage;
