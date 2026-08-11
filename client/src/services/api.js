import axios from "axios";

const API = axios.create({
    baseURL: "http://localhost:5001/api",
});

export default API;

export const registerUser = (userData) => {
    return API.post("/auth/register", userData);
};

export const loginUser = (userData) => {
    return API.post("/auth/login", userData);
};