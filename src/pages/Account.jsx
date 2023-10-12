import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { logout } from "../redux/slices/authSlice";
import { fetchUserData, logOutUser } from "../redux/slices/userSlice";
import { purgeStoredState } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import FormEdit from "../components/Fragments/FormEdit";
import toast, { Toaster } from "react-hot-toast";
import { uploadImage } from "../api/user";

function AccountPage() {
  const token = useSelector((state) => state.auth.token);
  const user = useSelector((state) => state.user.data);
  const [isDisabled, setIsDisabled] = useState(true);
  const [hasImage, setHasImage] = useState(false);
  const dispatch = useDispatch();
  const inputRef = useRef(null);
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

  function handleChangePhoto() {
    inputRef.current.click();
  }

  async function handleUploadPhoto(e) {
    const photo = e.target.files[0];
    if (photo.size > 100000) {
      toast.error("Ukuran file terlalu besar. Maksimal 100kb");
    }
    if (photo.type !== "image/jpeg" && photo.type !== "image/png") {
      toast.error(
        "Format file tidak didukung. Hanya menerima file .jpg dan .png"
      );
    }

    const formData = new FormData();
    formData.append("file", photo);

    const upload = await uploadImage(token, formData);
    if(upload.status === 0){
      toast.success("Foto berhasil diubah")
      dispatch(fetchUserData(token));
    } else {
      toast.error(upload.message)
    }
  }

  useEffect(() => {
    dispatch(fetchUserData(token));
    if (!user.profile_image.includes("null")) {
      setHasImage(true);
    }
  }, []);

  return (
    <>
      <Toaster />
      {user ? (
        <div className="flex flex-col justify-center items-center">
          <div
            className="relative border border-gray rounded-full bg-white cursor-pointer "
            onClick={handleChangePhoto}
          >
            <img
              src={hasImage ? user.profile_image : "/Profile Photo.png"}
              alt="profile photo"
              width={100}
              height={100}
              style={{borderRadius: "50%"}}
              className="hover:brightness-75"
            />
            <i className="icon-pencil rounded-full border border-dark-gray p-1 bg-white absolute right-0 bottom-1"></i>
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
              onClick={() =>
                isDisabled ? handleLogout() : setIsDisabled(true)
              }
            >
              {isDisabled ? "Logout" : "Batalkan"}
            </button>
          </div>
          <input
            type="file"
            name="file"
            id="file"
            ref={inputRef}
            className="hidden"
            onChange={handleUploadPhoto}
          />
        </div>
      ) : (
        <div className="text-2xl font-semibold my-5 flex justify-center items-center">
          Loading...
        </div>
      )}
    </>
  );
}

export default AccountPage;
