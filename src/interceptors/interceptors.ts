import axios, { AxiosError, AxiosHeaders } from "axios";
import { AuthResponse } from "../models/response/auth.response";

export const API_URL = "http://localhost:9001"

const $api = axios.create({
    withCredentials: true,
    baseURL: API_URL,
});

$api.interceptors.request.use(config => {
    const token = localStorage['token'];
    if (token === null) return config;
    config.headers.Authorization = `Bearer ${token}`;
    return config;
});

$api.interceptors.response.use(config => {
    return config;
}, async (requestError: AxiosError) => {
    if (requestError.response?.status === 401 && !requestError.request.IsRetry) {
        requestError.request.IsRetry = true;
        try {
            const response = await axios.get<AuthResponse>(`${API_URL}/auth/refresh`, { withCredentials: true });
            localStorage.setItem("token", response.data.userData.AccessToken);
            return $api.request(requestError.request);
        }
        catch (err) {
            console.error("Unauthorized!");
        }
    }
    throw requestError;
});

export default $api;