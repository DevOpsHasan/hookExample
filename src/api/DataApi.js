import axios from "axios";
const REACT_APP_API_URL = `https://localhost:44394/api`;

export default axios.create({
  baseURL: REACT_APP_API_URL,
});
