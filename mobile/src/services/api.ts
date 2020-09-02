import axios from "axios";

const api = axios.create({
  baseURL: "http://192.168.42.44:3333",
});

export default api;
