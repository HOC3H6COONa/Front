import React from "react";
import { Form, Field } from 'react-final-form'
import {formHelpers} from "../../utilits/validators/validators";
import Input from "../../utilits/FormControl/FormControl";


const Login = (props) =>{
    return (
        <div>
            <h1>Login</h1>
            <LoginForm/>
        </div>

    )
}
const abcfunc =(values)=>{
    debugger;
    console.log(values)

}

const LoginForm = (props) => {
    return (
        <Form
            initialValues={{
                Login: '',
                Password: '',
                rememberMe: false
            }}
            onSubmit={values => {
                abcfunc(values);

            }}
            validate={values => {
                // do validation here, and return errors object
            }}

            render = {({handleSubmit, pristine, form, submitting,invalid}) => (
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Login</label>
                        <div>
                            <Field name={"Login"}
                                   autocomplete={"off"} component={Input} type={"text"}
                                   validate={formHelpers.composeValidators(
                                       formHelpers.required,
                                       formHelpers.emailValidation)}/>
                        </div>
                    </div>
                    <div>
                        <label>Password</label>
                        <div>
                            <Field name={"Password"}  autocomplete={"off"} component={Input} type={"text"} validate={formHelpers.required}/>
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