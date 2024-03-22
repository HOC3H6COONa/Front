import {EventsApi} from "../api/eventsapi";
import {AuthApi} from "../api/authapi";
import {FORM_ERROR} from "final-form";

const SET_EVENTS = 'SET_EVENTS'


let initialState ={
    eventsList: [
        {
            id: null,
            title: null,
            host: {
                id: null,
                image: null,
                name: null,
                is_following: null
            },
            category: {
                id: null,
                title: null,
            },
            location: null,
            time: null,
            is_participating: null,
            latitude: null,
            longitude: null,
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

export const newEvent = (title,category,location,description,time,latitude,longitude) =>  async(dispatch) =>{
    const response = await EventsApi.NewEvent(title,category,location,description,time,latitude,longitude);
    if (response.status === 201){
        console.log(response)
        debugger;
        window.location.href = 'Event/' + response.data.id;
        return response;
    }else {
        return 'error'
    }
}


