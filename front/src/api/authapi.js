import {instance} from "./AxiosInstances/axiosInstance";



export const AuthApi = {
    getAuth(){
        return instance.get('get_full_user_data/')
            .then(response =>{
                return response;
            });
    },

    Login(email, password){
        return instance.post(`login/`,{email,password})
    },

    Logout(){
        return instance.delete(`login/`)
    },

}