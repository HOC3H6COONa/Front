import {UsersApi} from "../api/usersapi";

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'

let InitialState ={
    users: [
        {id:null,image:null,name:null,gender:null,age:null},
/*        {id:1, photourl: 'https://shikimori.one/system/characters/original/87275.jpg',
            followed: true, fullName: 'Artem', gender:'Male',age:'21',city: 'Moscow'},
        {id:2, photourl: 'https://shikimori.one/system/characters/original/87275.jpg',
            followed: false, fullName: 'Ivan', gender:'Male',age:'21',city: 'Karabanovo'},
        {id:3, photourl: 'https://shikimori.one/system/characters/original/87275.jpg',
            followed: true, fullName: 'Dima', gender:'Male',age:'21',city: 'Moscow'},
        {id:4, photourl: 'https://shikimori.one/system/characters/original/87275.jpg',
            followed: false, fullName: 'Kaneki Ken', gender:'Male',age:'17', city: 'Tokyo'},*/
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

export const getUsersThunkCreator = () => {
    return (dispatch) => {
        UsersApi.getUsers()
            .then(data => {
                dispatch(setUsers(data));
            });
    }
}