import React from "react";
import illusration from "../assets/Illustrasi Login.png";
import logo from "../assets/Logo.png";
import FormLogin from "../components/Fragments/FormLogin";

function LoginPage() {
  return (
    <div className="grid grid-cols-2 max-h-screen">
      <div className="flex flex-col gap-7 justify-center items-center">
        <div className="font-medium flex items-center gap-2 text-lg">
          <span>
            <img src={logo} width={"85%"} alt="" />
          </span>
          SIMS PPOB
        </div>
        <div className="text-xl font-bold text-center">
          Masuk atau buat akun untuk memulai
        </div>
        <FormLogin />
        <div className="text-xs text-dark-gray font-medium">
          belum punya akun? registrasi <span className="text-red font-medium cursor-pointer">di sini</span>
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

export default LoginPage;
