import React from 'react';
import Users from "./Users";
import {connect} from "react-redux";
import {Follow, getUsersThunkCreator, setUsers, unfollow} from "../../Redux/users-reducer";
import {UsersApi} from "../../api/usersapi";



class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsersThunkCreator();
/*        UsersApi.getUsers()
            .then(data => {
                this.props.setUsers(data);
            });*/
    }

    render(){
        return (
            <Users {...this.props}/>
        )
    }
}


let mapStateToProps = (state) =>{
    return {
        users: state.usersPage.users
    }
};


export default connect(mapStateToProps,{
    Follow,
    unfollow,
    setUsers,
    getUsersThunkCreator
}) (UsersContainer);