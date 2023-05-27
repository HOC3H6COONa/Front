import React from 'react';
import {connect} from "react-redux";
import Registration from "./Registration";



class RegistrationContainer extends React.Component {

    render(){
        return (
            <Registration {...this.props}/>
        )
    }
}


let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    AuthId: state.auth.userid,
});



export default connect(mapStateToProps,{register})(RegistrationContainer);