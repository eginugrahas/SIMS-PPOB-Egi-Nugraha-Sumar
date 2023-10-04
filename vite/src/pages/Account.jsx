import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../redux/slices/authSlice";
import { logOutUser } from "../redux/slices/userSlice";
import { purgeStoredState } from "redux-persist";
import storage from "redux-persist/lib/storage";

function AccountPage() {
  const dispatch = useDispatch();
  const clearStorage = () => {
    purgeStoredState({ storage });
  };
  function handleLogout() {
    dispatch(logout());
    dispatch(logOutUser());
    clearStorage();
    window.location.href = "/login";
  }
  return (
    <div>
      Account Page
      <button className="bg-red" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
}

export default AccountPage;
