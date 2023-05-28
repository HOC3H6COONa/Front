import {instance} from "./AxiosInstances/axiosInstance";
import {DefaultInstance} from "./AxiosInstances/DefaultInstance";



export const AuthApi = {
    getAuth(){
        return instance.get('auth/get_full_user_data/')
            .then(response =>{
                return response;
            });
    },

    Login(email, password){
        return instance.post(`auth/login/`,{email,password})
    },

    Register(email,image,name,gender,birthday,password){
        return DefaultInstance.post('auth/register/',{email,image,name,gender,birthday,password})
    },

    Logout(){
        return instance.delete(`login/`)
    },

}