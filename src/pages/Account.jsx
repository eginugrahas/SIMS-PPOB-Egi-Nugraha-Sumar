import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../redux/slices/authSlice";
import { logOutUser } from "../redux/slices/userSlice";
import { purgeStoredState } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { useNavigate } from "react-router-dom";

function AccountPage() {
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
