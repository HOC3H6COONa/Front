import {applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";
import {profileReducer} from "./profile-reducer";
import {mapReducer} from "./map-reducer";
import {profileEditReducer} from "./profilecEditReducer";
import {UsersReducer} from "./users-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from "redux-thunk";
import {appReducer} from "./app-reducer";
import {eventsPageReducer} from "./eventsPage-reducer";
import {SingleEventReducer} from "./SingleEvent-reducer";


let reducers = combineReducers({
    profilePage: profileReducer,
    mapPage: mapReducer,
    eventsPage: eventsPageReducer,
    profileEdit: profileEditReducer,
    usersPage: UsersReducer,
    auth: authReducer,
    app: appReducer,
    SingleEvent: SingleEventReducer

});


let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;