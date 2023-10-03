import React, { useState } from "react";
import Input from "../Elements/Input";

function FormLogin() {
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
            type="password"
            name="password"
            placeholder="masukan password anda"
            icon="icon-lock"
            visibility={true}
          />
          <button type="submit" className="rounded bg-red text-center p-2 text-sm text-white mt-3">
            Masuk
          </button>
        </div>
      </form>
    </>
  );
}

export default FormLogin;
