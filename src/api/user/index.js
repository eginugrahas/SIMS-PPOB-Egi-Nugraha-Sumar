import axios from "axios";

const API_BASE_URL = "https://take-home-test-api.nutech-integrasi.app";

export const getUser = async (token) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/profile`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const updateUser = async (token, formData) => {
  try {
    const response = await axios.put(
      `${API_BASE_URL}/profile/update`,
      formData,
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

export const uploadImage = async (token, formData) => {
  try {
    const response = await axios.put(`${API_BASE_URL}/profile/image`, formData, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};
