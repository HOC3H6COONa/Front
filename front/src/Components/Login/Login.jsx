import React from "react";
import { Form, Field } from 'react-final-form'
import {formHelpers} from "../../utilits/validators/validators";
import Input from "../../utilits/FormControl/FormControl";
import { Navigate } from "react-router-dom";



const Login = (props) => {

    if (props.isAuth){
        return <Navigate to="/profile"/>
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginForm login={props.login}/>
        </div>

    )
}


const LoginForm = (props) => {
    return (
        <Form
            initialValues={{
                Email: '',
                Password: '',
                rememberMe: false
            }}
            onSubmit={values => {
                props.login(values.Email,values.Password,values.rememberMe);
            }}
            validate={values => {
                // do validation here, and return errors object
            }}

            render = {({handleSubmit, pristine, form, submitting,invalid}) => (
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
                    <div>
                        <button type="Submit" disabled={submitting || invalid }> Login </button>
                        <button type="button" disabled={pristine || submitting} onClick={form.reset}>Clear Values</button>
                    </div>
                </form>
            )}
        ></Form>
    )
}

export default Login;