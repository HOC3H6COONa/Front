import React from 'react';
import {connect} from "react-redux";
import {DeleteEvent, editEvent, getEvent} from "../../../Redux/SingleEvent-reducer";
import EditEvent from "./EditEvent";
import {compose} from "redux";
import {withRouter} from "../../../utilits/HOC/WithRouter";


class EditEventContainer extends React.Component {

    componentDidMount() {
        let eventId = this.props.router.params.eventId;
        this.props.getEvent(eventId);

    }

    render(){
        return (
            <EditEvent {...this.props}/>
        )
    }
}


let mapStateToProps = (state) => ({
    Event: state.SingleEvent.Event,
});



export default compose(
    withRouter,
    connect(mapStateToProps,{getEvent,editEvent,DeleteEvent}))(EditEventContainer)