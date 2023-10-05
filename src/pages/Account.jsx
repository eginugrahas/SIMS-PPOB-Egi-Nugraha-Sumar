import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { logout } from "../redux/slices/authSlice";
import { fetchUserData, logOutUser } from "../redux/slices/userSlice";
import { purgeStoredState } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import FormEdit from "../components/Fragments/FormEdit";
import { Toaster } from "react-hot-toast";

function AccountPage() {
  const token = useSelector((state) => state.auth.token);
  const user = useSelector((state) => state.user.data);
  const [isDisabled, setIsDisabled] = useState(true);
  const dispatch = useDispatch();
  const clearStorage = () => {
    purgeStoredState({ storage });
  };
  const navigate = useNavigate();
  function handleLogout() {
    dispatch(logout());
    dispatch(logOutUser());
    clearStorage();
    navigate("/login");
  }

  useEffect(() => {
    dispatch(fetchUserData(token));
    console.log(user, "user");
  }, []);

  return (
    <>
    <Toaster />
      {user ? (
        <div className="flex flex-col justify-center items-center">
          <div className="">
            <div className="border border-gray rounded-full">
              <img
                src="/Profile Photo.png"
                alt="profile photo"
                width={100}
                height={100}
              />
            </div>
          </div>
          <div className="text-2xl font-semibold my-5">
            {user.first_name + " " + user.last_name}
          </div>
          <FormEdit
            user={user}
            isDisabled={isDisabled}
            setIsDisabled={setIsDisabled}
          />
          <div className="mt-5 w-[60%]">
            <button
              className={`bg-red rounded p-2 text-white text-sm font-medium text-center w-full mb-3 ${
                isDisabled ? "" : "hidden"
              }`}
              onClick={() => setIsDisabled(false)}
            >
              Edit Profil
            </button>
            <button
              className="border border-red rounded p-2 text-red text-sm font-medium text-center w-full"
              onClick={() => (isDisabled ? handleLogout() : setIsDisabled(true))}
            >
              {isDisabled ? "Logout" : "Batalkan"}
            </button>
          </div>
        </div>
      ) : (
        <div className="text-2xl font-semibold my-5 flex justify-center items-center">Loading...</div>
      )}
    </>
  );
}

export default AccountPage;
