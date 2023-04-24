import React from 'react';
import {connect} from "react-redux";
import {Events} from "./Events";
import {getEvents} from "../../Redux/eventsPage-reducer";


class EventsContainer extends React.Component{

    componentDidMount() {
        this.props.getEvents();
    }
    render() {
        return(
            <Events {...this.props}/>
        )
    }
}



let mapStateToProps = (state) =>{
    return {
        eventsList: state.eventsPage.eventsList
    }
}


export default connect(mapStateToProps,{getEvents})(EventsContainer);