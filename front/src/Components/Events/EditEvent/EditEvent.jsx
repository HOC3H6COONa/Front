import React from "react";
import { Form, Field } from 'react-final-form'
import {formHelpers} from "../../../utilits/validators/validators";
import {Navigate, useNavigate} from "react-router-dom";
import classes from '../NewEvent/NewEvent.module.css'
import {FormSelect, Input, TextArea} from "../../../utilits/FormControl/FormControl";
import {FORM_ERROR} from "final-form";



const EditEvent = (props) => {

    return (
        <div>
            <h1>Create New Event</h1>
            <EditEventForm Event= {props.Event} editEvent={props.editEvent}/>
        </div>

    )
}


const EditEventForm = (props) => {

    const navigate = useNavigate();

    const onSubmit = async (FormData) => {
        if (FormData.Category.value){
            FormData.Category = FormData.Category.value;
        }
        const response =  await props.editEvent(FormData.Title, FormData.Category.value, FormData.Location,
            FormData.Description, FormData.Time,props.Event.id)
        if (response !== 'error'){
            navigate(`/Event/${response}`)
        } else {
            return {[FORM_ERROR]: "Failed to edit event"}
        }
    }

    const options = [
        {value: 2, label:'Football'},
        {value: 1, label:'Other'},
        {value: 3, label:'Basketball'}
    ]

    return (
        <Form
            initialValues={{
                Title: props.Event.title,
                Category: props.Event.category.id,
                Location: props.Event.location,
                Description: props.Event.description,
                Time:props.Event.time,
            }}
            onSubmit={onSubmit}
            render = {({handleSubmit, pristine, form, submitting,invalid,submitError}) => (
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Title</label>
                        <div className={classes.item}>
                            <Field name={"Title"}
                                   autoComplete={"off"} component={Input} type={"text"} className={classes.textarea}
                                   validate={formHelpers.required}/>
                        </div>
                    </div>
                    <div>
                        <label>Category</label>
                        <div className={classes.item}>
                            <Field name={"Category"} component={FormSelect} className={classes.select}
                                   options={options}></Field>
                        </div>
                    </div>
                    <div>
                        <label>Location</label>
                        <div className={classes.item}>
                            <Field name={"Location"}  autoComplete={"off"} className={classes.textarea}
                                   component={Input} type={"text"}
                                   validate={formHelpers.required}/>
                        </div>
                    </div>
                    <div>
                        <label>Time</label>
                        <div className={classes.item}>
                            <Field name={"Time"} autoComplete={"off"} component={Input} className={classes.textarea}
                                   validate={formHelpers.required} ></Field>
                        </div>
                    </div>
                    <div>
                        <label>Description</label>
                        <div className={classes.item}>
                            <Field name={"Description"}  autoComplete={"off"} className={classes.DescriptionText}
                                   component={TextArea} type={"text"} validate={formHelpers.required}/>
                        </div>
                    </div>
                    {submitError && <strong className={classes.error}>{submitError}</strong>}
                    <div>
                        <button type="Submit" disabled={submitting} className={classes.button}> Edit Event </button>
                        <span className={classes.buttonpadding}></span>
                        <button type="button" disabled={pristine || submitting} className={classes.button} onClick={form.reset}>Clear Values</button>
                    </div>
                </form>
            )}
        ></Form>
    )
}

export default EditEvent;