import axios from "axios";

export const apiErrorResponse = async (error) => {
  if (error.response) {
    if (error?.response?.data?.error === "Unauthorized") {
      await instance.post("/auth/logout");
    }
  } else if (error?.request) {
    console.log(error.request);
  } else {
    console.log("Error", error.message);
  }
};

const instance = axios.create({
  // baseURL: "https://rcea-backend-production.up.railway.app/api/v1",
  baseURL: process.env.REACT_APP_API || "http://localhost:4000/api/v1",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("token")}` || "",
  },
});

instance.interceptors.request.use((config) => config);

instance.interceptors.response.use(
  (response) => response,
  (error) => {
    apiErrorResponse(error);

    return Promise.reject(error);
  }
);

export default instance;
