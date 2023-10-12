import React, { useEffect, useState } from "react";
import photoProfile from "/Profile Photo.png";
import { useDispatch, useSelector } from "react-redux";
import { fetchBalance } from "../../redux/slices/balanceSlice";
import { parsingRibuan } from "../../helpers";
import { fetchUserData } from "../../redux/slices/userSlice";

function ProfileHero() {
  const token = useSelector((state) => state.auth.token);
  const user = useSelector((state) => state.user.data);
  const balance = useSelector((state) => state.balance);
  const [hasImage, setHasImage] = useState(false);
  const dispatch = useDispatch();
  const [saldoVisibility, setSaldoVisibility] = useState(false);

  useEffect(() => {
    dispatch(fetchBalance(token));
    dispatch(fetchUserData(token));
    if (user) {
      if (!user.profile_image.includes("null")) {
        setHasImage(true);
      }
    }
  }, []);

  return (
    <div className="md:flex lg:flex flex-col md:flex-row justify-between items-center mb-5 md:mb-10">
      <div className="flex md:flex-col w-full md:w-[40%] lg:w-[40%] gap-4">
        <div className="rounded-full border-dark-gray">
          <img
            src={hasImage ? user.profile_image : "/Profile Photo.png"}
            alt="userPhoto"
            width={70}
            height={70}
            style={{ borderRadius: "50%" }}
          />
        </div>
        <div className="flex flex-col">
          <div className="text-lg md:text-xl font-medium md:mt-2">
            Selamat datang,
          </div>
          <div className="text-2xl md:text-3xl font-semibold md:mt-2">
            {user ? user.first_name : ""} {user ? user.last_name : ""}
          </div>
        </div>
      </div>
      <div className="flex w-full md:w-[60%] mt-2 md:mt-0">
        <div className="saldoHero p-6 rounded">
          <div className="bg-[#F13B2F] flex flex-col gap-3 w-[65%] rounded">
            <div className="text-white text-md md:text-lg font-medium">Saldo anda</div>
            <div className="text-white text-2xl md:text-3xl font-medium">
              Rp{" "}
              <span className="ml-2">
                {saldoVisibility
                  ? parsingRibuan(balance.balance ? balance.balance : 0)
                  : `\u2022 \u2022 \u2022 \u2022 \u2022 \u2022`}
              </span>
            </div>
            <div className="text-white text-sm font-medium">
              <span className="">Lihat Saldo</span>{" "}
              <span
                className="ml-2 cursor-pointer"
                onClick={() => setSaldoVisibility(!saldoVisibility)}
              >
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
