// api_url.js
import axios from "axios";

// const BASE_URL = "https://rsvp.up.railway.app/api/v1/";
const BASE_URL = "https://rsvpwedding.up.railway.app/api/v1/";

export const urlFormat = "https://rsvpwedding.up.railway.app/invitation/";

const api_url = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true, // Add this if you need to send cookies
});

export default api_url;
