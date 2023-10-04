import React, { useState } from "react";
import Input from "../components/Elements/Input";
import { parsingRibuan } from "../helpers";

function TopUpPage() {
  const [formData, setFormData] = useState({ top_up_ammount: "" });
  const isDisabled = formData.top_up_ammount === "" ? true : false;
  const nominalOptions = [10000, 20000, 50000, 100000, 250000, 500000];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
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
              name="top_up_ammount"
              placeholder="masukan nominal top up"
              icon="icon-money"
              cn="w-full remove-arrow"
              value={formData.top_up_ammount}
              onChange={handleInputChange}
            />
            <button
              type="button"
              disabled={isDisabled}
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
                      top_up_ammount: nominal,
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
    </div>
  );
}

export default TopUpPage;
