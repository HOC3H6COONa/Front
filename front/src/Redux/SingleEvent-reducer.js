import {EventsApi} from "../api/eventsapi";

const SET_EVENT = 'SET_EVENT'

let initialStateEvent ={
    Event:
        {
            id: null,
            title: null,
            category: null,
            host:{
                id: null,
                image: null,
                name: null,
            },
                 participants: [
                     {}
                 ],
            location: null,
            description: null,
            time: null,
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