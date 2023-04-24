import React from 'react';
import {connect} from "react-redux";
import {Event} from "./Event";
import {withRouter} from "../../../utilits/HOC/WithRouter";
import {compose} from "redux";
import {getEvent} from "../../../Redux/eventsPage-reducer";


class EventContainer extends React.Component{

    componentDidMount() {
        let eventId = this.props.router.params.eventId;
        this.props.getEvent(eventId)
    }
    render() {
        return(
            <Event {...this.props}/>
        )
    }
}



let mapStateToProps = (state) =>{
    return {
        eventsList: state.eventsPage.Event
    }
}


export default compose(
    withRouter,
    connect(mapStateToProps,{getEvent}))(EventContainer);