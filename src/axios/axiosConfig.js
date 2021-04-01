import axios from "axios";
import { SERVER_URL } from "../shared/constants";

const instance = axios.create({
  baseURL: SERVER_URL,
  withCredentials: true,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
   "Access-Control-Allow-Credentials": true,
  },
});

export default instance;
