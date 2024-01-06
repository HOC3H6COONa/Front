import React from "react";
import { Form, Field } from 'react-final-form'
import {formHelpers} from "../../../utilits/validators/validators";
import {Navigate, useNavigate} from "react-router-dom";
import classes from "./NewEvent.module.css";
import {FormSelect, Input, TextArea} from "../../../utilits/FormControl/FormControl";
import {FORM_ERROR} from "final-form";



const NewEvent = (props) => {

    return (
        <div>
            <h1>Create New Event</h1>
            <NewEventForm newEvent={props.newEvent}/>
        </div>

    )
}


const NewEventForm = (props) => {

    const navigate = useNavigate();

    const onSubmit = async (FormData) => {
        const response =  await props.newEvent(FormData.Title, FormData.Category.value, FormData.Location,
            FormData.Description, FormData.Time)
        if (response !== 'error'){
            navigate(`/Event/${response}`)
        } else {
            return {[FORM_ERROR]: "Failed to create new event"}
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
                Title: '',
                Category: '',
                Location: '',
                Description: '',
                Time:'',
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
                                   placeholder ={'Активность...'}
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
                        <button type="Submit" disabled={submitting} className={classes.button}> Create Event </button>
                        <span className={classes.buttonpadding}></span>
                        <button type="button" disabled={pristine || submitting} className={classes.button} onClick={form.reset}>Clear Values</button>
                    </div>
                </form>
            )}
        ></Form>
    )
}

export default NewEvent;