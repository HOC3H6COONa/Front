import React from 'react'
import classes from './EditProfile.module.css'

import {NavLink} from "react-router-dom";


const EditProfile =(props) =>{

    return (
        <div className={classes.profile}>
            <img className={classes.img} src={props.state.image}/>
            <div className={classes.profile}>
                <div className={classes.item}>Image URL: <input className={classes.textarea}
                          defaultValue={props.state.image}></input></div>
                <div className={classes.item}> Name:<input className={classes.textarea}
                          defaultValue={props.state.name}/></div>
                <div className={classes.item}> Gender:
                    <select className={classes.select}>
                        <option> Male</option>
                        <option> Female</option>
                    </select>
                </div>
       {/*         <div className={classes.item}> Gender:<input className={classes.textarea}
                          defaultValue={props.state.gender}/></div>*/}
                <div className={classes.item}> Birthday:<input className={classes.textarea}
                          defaultValue={props.state.birthday}/></div>
               {/* <input className={classes.textarea}
                          value={props.state.city}/>*/}
                <div className={classes.profile2}>
                    <NavLink to={`/profile/${props.state.userid}`}>
                        <button className={classes.button}>Confirm</button>
                    </NavLink>
                </div>
            </div>
        </div>
    );
}

export default EditProfile;