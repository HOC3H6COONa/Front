import {instance} from "./AxiosInstances/axiosInstance";

export const ProfileApi = {
    getProfile(userId){
        return instance.get('profile/'+userId)
            .then(response =>{
                return response.data;
            });
    }
}
