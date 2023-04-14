import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import axios from "axios";
import {setAuthUserData} from "../../Redux/auth-reducer";
import {AuthApi} from "../../api/authapi";




class HeaderContainer extends React.Component {

    componentDidMount() {
        AuthApi.getAuth()
            .then(data => {
                debugger;
                if (data.resultCode === 0){
                    let {Id,email,login} = data.data;
                    this.props.setAuthUserData(Id,email,login);
                }
            });
    }

    render(){
        return (
            <Header {...this.props}/>
        )
    }
}


let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
});


export default connect(mapStateToProps,{setAuthUserData})(HeaderContainer);