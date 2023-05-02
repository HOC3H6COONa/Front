import React from 'react'
import classes from './EditProfile.module.css'
import {Form, Field, useFormState} from 'react-final-form'
import {NavLink} from "react-router-dom";
import {FormSelect, Input} from "../../../utilits/FormControl/FormControl";
import {formHelpers} from "../../../utilits/validators/validators";



const EditProfile =(props) =>{

    return (
        <div className={classes.profile}>
            <img className={classes.img} src={props.state.image}/>
            <EditProfileForm state = {props.state}/>
        </div>
    );
}

const EditProfileForm = (props) => {

    const onSubmit = async(FormData) =>{
        console.log(FormData)
        return await props.editProfile({Image:FormData.Image,
            Name:FormData.Name,
            Gender:FormData.Gender.value,
            Birthday:FormData.Birthday
        })
    }


    const options = [
        {value: 'Male', label:'Male'},
        {value: 'Female', label:'Female'}
    ]

    return (
        <Form
            initialValues={{
                Image: props.state.image,
                Name: props.state.name,
                Gender: props.state.gender,
                Birthday: props.state.birthday
            }}
            onSubmit={onSubmit}
            render={({handleSubmit, pristine, form, submitting, invalid, submitError}) => (
                <form onSubmit={handleSubmit}>
                    <div className={classes.profile}>
                        <div className={classes.item}>
                            <label> Image URL:</label>
                            <div>
                                <Field name={"Image"}  autoComplete={"off"} component={Input} type={"text"} className={classes.textarea} validate={formHelpers.required}></Field>
                            </div>
                        </div>

                        <div className={classes.item}>
                            <label> Name </label>
                            <div>
                                <Field name={"Name"} autoComplete={"off"} component={Input} className={classes.textarea} validate={formHelpers.required}></Field>
                            </div>
                        </div>

                        <div className={classes.item}>
                            <label> Gender </label>
                            <div>
                                <Field name={"Gender"} component={FormSelect} className={classes.select} options={options}></Field>
                            </div>
                        </div>

                        <div className={classes.item}>
                            <label> Birthday </label>
                            <div>
                                <Field name={"Birthday"} autoComplete={"off"} component={Input} className={classes.textarea}
                                       validate={formHelpers.composeValidators(formHelpers.required,formHelpers.dateValidation)} ></Field>
                            </div>
                        </div>
                        <div className={classes.profile2}>
                            <button type="Submit" className={classes.button}>Confirm </button>
                        </div>
                    </div>
                </form>
            )}
        ></Form>
    )
        ;
}

export default EditProfile;