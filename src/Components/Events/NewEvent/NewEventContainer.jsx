import React from 'react';
import {connect} from "react-redux";
import NewEvent from "./NewEvent";
import {newEvent} from "../../../Redux/eventsPage-reducer";



class NewEventContainer extends React.Component {

    render(){
        return (
            <NewEvent {...this.props}/>
        )
    }
}


let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    AuthId: state.auth.userid,
});



export default connect(mapStateToProps,{newEvent})(NewEventContainer);