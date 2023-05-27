import {DefaultInstance} from "./AxiosInstances/DefaultInstance";

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
        return DefaultInstance.get('event/')
            .then(response => {
                return response.data;
            })
    },

    getEvent(eventId) {
        return DefaultInstance.get('event/'+eventId)
            .then(response =>{
                return response.data
            })
    }
}

