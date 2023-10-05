import React, { useEffect, useState } from "react";
import Modal from "../components/Elements/Modal";
import Input from "../components/Elements/Input";
import { useParams } from "react-router-dom";
import { getOneService } from "../api/informations";
import { useSelector } from "react-redux";
import { parsingRibuan } from "../helpers";
import { serviceTransaction } from "../api/transactions";

function ServiceTransaction() {
  const { service_code } = useParams();
  const token = useSelector((state) => state.auth.token);
  const balance = useSelector((state) => state.balance.balance);
  const [service, setService] = useState({});
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [status, setStatus] = useState("pending");

  async function handleSubmit() {
    try {
      if (balance < service.service_tariff) {
        setStatus("rejected");
        return;
      }
      const res = await serviceTransaction(token, service_code);
      if (res.status != 0) {
        setStatus("rejected");
      } else {
        setStatus("success");
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    const fetchService = async () => {
      try {
        const service = await getOneService(token, service_code);
        setService(service);
      } catch (error) {
        console.log(error);
      }
    };
    fetchService();
  }, []);

  return (
    <div>
      <div className="text-lg mt-4">Pembayaran</div>
      <div className="text-xl font-medium mt-1 flex items-center">
        <img src={service.service_icon} alt="icon" width={50} height={50} />{" "}
        <span className="ml-2 font-semibold">{service.service_name}</span>
      </div>
      <div className="mt-5">
        <div className="flex justify-between">
          <div className="w-full">
            <Input
              type="text"
              name="top_up_amount"
              icon="icon-money"
              isDisabled={true}
              cn="w-full remove-arrow"
              value={parsingRibuan(service.service_tariff)}
            />
            <button
              type="button"
              onClick={() => setIsOpenModal(true)}
              className="rounded bg-red disabled:bg-dark-gray text-center p-2 text-sm text-white mt-1 w-full"
            >
              Bayar
            </button>
          </div>
        </div>
      </div>
      <Modal
        isOpen={isOpenModal}
        onClose={() => setIsOpenModal(false)}
        type="service"
        service={service.service_name}
        amount={service.service_tariff}
        onSubmit={handleSubmit}
        status={status}
      />
    </div>
  );
}

export default ServiceTransaction;
