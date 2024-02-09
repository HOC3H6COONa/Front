import axios from "axios";

const API_URL = `http://127.0.0.1:8000/`

export const instance = axios.create({
    withCredentials: true,
    baseURL: API_URL,
});


instance.interceptors.request.use((config)=>{
    if (localStorage.getItem('token')){
        config.headers.Authorization = `JWT ${localStorage.getItem('token')}`
    }
    return config;
})

instance.interceptors.response.use((config)=> {
    return config;
}, async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && error.config && !error.config._isRetry) {
        originalRequest._isRetry = true
        try {
            const response = await axios.post(`${API_URL}auth/login/refresh/`, {}, {withCredentials: true});
            localStorage.setItem('token', response.data.access);
            return instance.request(originalRequest);
        } catch (e) {
            console.log('USER NOT AUTHORIZED')
        }
    }
    else if (error.response.status === 401 && error.config._isRetry){
        localStorage.removeItem('token')
        return instance.request(originalRequest);
    }
    throw error;
})