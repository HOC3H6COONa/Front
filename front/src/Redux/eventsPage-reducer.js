import {EventsApi} from "../api/eventsapi";

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

