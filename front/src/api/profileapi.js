import {DefaultInstance} from "./AxiosInstances/DefaultInstance";
import {instance} from "./AxiosInstances/axiosInstance";


export const ProfileApi = {
    getProfile(userId){
        return DefaultInstance.get('user/'+userId)
            .then(response =>{
                return response.data;
            });
    },

    editProfile(Image,Name,Gender,Birthday){
        return instance.patch('update_user_data/',
            {
                image:Image,
                name: Name,
                gender:Gender,
                birthday:Birthday
            })
    }
}
