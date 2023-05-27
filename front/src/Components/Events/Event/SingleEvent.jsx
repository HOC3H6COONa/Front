import React from 'react'
import classes from '../Events.module.css'
import Collapsible from "react-collapsible";
import {NavLink} from "react-router-dom";
import styles from "../../Users/users.module.css";


export const SingleEvent = (props)=> {
    return (
                <div className={classes.Event}>
                    <h1>{props.Event.title}</h1>
                    <div className={classes.SingleEventItem}>Activity:{props.Event.category === null ? 'N/A': props.Event.category.title}</div>
                    <div className={classes.SingleEventItem}>Host:
                        <NavLink to={`/profile/${props.Event.host.id}`} className={classes.SingleEventLink} >
                            <span>
                                <img src ={props.Event.host.image} className={classes.HostImage}/>
                                <span>{props.Event.host.name}</span>
                            </span>
                            </NavLink>
                    </div>
                    <div className={classes.SingleEventItem}>Address: {props.Event.location}</div>
                    <div className={classes.SingleEventItem}>Time: {props.Event.time}</div>
                    {props.Event.is_participating  ?
                        <div className={classes.SingleEventItem}>
                            <button className={classes.Button}>Quit</button>
                        </div> :
                        <div className={classes.SingleEventItem}>
                            <button className={classes.Button}>Join</button>
                        </div>

                    }
                    <div>
                        <Collapsible
                            transitionCloseTime={200}
                            className={classes.Collapsible}
                            openedClassName={classes.CollapsibleActive}
                            contentInnerClassName={classes.CollapsibleInner} trigger={'Participants'+ "⠀"+ "⠀"+ "⠀"+" "+" "+'+'}>
                            <span>
                                {props.Event.participants.map(u => <div key={u.id}>
                                    <NavLink to={'/profile/'+u.id}>
                                            <img src={u.image} className={classes.UserImage}/>
                                    </NavLink>
                                    <span className={classes.UserName}> {u.name}</span>
                                </div>)}
                            </span>
                        </Collapsible>
                    </div>
                </div>
    )

}
