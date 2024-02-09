import {DefaultInstance} from "./AxiosInstances/DefaultInstance";
import {instance} from "./AxiosInstances/axiosInstance";

export const UsersApi = {
    getUsers(){
        return instance.get('user/')
            .then(response =>{
                return response.data;
            });
    }
}
