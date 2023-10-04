import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getBanner, getServices } from "./api/informations";

function App() {
  const token = useSelector((state) => state.auth.token);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [services , setServices] = useState([])
  const [banners, setBanners] = useState([]);
  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
    const fetchServices = async () => {
      try {
        const service = await getServices(token);
        const banner = await getBanner(token);
        setBanners(banner.data) 
        setServices(service.data)
      } catch (error) {
        console.log(error);
      }
    }
    fetchServices()
    console.log(banners)
  }, [token]);

  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-start justify-between">
        {
          services.map((service)=>{
            return (
              <div className="text-center flex flex-col items-center justify-center cursor-pointer" key={service.service_code}>
                <img src={`/src/assets/${service.service_name}.png`} width={70} height={70} alt={service.service_code} />
                <div className="text-sm mt-2">{service.service_name.replace(/Berlangganan/g, "")}</div>
              </div>
            )
          })
        }
      </div>
      <div className="font-medium">Temukan promo menarik</div>
      <div className="flex justify-between  item-center overflow-x-auto">
        {
          banners.map((banner)=>{
            return(
              <div className="mx-3" key={banner.banner_name}>
                <img src={`/src/assets/${banner.banner_name}.png`} alt={banner.banner_name} />
              </div>
            )
          })
        }
      </div>
    </div>
  );
}

export default App;
