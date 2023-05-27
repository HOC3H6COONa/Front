import React from 'react'
import classes from './Events.module.css'
import {NavLink} from "react-router-dom";

export const Events = (props) => {
        return (
            <div>
                    {props.eventsList.map(e =>
                        <div key={e.id}>
                                <div>
                                        <NavLink to={`/Event/${e.id}`} className={classes.EventLink}>
                                                <div className={classes.item}>
                                                        <span className={classes.eventItem}>Event: {e.title}</span>
                                                        <span className={classes.eventItem}>Activity:{e.category === null ? 'N/A': e.category.title}</span>
                                                        <span className={classes.eventItem}>Address: {e.location}</span>
                                                        <span className={classes.eventItem}>Time: {e.time}</span>
                                                </div>
                                        </NavLink>
                                </div>
                        </div>
                    )}
            </div>
        )
}