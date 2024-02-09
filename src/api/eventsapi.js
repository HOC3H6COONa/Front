import {DefaultInstance} from "./AxiosInstances/DefaultInstance";
import {instance} from "./AxiosInstances/axiosInstance";

if (localStorage.getItem('token')) {
    DefaultInstance.interceptors.request.use((config) => {
        config.headers.Authorization = `JWT ${localStorage.getItem('token')}`
        return config;
    })
} else {
    DefaultInstance.interceptors.request.use((config) => {
        config.headers.Authorization = null;
        return config;
    })
}

export const EventsApi = {
    getEvents() {
        return instance.get('event/')
            .then(response => {
                return response.data;
            })
    },

    getEvent(eventId) {
        return instance.get('event/'+eventId)
            .then(response =>{
                return response.data
            })
    },
    NewEvent(title,category,location,description,time) {
        return instance.post('event/create/',{title,category,location,description,time})
            .then(response =>{
                return response
            })
    },
    editEvent(title,category,location,description,time,id) {
        return instance.put(`event/${id}/update/`,{title,category,location,description,time})
            .then(response =>{
                return response
            })
    },
    joinEvent(id){
        return instance.post(`event/${id}/participate/`)
            .then(response=>{
                return response
            })
    },
    quitEvent(id){
        return instance.post(`event/${id}/cancel_participation/`)
            .then(response=>{
                return response
            })
    },
    deleteEvent(id){
        return instance.delete(`event/${id}/delete/`)
            .then(response=>{
                return response
            })
    },
    kickUser(eventId,userId){
        return instance.post(`event/${eventId}/kick/${userId}/`)
            .then(response=>{
                return response
            })
    }
}

