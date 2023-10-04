import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import MainLayout from "./layout/mainLayout";
import { logout } from "./redux/slices/authSlice";

function App() {
  const token = useSelector((state) => state.auth.token);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [token]);

  return (
    <>
      <MainLayout>
        <button className="border rounded p-2 bg-red text-white" onClick={()=>dispatch(logout())}>Logout</button>
      </MainLayout>
    </>
  );
}

export default App;
