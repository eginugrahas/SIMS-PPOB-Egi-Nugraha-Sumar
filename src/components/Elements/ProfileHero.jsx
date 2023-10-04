import React, { useEffect, useState } from "react";
import photoProfile from "/Profile Photo.png";
import { useDispatch, useSelector } from "react-redux";
import { fetchBalance } from "../../redux/slices/transactionSlice";
import { parsingRibuan } from "../../helpers";

function ProfileHero() {
  const token = useSelector((state) => state.auth.token);
  const user = useSelector((state) => state.user);
  const balance = useSelector((state) => state.transaction.balance);
  const dispatch = useDispatch();
  const [saldoVisibility, setSaldoVisibility] = useState(false);

  useEffect(() => {
    dispatch(fetchBalance(token))
  }, [])
  
  return (
    <div className="flex justify-between items-center mb-10">
      <div className="flex flex-col w-[40%]">
        <div className="rounded-full border-dark-gray">
          <img src={photoProfile} alt="userPhoto" />
          <div className="text-xl font-medium mt-4">Selamat datang,</div>
          <div className="text-4xl font-semibold mt-2">
            {user.data ? user.data.first_name : ""} {user.data ? user.data.last_name : ""}
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
                  ? parsingRibuan(balance.balance ? balance.balance : 0)
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
