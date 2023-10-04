import axios from "axios";

const API_BASE_URL = "https://take-home-test-api.nutech-integrasi.app";

export const getBalance = async (token) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/balance`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const getTransactionHistory = async (token) => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}/transaction/history?offset=0&limit=5`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const topUp = async (token, amount) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/topup`, amount, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};
