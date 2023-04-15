import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
});

export const AuthApi = {
    getAuth(){
        return instance.get('auth/me')
            .then(response =>{
                return response.data;
            });
    }
}