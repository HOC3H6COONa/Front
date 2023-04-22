import React from "react";
import { Form, Field } from 'react-final-form'
import {formHelpers} from "../../utilits/validators/validators";
import Input from "../../utilits/FormControl/FormControl";
import { Navigate } from "react-router-dom";
import classes from './Login.module.css'
import {FORM_ERROR} from "final-form";



const Login = (props) => {

    if (props.isAuth){
        return <Navigate to={'/profile/'+ 1}/>
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginForm login={props.login}/>
        </div>

    )
}


const LoginForm = (props) => {


    const onSubmit = async (FormData) => {
            return  await props.login(FormData.Email, FormData.Password, FormData.rememberMe)
    }

    return (
        <Form
            initialValues={{
                Email: '',
                Password: '',
                rememberMe: false
            }}
            validate={values => {
                // do validation here, and return errors object
            }}
            onSubmit={onSubmit}
            render = {({handleSubmit, pristine, form, submitting,invalid,submitError}) => (
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Email</label>
                        <div>
                            <Field name={"Email"}
                                   autoComplete={"off"} component={Input} type={"text"}
                                   validate={formHelpers.composeValidators( formHelpers.required, formHelpers.emailValidation)}/>
                        </div>
                    </div>
                    <div>
                        <label>Password</label>
                        <div>
                            <Field name={"Password"}  autoComplete={"off"} component={Input} type={"password"} validate={formHelpers.required}/>
                        </div>
                    </div>
                    <div>
                        <Field name={"rememberMe"} component={"input"} type={"checkbox"}/>remember me
                    </div>
                    {submitError && <strong className={classes.error}>{submitError}</strong>}
                    <div>
                        <button type="Submit" disabled={submitting}> Login </button>
                        <button type="button" disabled={pristine || submitting} onClick={form.reset}>Clear Values</button>
                    </div>
                </form>
            )}
        ></Form>
    )
}

export default Login;