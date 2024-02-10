import React, {useEffect, useState} from 'react'
import classes from './EditProfile.module.css'
import {Form, Field} from 'react-final-form'
import {FormSelect, Input} from "../../../utilits/FormControl/FormControl";
import {formHelpers} from "../../../utilits/validators/validators";
import {useNavigate,Navigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {Preloader} from "../../../utilits/Preloader";
import {editProfile} from "../../../Redux/profile-reducer";




const EditProfile =(props) =>{

    const [authLoaded, setAuthLoaded] = useState(false);
    const [AuthData,setAuthData] = useState({})
    const dispatch = useDispatch();
    const {birthday,email,gender,userid,image,name,isAuth} = useSelector((state)=>({
        birthday: state.auth.birthday,
        email: state.auth.email,
        gender: state.auth.gender,
        userid: state.auth.userid,
        image: state.auth.image,
        name: state.auth.name,
        isAuth: state.auth.name
    }))



    useEffect(()=>{
        setAuthData({birthday,email,gender,userid,image,name,isAuth})
        setAuthLoaded(true)
    },[isAuth,userid])

    const handleEdit = (image,name,gender,birthday) =>{
        dispatch(editProfile(image,name,gender,birthday))
    }

    if (!authLoaded) {
        return <Preloader/>;
    }



    if (!AuthData.userid){
        debugger;
        return <Navigate to={"/login"}/>
    }
    return (
        <div className={classes.profile}>
            <img className={classes.img} src={AuthData.image}/>
            <EditProfileForm state = {AuthData} editProfile={handleEdit}/>
        </div>
    );
}

const EditProfileForm = (props) => {
    const navigate = useNavigate();
    const onSubmit = async(FormData) =>{
        if (FormData.Gender.value){
            FormData.Gender = FormData.Gender.value;
        }
        const response =  await props.editProfile(
            FormData.Image,
            FormData.Name,
            FormData.Gender,
            FormData.Birthday)
        if (!response){
            navigate("/profile/"+props.state.userid)
        }else {
            return response
        }
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
                Gender:props.state.gender,
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
                                <Field name={"Gender"} component={FormSelect} className={classes.select}
                                        placeholder = {'Пол...'}
                                        options={options}></Field>
                            </div>
                        </div>

                        <div className={classes.item}>
                            <label> Birthday </label>
                            <div>
                                <Field name={"Birthday"} autoComplete={"off"} component={Input} className={classes.textarea}
                                       validate={formHelpers.composeValidators(formHelpers.required,formHelpers.dateValidation)} ></Field>
                            </div>
                        </div>
                        {submitError && <strong className={classes.error}>{submitError}</strong>}
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