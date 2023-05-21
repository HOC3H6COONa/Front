import React from 'react'
import EditProfile from "./EditProfile";
import {connect} from "react-redux";
import {editProfile} from "../../../Redux/profile-reducer";


let mapStateToProps = (state) =>{
    return {
        state: state.auth
    }
}

export default connect(mapStateToProps,{editProfile} )(EditProfile);