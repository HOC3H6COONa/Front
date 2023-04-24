import React from 'react'
import classes from './Events.module.css'
import {NavLink} from "react-router-dom";

export const Events = (props) => {

        return (<div>
                {props.eventsList.map(e => <div key={e.id}>
                        <div>
                                <NavLink to={`/Event/${e.id}`} className={classes.EventLink}>
                                        <div className={classes.item}>
                                                <a className={classes.eventItem}>Event: |{e.title}|</a>
                                                <a className={classes.eventItem}>Activity: |{e.category}|</a>
                                                <a className={classes.eventItem}>Address: |{e.location}|</a>
                                                <a className={classes.eventItem}>Time: |{e.time}|</a>
                                        </div>
                                </NavLink>
                        </div>
                </div>)}
        < /div>)

}
