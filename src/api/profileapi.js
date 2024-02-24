import {DefaultInstance} from "./AxiosInstances/DefaultInstance";
import {instance} from "./AxiosInstances/axiosInstance";


export const ProfileApi = {
    getProfile(userId){
        return DefaultInstance.get('user/'+userId)
            .then(response =>{
                return response.data;
            });
    },

    getFollowingStatus(userId){
        return instance.get(`/user/`+userId)
            .then(response =>{
                return response.data.is_following;
        })
    },
    follow(userId){
        return instance.post(`user/${userId}/follow/`,{})
            .then(response =>{
                return response
            })
    },
    unfollow(userId){
        return instance.post(`user/${userId}/unfollow/`,{})
            .then(response =>{
                return response
            })
    },
}
