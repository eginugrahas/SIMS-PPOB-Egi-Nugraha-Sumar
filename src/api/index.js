import axios from "axios";

const API_BASE_URL = "https://take-home-test-api.nutech-integrasi.app";

export const loginUser = async (formData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/login`, formData);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};


export const registerUser = async (formData) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/register`, formData);
      return response.data; 
    } catch (error) {
      return error.response.data;
    }
  };