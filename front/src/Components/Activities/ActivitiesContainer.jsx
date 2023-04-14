import React from 'react';
import Activities from "./Activities";
import {connect} from "react-redux";

let mapStateToProps = (state) =>{
    return {
        activities: state.activitiesPage.events
    }
}

// let mapDispatchToProps = (dispatch) =>{
//     return{
//         follow: (userId) => {
//             dispatch(followActionCreator(userId))
//         },
//         unfollow: (userId) => {
//             dispatch(UnfollowActionCreator(userId))
//         },
//         setUsers: (users) =>{
//             dispatch(setUsersAC(users))
//         }
//     }
// }

export default connect(mapStateToProps)(Activities);