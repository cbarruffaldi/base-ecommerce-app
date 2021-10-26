import axios from "axios";

const BASE_URL="http://localhost:5000/api/";
const USER = JSON.parse(localStorage.getItem("persist:root")).user;
const TOKEN = USER === null || JSON.parse(USER).currentUser === null ? undefined : JSON.parse(USER).currentUser.accessToken;

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: { tokem: `Bearer ${TOKEN}`}
});

