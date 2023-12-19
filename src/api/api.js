import axios from "axios";

const token = localStorage.getItem("token");

export const api = axios.create({
  baseURL: "https://workintech-fe-ecommerce.onrender.com/",
  headers: {
    Authorization: token,
  },
});