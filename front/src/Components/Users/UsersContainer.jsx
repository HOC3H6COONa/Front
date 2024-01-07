import React from 'react';
import Users from "./Users";
import {connect} from "react-redux";
import {Follow, getUsers, setUsers, unfollow} from "../../Redux/users-reducer";




class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers();
    }

    render(){
        return (
            <Users {...this.props}/>
        )
    }
}


let mapStateToProps = (state) =>{
    return {
        users: state.usersPage.users,
    }
};


export default connect(mapStateToProps,{
    Follow,
    unfollow,
    setUsers,
    getUsers
}) (UsersContainer);