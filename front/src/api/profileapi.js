import {DefaultInstance} from "./AxiosInstances/DefaultInstance";


export const ProfileApi = {
    getProfile(userId){
        return DefaultInstance.get('user/'+userId)
            .then(response =>{
                return response.data;
            });
    }
}
