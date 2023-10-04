import React, { useState } from "react";
import Input from "../components/Elements/Input";
import { parsingRibuan } from "../helpers";
import { useSelector } from "react-redux";
import { topUp } from "../api/transactions";
import Modal from "../components/Elements/Modal";

function TopUpPage() {
  const [formData, setFormData] = useState({ top_up_amount: "" });
  const isDisabled =
    formData.top_up_amount === ""
      ? true
      : formData.top_up_amount < 10000
      ? true
      : formData.top_up_amount > 1000000
      ? true
      : false;
  const nominalOptions = [10000, 20000, 50000, 100000, 250000, 500000];
  const token = useSelector((state) => state.auth.token);
  const [status, setStatus] = useState("pending");
  const [isOpenModal, setIsOpenModal] = useState(false);

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
      const res = await topUp(token, formData);
      if (res.status != 0) {
        setStatus("rejected");
      } else {
        setStatus("success");
      }
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <div className="text-lg mt-4">Silahkan masukan</div>
      <div className="text-3xl font-medium mt-1">Nominal Top Up</div>
      <div className="mt-5">
        <div className="flex justify-between">
          <div className="w-[67%]">
            <Input
              type="number"
              name="top_up_amount"
              placeholder="masukan nominal top up"
              icon="icon-money"
              cn="w-full remove-arrow"
              value={formData.top_up_amount}
              onChange={handleInputChange}
            />
            <button
              type="button"
              disabled={isDisabled}
              onClick={() => setIsOpenModal(true)}
              className="rounded bg-red disabled:bg-dark-gray text-center p-2 text-sm text-white mt-1 w-full"
            >
              Top Up
            </button>
          </div>
          <div className="grid grid-cols-3 gap-3 text-sm text-center">
            {nominalOptions.map((nominal, i) => {
              return (
                <div
                  className="border rounded py-2 px-4 flex items-center hover:bg-gray cursor-pointer border-dark-gray"
                  key={i}
                  onClick={() =>
                    setFormData((prevData) => ({
                      ...prevData,
                      top_up_amount: nominal,
                    }))
                  }
                >
                  {`Rp${parsingRibuan(nominal)}`}
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <Modal
        isOpen={isOpenModal}
        onClose={() => setIsOpenModal(false)}
        type="topup"
        amount={formData.top_up_amount}
        onSubmit={handleSubmit}
        status={status}
      />
    </div>
  );
}

export default TopUpPage;
