import React from 'react'
import classes from '../Events.module.css'


export const Event = (props)=> {
    debugger;
    return (
                <div className={classes.Event}>
                    <h1>Event: {props.title}</h1>
                    <a>Activity: {props.category}</a>
           {/*         <a>Host: |{props.host.id}|{props.host.name}</a>*/}
                    <a>Address: {props.location}</a>
                    <a>Time: {props.time}</a>
                </div>
    )

}
