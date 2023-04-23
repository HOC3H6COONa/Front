import {getAuthUserData} from "./auth-reducer";

const INITIALISE_APP = 'INITIALISE_APP'

let initialState = {
    profile:
        {
            initialised: false
        }
}

export const appReducer = (state = initialState,action) =>{

    switch(action.type) {
        case INITIALISE_APP:
            return {...state, initialised: true};
        default:
            return state;
    }
}


export const initialiseSuccess = () => ({type: INITIALISE_APP})

export const initialiseApp = () => (dispatch) =>{
    debugger;
    if (localStorage.getItem('token')) {
        console.log(localStorage.getItem('token'))
        let promise = dispatch(getAuthUserData());
        Promise.all([promise])
            .then(() => {
                dispatch(initialiseSuccess());
            });
    }else {
        dispatch(initialiseSuccess());
    }
}
