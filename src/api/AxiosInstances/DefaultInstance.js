import axios from "axios";

 export const DefaultInstance = axios.create({
    withCredentials: true,
    baseURL: `http://127.0.0.1:8000/`,
});
