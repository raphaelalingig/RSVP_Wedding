import axios from "axios";

// const BASE_URL = "http://localhost:5000/api/v1/";
const BASE_URL = "rsvp.up.railway.app/api/v1/";

const api_url = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api_url;
