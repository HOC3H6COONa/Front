import {DefaultInstance} from "./AxiosInstances/DefaultInstance";

export const UsersApi = {
    getUsers(){
        return DefaultInstance.get('user/')
            .then(response =>{
                return response.data;
            });
    }
}
