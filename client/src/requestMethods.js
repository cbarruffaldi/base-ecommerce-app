import axios from "axios";

const BASE_URL="http://localhost:5000/api/";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNzJhZTc5MDIxNGQyODQ4ODQ3ZDIyYyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzNDk4Mzg0MCwiZXhwIjoxNjM1MjQzMDQwfQ.-4J3hdnNvzGbhTk6iCHlJveliAnwMLW1DCAGjs-ykT8";

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: { tokem: `Bearer ${TOKEN}`}
});

