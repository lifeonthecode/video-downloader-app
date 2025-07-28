import axios from "axios";

export const api = axios.create({
  withCredentials: true,
  baseURL: import.meta.env.VITE_API_BASE_URL || "http://localhost:4000",
});

console.log(import.meta.env.VITE_API_BASE_URL)
