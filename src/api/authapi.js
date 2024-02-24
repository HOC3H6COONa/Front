import {instance} from "./AxiosInstances/axiosInstance";
import {DefaultInstance} from "./AxiosInstances/DefaultInstance";
import axios from "axios";



export const AuthApi = {
    getAuth(){
        return instance.get('auth/get_full_user_data/')
            .then(response =>{
                return response;
            });
    },

    editProfile(Image,Name,Gender,Birthday,Description){
        return instance.patch('auth/update_user_data/',
            {
                image:Image,
                name: Name,
                gender:Gender,
                birthday:Birthday,
                description:Description,
            }).then(response=>{
                return response
        })
    },

    Login(email, password){
        return DefaultInstance.post('auth/login/',{email,password})
            .then(response =>{
                return response
            })
    },

    Register(email,image,name,gender,birthday,password){
        return DefaultInstance.post('auth/register/',{email,image,name,gender,birthday,password})
    },

    Logout(){
        return axios.post(`http://127.0.0.1:8000/auth/logout/`)
    },

}