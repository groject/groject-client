import axios from "axios";

export const instance = axios.create({
    baseURL: "http://13.209.5.13:8080",
});
