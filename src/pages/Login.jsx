import React from "react";
import illusration from "../assets/Illustrasi Login.png";
import logo from "../assets/Logo.png";
import FormLogin from "../components/Fragments/FormLogin";
import { Link } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";

function LoginPage() {
  const user = useSelector((state) => state.user);
  const token = useSelector((state) => state.auth.token);
  console.log(user);
  return (
    <div className="grid grid-cols-2 max-h-screen">
      <div className="flex flex-col gap-7 justify-center items-center">
        <Toaster position="bottom-left" reverseOrder={false} />
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
          belum punya akun? registrasi{" "}
          <span className="text-red font-medium cursor-pointer">
            <Link to="/register">di sini</Link>
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

export default LoginPage;
