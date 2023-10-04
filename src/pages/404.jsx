import { useRouteError } from "react-router-dom";
import errorImg from "/404-image.png";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div className="flex flex-col gap-3 justify-center items-center min-h-screen bg-red bg-opacity-20">
      <img src={errorImg} alt="errorImg" width={"30%"} height={"30%"} />
      <div className="text-center font-bold text-xl">OOPS!!</div>
      <div className="text-center text-sm">{error.statusText || error.message}</div>
      <div className="text-center text-sm underline underline-offset-1"><span>{"<-- "}</span><a href="/">Kembali ke Halaman Utama</a></div>
    </div>
  );
};

export default ErrorPage;
