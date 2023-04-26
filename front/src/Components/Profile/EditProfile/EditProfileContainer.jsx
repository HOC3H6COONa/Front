import React from 'react'
import EditProfile from "./EditProfile";
import {connect} from "react-redux";


let mapStateToProps = (state) =>{
    return {
        state: state.auth
    }
}

export default connect(mapStateToProps,{

} )(EditProfile);