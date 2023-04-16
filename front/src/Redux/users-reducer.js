import {UsersApi} from "../api/usersapi";

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'

let InitialState ={
    users: [
        {id:null,image:null,name:null,gender:null,age:null},
    ]
}

export const UsersReducer = (state = InitialState, action) =>{

    switch(action.type){
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u=> {
                    if (u.id === action.userId){
                        return{...u, followed: true}
                    }
                    return u;
                })
            }

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }

        case  SET_USERS: {
            return{...state, users: action.users }
        }

        default:
            return state;
    }
}

export const Follow = (userId) => ({type: FOLLOW, userId })
export const unfollow = (userId) => ({type: UNFOLLOW, userId})
export const setUsers = (users) => ({type: SET_USERS, users })

export const getUsers = () => {
    return (dispatch) => {
        UsersApi.getUsers()
            .then(data => {
                dispatch(setUsers(data));
            });
    }
}


