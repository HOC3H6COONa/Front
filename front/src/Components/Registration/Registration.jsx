import React from "react";
import { Form, Field } from 'react-final-form'
import {formHelpers} from "../../utilits/validators/validators";
import { Navigate } from "react-router-dom";
import classes from "./Registration.module.css";
import {FormSelect, Input} from "../../utilits/FormControl/FormControl";
import {FORM_ERROR} from "final-form";



const Registration = (props) => {

    //  if (props.isAuth){
    //     return <Navigate to={'/profile/'+ props.AuthId}/>
    // }

    return (
        <div>
            <h1>Registration</h1>
            <RegForm register={props.register}/>
        </div>

    )
}


const RegForm = (props) => {


    const onSubmit = async (FormData) => {
        if (FormData.Password === FormData.PasswordConfirmation) {
            return await props.register(FormData.Email, FormData.Image, FormData.Name,
                FormData.Gender.value, FormData.Birthday, FormData.Password)
        } else {
            return {[FORM_ERROR]: "Passwords do not match"}
        }
    }

    const options = [
        {value: 'Male', label:'Male'},
        {value: 'Female', label:'Female'}
    ]

    return (
        <Form
            initialValues={{
                Email: '',
                Image: '',
                Name: '',
                Gender: '',
                Birthday:'',
                Password: '',
                PasswordConfirmation: '',
            }}
            onSubmit={onSubmit}
            render = {({handleSubmit, pristine, form, submitting,invalid,submitError}) => (
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Email</label>
                        <div className={classes.item}>
                            <Field name={"Email"}
                                   autoComplete={"off"} component={Input} type={"text"} className={classes.textarea}
                                   validate={formHelpers.composeValidators( formHelpers.required, formHelpers.emailValidation)}/>
                        </div>
                    </div>
                    <div>
                        <label>ImageURL</label>
                        <div className={classes.item}>
                            <Field name={"Image"}  autoComplete={"off"} className={classes.textarea}
                                   component={Input} type={"text"}
                                   validate={formHelpers.composeValidators( formHelpers.required, formHelpers.urlValidation)}/>
                        </div>
                    </div>
                    <div>
                        <label>Name</label>
                        <div className={classes.item}>
                            <Field name={"Name"}  autoComplete={"off"} className={classes.textarea}
                                   component={Input} type={"text"} validate={formHelpers.required}/>
                        </div>
                    </div>
                    <div>
                        <label> Gender </label>
                        <div className={classes.item}>
                            <Field name={"Gender"} component={FormSelect} className={classes.select}
                                   options={options}></Field>
                        </div>
                    </div>
                    <div>
                        <label> Birthday </label>
                        <div className={classes.item}>
                            <Field name={"Birthday"} autoComplete={"off"} component={Input} className={classes.textarea}
                                   validate={formHelpers.composeValidators(formHelpers.required,formHelpers.dateValidation)} ></Field>
                        </div>
                    </div>
                    <div>
                        <label>Password</label>
                        <div className={classes.item}>
                            <Field name={"Password"}  autoComplete={"off"} component={Input} className={classes.textarea}
                                   type={"password"}
                                   validate={formHelpers.composeValidators( formHelpers.required, formHelpers.maxLength(20),formHelpers.minLength(6))}/>
                        </div>
                    </div>
                    <div>
                        <label>PasswordConfirmation</label>
                        <div className={classes.item}>
                            <Field name={"PasswordConfirmation"}  autoComplete={"off"} component={Input} className={classes.textarea}
                                   type={"password"}
                                   validate={formHelpers.composeValidators( formHelpers.required, formHelpers.maxLength(20),formHelpers.minLength(6))}/>
                        </div>
                    </div>
                    {submitError && <strong className={classes.error}>{submitError}</strong>}
                    <div>
                        <button type="Submit" disabled={submitting} className={classes.button}> Register </button>
                        <button type="button" disabled={pristine || submitting} className={classes.button} onClick={form.reset}>Clear Values</button>
                    </div>
                </form>
            )}
        ></Form>
    )
}

export default Registration;