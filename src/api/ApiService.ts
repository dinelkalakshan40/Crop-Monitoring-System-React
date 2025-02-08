import axios from "axios";


const api = axios.create({
    baseURL: "http://localhost:3000/api/v1",
    headers: {
        'Content-Type': 'application/json',
    }
});

api.interceptors.request.use(
    (config) => {
        return config;
    },
    (error)=>{
        return Promise.reject(error)
    }
)
api.interceptors.request.use(
    (response)=>response,
    (error)=>{
        return Promise.reject(error)
    }
);
export default api;