import React from "react";
import photoProfile from "../../assets/Profile Photo.png";

function ProfileHero() {
  return (
    <div className="flex justify-between items-center">
      <div className="flex flex-col w-[40%">
        <div className="rounded-full border-dark-gray">
          <img src={photoProfile} alt="userPhoto" />
          <div className="text-xl font-medium mt-4">Selamat datang,</div>
          <div className="text-4xl font-semibold mt-2">Kristanto Wibowo</div>
        </div>
      </div>
      <div className="flex w-[60%]">
        <div className="saldoHero p-6">
          <div className="bg-[#F13B2F] flex flex-col gap-3 w-[65%]">
            <div className="text-white text-lg font-medium">Saldo anda</div>
            <div className="text-white text-3xl font-medium">
              Rp <span className="ml-2">&#x2022; &#x2022; &#x2022; &#x2022; &#x2022; &#x2022;</span>
            </div>
            <div className="text-white text-sm font-medium">
              <span className="">Lihat Saldo</span>{" "}
              <span className="ml-2 cursor-pointer">
                <i className="icon-visibility"></i>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileHero;
