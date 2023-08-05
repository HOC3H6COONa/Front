import React from "react";
import { Form, Field } from 'react-final-form'
import {formHelpers} from "../../utilits/validators/validators";
import {Navigate, NavLink} from "react-router-dom";
import classes from './Login.module.css';
import {Input} from "../../utilits/FormControl/FormControl";
import {FORM_ERROR} from "final-form";
import {useState} from 'react';
import MyModal from "../../utilits/UI/MyModal/MyModal";
import NewEventContainer from "../Events/NewEvent/NewEventContainer";
import Registration from "../Registration/Registration";
import RegistrationContainer from "../Registration/RegistrationContainer";



const Login = (props) => {

    const [modal, setModal] = useState(false);

    if (props.isAuth){
        return <Navigate to={'/profile/'+ props.AuthId}/>
    }

    return (
        <div className={classes.loginContainer} >
            <div className={classes.LoginItem}>
                <h1>Login</h1>
                <LoginForm login={props.login}/>
            </div>
            <div className={classes.registerItem}>
                <button className={classes.button} onClick={()=>setModal(true)}> Register </button>
            </div>
            <MyModal visible={modal} setVisible={setModal}>
                <RegistrationContainer setModal={setModal}/>
            </MyModal>
        </div>

    )
}


const LoginForm = (props) => {


    const onSubmit = async (FormData) => {
        const response =  await props.login(FormData.Email, FormData.Password)
        if (response === 'error')
            return {[FORM_ERROR]: "Failed to login"}
    }

    return (
        <Form
            initialValues={{
                Email: '',
                Password: '',
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
                        <label>Password</label>
                        <div className={classes.item}>
                            <Field name={"Password"}  autoComplete={"off"} component={Input} type={"password"} validate={formHelpers.required} className={classes.textarea}/>
                        </div>
                    </div>
                    {submitError && <strong className={classes.error}>{submitError}</strong>}
                    <div>
                        <button type="Submit" disabled={submitting} className={classes.button}> Login </button>
                        <span className={classes.buttonpadding}></span>
                        <button type="button" disabled={pristine || submitting} onClick={form.reset} className={classes.button}>Clear Values</button>
                    </div>
                </form>
            )}
        ></Form>
    )
}

export default Login;