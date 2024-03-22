import React, {useEffect, useState} from "react";
import { Form, Field } from 'react-final-form'
import {formHelpers} from "../../../utilits/validators/validators";
import {Navigate, useNavigate} from "react-router-dom";
import classes from "./NewEvent.module.css";
import {FormSelect, Input, TextArea} from "../../../utilits/FormControl/FormControl";
import {FORM_ERROR} from "final-form";
import {useDispatch, useSelector} from "react-redux";
import {newEvent} from "../../../Redux/eventsPage-reducer";
import {MapContainer, Marker, TileLayer, useMapEvents} from "react-leaflet";
import L from "leaflet";
import markerIcon from "C:/Users/79806/WebstormProjects/Front/front/src/utilits/UI/marker-icon.png";




const NewEvent = (props) => {

    const {AuthId,isAuth} = useSelector((state)=>({
        AuthId: state.auth.userid,
        isAuth: state.auth.isAuth,
    }));

    const dispatch = useDispatch();

    const handleNewEvent =(title,category,location,description,time,latitude,longitude) =>{
        dispatch(newEvent(title,category,location,description,time,latitude,longitude))
    }

    return (
        <div>
            <h1>Create New Event</h1>
            <NewEventForm newEvent={handleNewEvent}/>
        </div>

    )
}


const NewEventForm = (props) => {

    const [latitude, setLatitude] = useState('')
    const [longitude, setLongitude] = useState('')


    const customMarkerIcon = L.icon({
        iconUrl: markerIcon,
        iconSize: [45, 45],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
    });

    const MapEvents = () => {
        useMapEvents({
            click(e) {
                setLatitude(e.latlng.lat);
                setLongitude(e.latlng.lng);
            },
        });
        return false;
    }

    const navigate = useNavigate();

    const onSubmit = async (FormData) => {
            if (!latitude|| !longitude) {
                return {[FORM_ERROR]: "Place event on a map"}
            }
            console.log(latitude, longitude)
            const response = await props.newEvent(FormData.Title, FormData.Category.value, FormData.Location,
                FormData.Description, FormData.Time,longitude, latitude)
            if (response !== 'error') {
                // navigate("Event/"+response.data.id)
                console.log(response)
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
                latitude: '',
                longitude: '',
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
                        <label>Location on a map</label>
                        <div>
                            <MapContainer center={[55.7558, 37.6173]} zoom={12} style={{height:'300px', width:'600px',borderRadius: '10px',border:'solid black 1px'}} bubblingMouseEvents={true} >
                                <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' attribution=''/>
                                <MapEvents/>
                                {longitude && latitude && (
                                    <Marker position={[latitude, longitude]}
                                            eventPropagationTo="container" icon={customMarkerIcon}>
                                    </Marker>)}
                            </MapContainer>
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