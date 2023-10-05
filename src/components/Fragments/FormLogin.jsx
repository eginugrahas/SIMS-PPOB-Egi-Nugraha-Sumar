import React, { useState } from "react";
import Input from "../Elements/Input";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { login } from "../../redux/slices/authSlice";

function FormLogin() {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(login(formData)).then((res) => {
        if (res.type === "auth/loginSuccess") {
          toast.success("Login berhasil");
          navigate("/");
        } else {
          toast(
            (t) => (
              <div className="flex items-center w-full rounded text-red text-sm gap-5">
                <div>{res.payload}</div>
                <button
                  className="font-bold"
                  onClick={() => toast.dismiss(t.id)}
                >
                  X
                </button>
              </div>
            ),
            {
              style: {
                background: "#FFCBC8",
              },
            }
          );
        }
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex flex-col gap-5 w-72">
      <form onSubmit={handleSubmit}>
        <Input
          type="email"
          name="email"
          placeholder="masukan email anda"
          icon="icon-at"
          value={formData.email}
          onChange={handleInputChange}
        />
        <Input
          type="password"
          name="password"
          placeholder="masukan password anda"
          icon="icon-lock"
          visibility={true}
          value={formData.password}
          onChange={handleInputChange}
        />
        <button
          type="submit"
          className="rounded bg-red text-center p-2 text-sm text-white mt-3 w-full font-medium"
        >
          Masuk
        </button>
      </form>
    </div>
  );
}

export default FormLogin;
