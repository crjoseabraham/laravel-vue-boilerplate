import store from "./store";

const { default: axios } = require("axios");

const axiosClient = axios.create({
    baseURL: 'http://localhost:8000/api'
})

axiosClient.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${store.state.user.token}`
    return config
})
export default axiosClient