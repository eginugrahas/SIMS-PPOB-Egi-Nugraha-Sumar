import React, { useState } from "react";
import Input from "../Elements/Input";

function FormRegister() {
  return (
    <>
      <form action="">
        <div className="flex flex-col gap-5 w-72">
          <Input
            type="email"
            name="email"
            placeholder="masukan email anda"
            icon="icon-at"
          />
          <Input
            type="text"
            name="first_name"
            placeholder="nama depan"
            icon="icon-account"
          />
          <Input
            type="text"
            name="last_name"
            placeholder="nama belakang"
            icon="icon-account"
          />
          <Input
            type="password"
            name="password"
            placeholder="buat password"
            icon="icon-lock"
            visibility={true}
          />
          <Input
            type="password"
            name="password"
            placeholder="konfirmasi password"
            icon="icon-lock"
            visibility={true}
          />
          <button type="submit" className="rounded bg-red text-center p-2 text-sm text-white mt-3">
            Registrasi
          </button>
        </div>
      </form>
    </>
  );
}

export default FormRegister;
