import React, { useState } from "react";
import Input from "../Elements/Input";
import { registerUser } from "../../api/auth";
import { registerFailure, registerSuccess } from "../../redux/slices/authSlice";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

function FormRegister() {
  const [formData, setFormData] = useState({
    email: "",
    first_name: "",
    last_name: "",
    password: "",
    confirm_password: "",
  });
  const dispatch = useDispatch();
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
      const { confirm_password, ...newFormData } = formData;
      const response = await registerUser(newFormData).then((res) => {
        console.log(res);
        if (res.status === 0) {
          console.log('berhasil')
          dispatch(registerSuccess(res));
          toast.success("Registrasi berhasil");
          navigate("/login")
        } else {
          dispatch(registerFailure(res));
          toast(
            (t) => (
              <div className="flex items-center w-full rounded text-red text-sm gap-5">
                <div>{res.message}</div>
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
    <>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col w-72">
          <Input
            type="email"
            name="email"
            placeholder="masukan email anda"
            icon="icon-at"
            value={formData.email}
            onChange={handleInputChange}
          />
          <Input
            type="text"
            name="first_name"
            placeholder="nama depan"
            icon="icon-account"
            value={formData.first_name}
            onChange={handleInputChange}
          />
          <Input
            type="text"
            name="last_name"
            placeholder="nama belakang"
            icon="icon-account"
            value={formData.last_name}
            onChange={handleInputChange}
          />
          <Input
            type="password"
            name="password"
            placeholder="buat password"
            icon="icon-lock"
            visibility={true}
            value={formData.password}
            onChange={handleInputChange}
          />
          <Input
            type="password"
            name="confirm_password"
            placeholder="konfirmasi password"
            icon="icon-lock"
            visibility={true}
            value={formData.confirm_password}
            passwordValue={formData.password}
            onChange={handleInputChange}
          />
          <button
            type="submit"
            className="rounded bg-red text-center p-2 text-sm text-white mt-3"
          >
            Registrasi
          </button>
        </div>
      </form>
    </>
  );
}

export default FormRegister;
