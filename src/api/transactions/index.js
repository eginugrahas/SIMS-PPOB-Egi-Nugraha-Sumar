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

export const getTransactionHistory = async (token, offset) => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}/transaction/history?offset=${offset}&limit=5`,
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

export const serviceTransaction = async (token, service_code) => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/transaction`,
      { service_code: service_code },
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
