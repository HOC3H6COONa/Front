import {Navigate} from "react-router-dom";
import React from "react";


export const withAuth = (Component) => {
    class withAuthComponent extends React.Component{
        render () {
            debugger;
            if (!this.props.isAuth) return <Navigate to ='/login'/>
            return <Component {...this.props}/>
        }
    }
    return withAuthComponent;
}