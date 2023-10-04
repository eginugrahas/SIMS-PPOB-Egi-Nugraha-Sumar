import { useSelector } from "react-redux";
import "./App.css";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import MainLayout from "./layout/mainLayout";

function App() {
  const token = useSelector((state) => state.auth.token);
  const navigate = useNavigate();
  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, []);

  return (
    <>
      <MainLayout>
        Home
      </MainLayout>
    </>
  );
}

export default App;
