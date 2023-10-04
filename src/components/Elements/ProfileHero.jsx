import React, { useState } from "react";
import photoProfile from "../../assets/Profile Photo.png";

function ProfileHero(props) {
  const { user, balance } = props;
  const [saldoVisibility, setSaldoVisibility] = useState(false);
  return (
    <div className="flex justify-between items-center mb-10">
      <div className="flex flex-col w-[40%]">
        <div className="rounded-full border-dark-gray">
          <img src={photoProfile} alt="userPhoto" />
          <div className="text-xl font-medium mt-4">Selamat datang,</div>
          <div className="text-4xl font-semibold mt-2">
            {user.first_name} {user.last_name}
          </div>
        </div>
      </div>
      <div className="flex w-[60%]">
        <div className="saldoHero p-6">
          <div className="bg-[#F13B2F] flex flex-col gap-3 w-[65%]">
            <div className="text-white text-lg font-medium">Saldo anda</div>
            <div className="text-white text-3xl font-medium">
              Rp{" "}
              <span className="ml-2">
                {saldoVisibility
                  ? balance
                  : `\u2022 \u2022 \u2022 \u2022 \u2022 \u2022`}
              </span>
            </div>
            <div className="text-white text-sm font-medium">
              <span className="">Lihat Saldo</span>{" "}
              <span className="ml-2 cursor-pointer" onClick={()=>setSaldoVisibility(!saldoVisibility)}>
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
