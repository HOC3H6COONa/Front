import React from 'react'
import {updateName,Confirm,updateGender,updateCity,updateAge} from "../../../Redux/profilecEditReducer";
import EditProfile from "./EditProfile";
import {useNavigate} from "react-router-dom";
import {connect} from "react-redux";


let mapStateToProps = (state) =>{
    return {
        state: state.profileEdit
    }
}

export default connect(mapStateToProps,{
    Confirm,
    updateName,
    updateCity,
    updateAge,
    updateGender
} )(EditProfile);