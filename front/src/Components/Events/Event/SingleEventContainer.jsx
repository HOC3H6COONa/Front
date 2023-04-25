import React from 'react';
import {connect} from "react-redux";
import {SingleEvent} from "./SingleEvent";
import {withRouter} from "../../../utilits/HOC/WithRouter";
import {compose} from "redux";
import {getEvent} from "../../../Redux/SingleEvent-reducer";



class SingleEventContainer extends React.Component{

    componentDidMount() {
        let eventId = this.props.router.params.eventId;
        this.props.getEvent(eventId)
    }
    render() {
        return(
            <SingleEvent {...this.props}/>
        )
    }
}



let mapStateToProps = (state) =>{
    return {
        Event: state.SingleEvent.Event
    }
}


export default compose(
    withRouter,
    connect(mapStateToProps,{getEvent}))(SingleEventContainer);