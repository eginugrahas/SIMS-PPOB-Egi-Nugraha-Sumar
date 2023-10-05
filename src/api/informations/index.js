import axios from "axios";

const API_BASE_URL = "https://take-home-test-api.nutech-integrasi.app";

export const getServices = async (token) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/services`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const getOneService = async (token, service_code) => {
  try {
    const getAllService = await getServices(token);
    const matchingService = getAllService.data.find(
      (service) => service.service_code === service_code
    );

    if (matchingService) {
      return matchingService;
    } else {
      return { error: "Service not found" };
    }
  } catch (error) {
    return error;
  }
};

export const getBanner = async (token) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/banner`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};
