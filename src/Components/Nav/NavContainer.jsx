import React from 'react';
import {connect} from "react-redux";
import Nav from "./Nav";


class NavContainer extends React.Component {


    render(){
        return (
            <Nav {...this.props}/>
        )
    }
}


let mapStateToProps = (state) => ({
    AuthId: state.auth.userid,
});



export default connect(mapStateToProps)(NavContainer);