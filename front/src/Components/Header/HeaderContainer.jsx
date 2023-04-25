import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {getAuthUserData, logout} from "../../Redux/auth-reducer";




class HeaderContainer extends React.Component {

    componentDidMount() {
/*
        if (this.props.isAuth) {
            this.props.getAuthUserData();
        }
*/

    }

    render(){
        return (
            <Header {...this.props}/>
        )
    }
}


let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    name: state.auth.name,
    image: state.auth.image
});


export default connect(mapStateToProps,{getAuthUserData,logout})(HeaderContainer);