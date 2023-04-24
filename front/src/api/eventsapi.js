import {DefaultInstance} from "./AxiosInstances/DefaultInstance";


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

