import { useSelector } from "react-redux";
import "./App.css";
import { useEffect, useState } from "react";
import { getBanner, getServices } from "./api/informations";
import { useNavigate } from "react-router-dom";

function App() {
  const token = useSelector((state) => state.auth.token);
  const [services, setServices] = useState([]);
  const [banners, setBanners] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchServices = async () => {
      try {
        const service = await getServices(token);
        const banner = await getBanner(token);
        setBanners(banner.data);
        setServices(service.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchServices();
  }, []);

  function handleSelectService(service_code) {
    navigate(`/service/${service_code}`);
  }

  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-start justify-between">
        {services.map((service) => {
          return (
            <div
              className="text-center flex flex-col items-center justify-center cursor-pointer"
              key={service.service_code} onClick={()=>handleSelectService(service.service_code)}
            >
              <img
                src={`${service.service_name}.png`}
                width={70}
                height={70}
                alt={service.service_code}
              />
              <div className="text-sm mt-2">
                {service.service_name.replace(/Berlangganan/g, "")}
              </div>
            </div>
          );
        })}
      </div>
      <div className="font-medium">Temukan promo menarik</div>
      <div className="flex item-center justify-between gap-3 overflow-auto pb-2">
        {banners.map((banner) => {
          return (
            <img
              key={banner.banner_name}
              src={`/${banner.banner_name}.png`}
              alt={banner.banner_name}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
