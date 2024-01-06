import {EventsApi} from "../api/eventsapi";

const SET_EVENT = 'SET_EVENT'

let initialStateEvent ={
    Event:
        {
            id: null,
            title: null,
            category: {
                id: null,
                title:null
            },
            host:{
                id: null,
                image: null,
                name: null,
                is_following: null
            },
                 participants: [
                     {
                         id: null,
                         image: null,
                         name: null,
                         is_following: null
                     }
                 ],
            location: null,
            description: null,
            time: null,
            is_participating: null
        }
}


export const SingleEventReducer = (state = initialStateEvent, action)=>{

    switch (action.type){
        case SET_EVENT:
            return{...state, Event: action.Event}
        default:
            return state

    }
};

export const setEvent = (Event) =>({type:SET_EVENT,Event})

export const getEvent =(eventId) =>async(dispatch)=>{
    const data = await EventsApi.getEvent(eventId)
    dispatch(setEvent(data))

}

export const editEvent = (title,category,location,description,time,id) =>  async(dispatch) =>{
    const response = await EventsApi.editEvent(title,category,location,description,time,id);
    if (response.status === 200){
        return response.data.id;
    }else {
        return 'error'
    }
}

export const joinEvent = (id) =>  async(dispatch) =>{
    const response = await EventsApi.joinEvent(id);
    if (response.status !== 204) {
        return 'error'
    } else{
        dispatch(getEvent(id))
    }
}

export const quitEvent = (id) =>  async(dispatch) =>{
    const response = await EventsApi.quitEvent(id);
    if (response.status !== 204) {
        return 'error'
    } else{
        dispatch(getEvent(id))
    }
}

export const DeleteEvent = (id) =>  async(dispatch) =>{
    const response = await EventsApi.deleteEvent(id);
    if (response.status === 204){
        return 1;
    }else {
        return 'error'
    }
}