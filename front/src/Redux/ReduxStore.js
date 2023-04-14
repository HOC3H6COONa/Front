import {combineReducers, legacy_createStore as createStore} from "redux";
import {profileReducer} from "./profile-reducer";
import {mapReducer} from "./map-reducer";
import {activitiesReducer} from "./activities-reducer";
import {profileEditReducer} from "./profilecEditReducer";
import {UsersReducer} from "./users-reducer";
import authReducer from "./auth-reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    mapPage: mapReducer,
    activitiesPage: activitiesReducer,
    profileEdit: profileEditReducer,
    usersPage: UsersReducer,
    auth: authReducer
});


let store = createStore(reducers);

export default store;