import React, { useState } from "react";
import Input from "../Elements/Input";
import { useDispatch } from "react-redux";
import { loginUser } from "../../api";
import { loginSuccess } from "../../redux/slices/userSlice";
import toast from "react-hot-toast";

function FormLogin() {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({ email: "", password: "" });

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
      const response = await loginUser(formData).then((res) => {
        if (res.status === 200) {
          dispatch(loginSuccess(res));
        } else {
          toast((t) => (
            <div className="flex items-center w-full rounded text-red text-sm gap-5">
              <div>{res.message}</div>
              <button className="font-bold" onClick={() => toast.dismiss(t.id)}>
                X
              </button>
            </div>
          ), {
            style: {
              background: '#FFCBC8',
            }
          });
        }
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-5 w-72">
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
            className="rounded bg-red text-center p-2 text-sm text-white mt-3"
          >
            Masuk
          </button>
        </div>
      </form>
    </>
  );
}

export default FormLogin;
