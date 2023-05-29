import React from 'react'
import classes from './Events.module.css'
import {NavLink} from "react-router-dom";

export const Events = (props) => {
        return (
            <div>
                <div className={classes.Padding}>
                    <NavLink to={props.AuthId !== null ? '/CreateEvent' : '/Login'} className={classes.EventLink}>
                        <button className={classes.Button}> New Event </button>
                    </NavLink>
                </div>
                {/*<div className={classes.Padding}>*/}
                {/*    <span className={classes.eventItem}>*/}
                {/*            <input className={classes.Input}/>*/}
                {/*    </span>*/}
                {/*    <span className={classes.eventItem}>*/}
                {/*            <button className={classes.Button}> My Events </button>*/}
                {/*    </span>*/}
                {/*    <span className={classes.eventItem}>*/}
                {/*            <button className={classes.Button}>Friend's Events</button>*/}
                {/*    </span>*/}
                {/*</div>*/}
                <div>
                    {props.eventsList.map(e =>
                        <div key={e.id}>
                            <div>
                                <NavLink to={`/Event/${e.id}`} className={classes.EventLink}>
                                    <div className={classes.item}>
                                        <span className={classes.eventItem}>Event: {e.title}</span>
                                        <span
                                            className={classes.eventItem}>Activity:{e.category === null ? 'N/A' : e.category.title}</span>
                                        <span className={classes.eventItem}>Address: {e.location}</span>
                                        <span className={classes.eventItem}>Time: {e.time}</span>
                                    </div>
                                </NavLink>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        )
}