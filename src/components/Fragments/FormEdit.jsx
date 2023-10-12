import React, { useState } from "react";
import Input from "../Elements/Input";
import { registerFailure, registerSuccess } from "../../redux/slices/authSlice";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { updateUser } from "../../api/user";
import { useSelector } from "react-redux";
import { setUser, updateUserData } from "../../redux/slices/userSlice";
import { useNavigate } from "react-router-dom";

function FormEdit({ user, isDisabled, setIsDisabled }) {
  const token = useSelector((state) => state.auth.token);
  const [formData, setFormData] = useState({
    email: user.email,
    first_name: user.first_name,
    last_name: user.last_name,
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
      dispatch(updateUserData(token, formData)).then((res) => {
        if (res.payload.status === 0) {
          setIsDisabled(true);
          toast.success("Update profil berhasil");
        } else {
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
    <div className="flex flex-col w-full md:w-[60%]">
      <form onSubmit={handleSubmit}>
        <Input
          type="email"
          name="email"
          placeholder="masukan email anda"
          icon="icon-at"
          value={formData.email}
          isDisabled={isDisabled}
          onChange={handleInputChange}
        />
        <Input
          type="text"
          name="first_name"
          placeholder="nama depan"
          icon="icon-account"
          value={formData.first_name}
          isDisabled={isDisabled}
          onChange={handleInputChange}
        />
        <Input
          type="text"
          name="last_name"
          placeholder="nama belakang"
          icon="icon-account"
          value={formData.last_name}
          isDisabled={isDisabled}
          onChange={handleInputChange}
        />
        <button
          type="submit"
          className={`rounded bg-red text-center p-2 text-sm text-white mt-3 font-medium w-full ${
            isDisabled ? "hidden" : ""
          }`}
        >
          Simpan
        </button>
      </form>
    </div>
  );
}

export default FormEdit;
