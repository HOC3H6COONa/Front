import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: `http://127.0.0.1:8000/api/`,
});

export const UsersApi = {
    getUsers(){
        return instance.get('profile/')
            .then(response =>{
                return response.data;
            });
    }
}
