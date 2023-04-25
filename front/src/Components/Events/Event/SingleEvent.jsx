import React from 'react'
import classes from '../Events.module.css'


export const SingleEvent = (props)=> {
    return (
                <div className={classes.Event}>
                    <h1>Event: {props.Event.title}</h1>
                    <a>Activity: {props.Event.category}</a>
           {/*         <a>Host: |{props.host.id}|{props.host.name}</a>*/}
                    <a>Address: {props.Event.location}</a>
                    <a>Time: {props.Event.time}</a>
                </div>
    )

}
