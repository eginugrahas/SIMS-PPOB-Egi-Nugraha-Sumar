import React from "react";
import { parsingRibuan } from "../../helpers";

function Modal({ isOpen, onClose, type, amount, onSubmit, status, service }) {
  if (!isOpen) {
    return null;
  }

  function handleDashboard() {
    window.location.href = "/";
  }

  let content = {
    title: "",
    desc: "",
    amount: amount,
    button: "",
    imgStatus: "",
  };

  switch (type) {
    case "topup":
      switch (status) {
        case "pending":
          content.title = "Anda yakin untuk Top Up sebesar";
          content.button = "Ya, lanjutkan Top Up";
          content.imgStatus = "Logo";
          break;
        case "success":
          content.title = "Top Up sebesar";
          content.desc = "berhasil";
          content.button = "Kembali ke Beranda";
          content.imgStatus = "success";
          break;
        case "rejected":
          content.title = "Anda yakin untuk Top Up sebesar";
          content.desc = "gagal";
          content.imgStatus = "rejected";
          content.button = "Kembali ke Beranda";
          break;
        default:
          break;
      }
      break;
    case "service":
      switch (status) {
        case "pending":
          content.title = `Beli ${service} senilai`;
          content.button = "Ya, lanjutkan Bayar";
          content.imgStatus = "Logo";
          break;
        case "success":
          content.title = `Bayar ${service} sebesar`;
          content.desc = "berhasil";
          content.button = "Kembali ke Beranda";
          content.imgStatus = "success";
          break;
        case "rejected":
          content.title = `Bayar ${service} sebesar`;
          content.desc = "gagal";
          content.imgStatus = "rejected";
          content.button = "Kembali ke Beranda";
          break;
        default:
          break;
      }
      break;
    default:
      break;
  }

  return (
    <div className={`modal ${isOpen ? "open" : ""}`} onClick={onClose}>
      <div
        className="modal-content flex flex-col gap-5 items-center py-5 px-10"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={`/${content.imgStatus}.png`}
          alt="logo"
          width={50}
          height={50}
        />
        <div className="text-center">
          <div className="text-sm">{content.title}</div>
          <div className="font-semibold text-xl">
            Rp{parsingRibuan(content.amount)} {status != "pending" ? "" : "?"}
          </div>
          <div className="text-sm">
            {status != "pending" ? content.desc : ""}
          </div>
        </div>
        <button
          className="text-red font-medium"
          onClick={status != "pending" ? handleDashboard : onSubmit}
        >
          {content.button}
        </button>
        <button
          className={`text-dark-gray font-medium ${
            status != "pending" ? "hidden" : ""
          }`}
          onClick={onClose}
        >
          Batalkan
        </button>
      </div>
    </div>
  );
}

export default Modal;
