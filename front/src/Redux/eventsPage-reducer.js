import {EventsApi} from "../api/eventsapi";

const SET_EVENTS = 'SET_EVENTS'


let initialState ={
    eventsList: [
        {
            id: null,
            title: null,
            category: null,
            location: null,
            time: null,
        }
    ]
}


export const eventsPageReducer = (state = initialState, action)=>{

    switch (action.type){
        case SET_EVENTS:
            return{...state,eventsList: action.eventsList}
        default:
            return state

    }
};


export const setEvents = (eventsList) =>({type:SET_EVENTS,eventsList})

export const getEvents =() => async (dispatch) => {
    const data = await EventsApi.getEvents()
    dispatch(setEvents(data))
}

const SET_EVENT = 'SET_EVENT'

let initialStateEvent ={
    Event:
        {
            category: null,
            description: null,
      /*      host:{
                id: null,
                image: null,
                name: null,
            },*/
            id: null,
            location: null,
  /*          participants:[
                {

                }
            ],*/
            time: null,
            title: null,
        }
}


export const eventPageReducer = (state = initialStateEvent, action)=>{

    switch (action.type){
        case SET_EVENT:
            return{...state,Event: action.Event}
        default:
            return state

    }
};

export const setEvent = (Event) =>({type:SET_EVENT,Event})

export const getEvent =(eventId) =>async(dispatch)=>{
    const data = await EventsApi.getEvent(eventId)
    dispatch(setEvent(data))

}
