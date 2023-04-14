import React from 'react';
import Users from "./Users";
import {connect} from "react-redux";
import {Follow, setUsers, unfollow} from "../../Redux/users-reducer";

let mapStateToProps = (state) =>{
    return {
        users: state.usersPage.users
    }
}

export default connect(mapStateToProps,{
    Follow,
    unfollow,
    setUsers
    }) (Users);