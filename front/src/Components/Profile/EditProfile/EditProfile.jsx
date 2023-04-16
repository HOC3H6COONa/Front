import React from 'react'
import classes from './EditProfile.module.css'

import {NavLink} from "react-router-dom";


const EditProfile =(props) =>{

    let Confirm =()=>{
        props.Confirm();
    }

    let onNameChange =()=>{
        let text = newNameElement.current.value;
        props.updateName(text);
    }
    let newNameElement= React.createRef();

    let onCityChange =()=>{
        let text = newCityElement.current.value;
        props.updateCity(text);
    }
    let newCityElement= React.createRef();

    let onAgeChange =()=>{
        let text = newAgeElement.current.value;
        props.updateAge(text);
    }
    let newAgeElement= React.createRef();

    let onGenderChange =()=>{
        let text = newGenderElement.current.value;
        props.updateGender(text);
    }
    let newGenderElement= React.createRef();


    return (
        <div className={classes.profile}>
            <img className={classes.img} src={props.state.url}/>
            <div className={classes.profile}>
                <div className={classes.textarea}> URL: {props.state.url}</div>
                <input className={classes.textarea} onChange={onNameChange} ref={newNameElement}
                          value={props.state.EditNameText}/>
                <input className={classes.textarea} onChange={onGenderChange} ref={newGenderElement}
                          value={props.state.EditGenderText}/>
                <input className={classes.textarea} onChange={onAgeChange} ref={newAgeElement}
                          value={props.state.EditAgeText}/>
                <input className={classes.textarea} onChange={onCityChange} ref={newCityElement}
                          value={props.state.EditCityText}/>
                <div className={classes.profile2}>
                    <NavLink to={'/profile'}>
                        <button className={classes.button} onClick={Confirm}>Confirm</button>
                    </NavLink>
                </div>
            </div>
        </div>
    );
}

export default EditProfile;