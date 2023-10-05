import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { formatDateTime } from "../helpers";
import { fetchTransactions } from "../redux/slices/transactionSlice";
import { useDispatch } from "react-redux";

function TransactionPage() {
  const token = useSelector((state) => state.auth.token);
  const transaction = useSelector((state) => state.transaction.transaction);
  const dispatch = useDispatch();
  const [params, setParams] = useState({
    token: token,
    offset: 0,
  });
  function handleShowMore() {
    const nextOffset = params.offset + 5;
    setParams({
      ...params,
      offset: nextOffset,
    });
    dispatch(fetchTransactions(params));
  }
  useEffect(() => {
    dispatch(fetchTransactions(params));
  }, []);

  return (
    <div className="">
      <div className="text-lg my-3">Semua Transaksi</div>
      <div className="flex flex-col gap-4">
        {transaction ? (
          transaction.map((item) => {
            return (
              <div
                id={item.invoice_number}
                className="border flex justify-between border-gray rounded p-3 w-full items-center"
              >
                <div className="">
                  <div
                    className={`${
                      item.transaction_type === "TOPUP"
                        ? "text-light-green"
                        : "text-red"
                    } font-medium `}
                  >
                    {item.transaction_type === "TOPUP" ? "+ " : "- "}
                    {item.total_amount}
                  </div>
                  <div className="text-xs text-gray">
                    {formatDateTime(item.created_on)}
                  </div>
                </div>
                <div className="text-sm">{item.description}</div>
              </div>
            );
          })
        ) : (
          <div className="text-center">Belum ada transaksi</div>
        )}
      </div>
      <div
        className={`text-center text-red text-sm mt-4 cursor-pointer ${transaction.length < 5 && "hidden"}`}
        onClick={handleShowMore}
      >
        Show more
      </div>
    </div>
  );
}

export default TransactionPage;
