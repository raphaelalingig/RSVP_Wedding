// api_url.js
import axios from "axios";

const BASE_URL = "https://rsvp.up.railway.app/api/v1/";  // Add https://

const api_url = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true  // Add this if you need to send cookies
});

export default api_url;