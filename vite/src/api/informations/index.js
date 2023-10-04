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
}

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
}

