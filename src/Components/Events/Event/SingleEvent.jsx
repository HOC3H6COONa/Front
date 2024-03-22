import React, {useState,useEffect} from 'react'
import classes from '../Events.module.css'
import Collapsible from "react-collapsible";
import {NavLink, useNavigate, useParams} from "react-router-dom";
import styles from "../../Users/users.module.css";
import {MapContainer, Marker, Popup, TileLayer} from "react-leaflet";
import L from "leaflet";
import markerIcon from "C:/Users/79806/WebstormProjects/Front/front/src/utilits/UI/marker-icon.png";
import {useDispatch, useSelector} from "react-redux";
import {getEvent, joinEvent, quitEvent} from "../../../Redux/SingleEvent-reducer";
import {Preloader} from "../../../utilits/Preloader";


export const SingleEvent = (props)=> {

    const dispatch = useDispatch();

    const params = useParams()

    const eventId = params.eventId

    const [event, setEvent] = useState({})

    const {eventData, AuthId, isAuth} = useSelector((state)=>({
        eventData: state.SingleEvent.Event,
        AuthId: state.auth.userid,
        isAuth: state.auth.isAuth,
    }))


    useEffect(()=> {
        const fetchEvent = async () => {
            await dispatch(getEvent(eventId))
        }
        fetchEvent()
    },[dispatch,eventId]);


    useEffect(()=>{
        setEvent({eventData,AuthId,isAuth})
    },[eventData, AuthId, isAuth, eventId])

    const navigate = useNavigate();

    const JoinEvent =  () =>{
        if (event.AuthId === null){
            navigate('/Login')
        } else {
            dispatch(joinEvent(event.eventData.id));
            event.eventData.Event.is_participating = true;
        }
    }
    const QuitEvent =() =>{
        dispatch(quitEvent(event.eventData.id))
        event.eventData.Event.is_participating = false;
    }
    const KickUser =(id)=>{
        // props.KickUser(props.Event.id,id)
        console.log(id)

    }
    const [triggerText, setTriggerText] = useState('Participants'+ "⠀"+ "⠀"+ "⠀"+" "+" "+" "+" "+ "⠀"+" "+ "⠀"+" "+ "⠀"+" "+'▼');

    const handleCollapsibleOpen = () => {
        setTriggerText('Participants'+ "⠀"+ "⠀"+ "⠀"+" "+" "+" "+" "+ "⠀"+" "+ "⠀"+" "+ "⠀"+" "+'▲');
    }

    const handleCollapsibleClose = () => {
        setTriggerText('Participants'+ "⠀"+ "⠀"+ "⠀"+" "+" "+" "+" "+ "⠀"+" "+ "⠀"+" "+ "⠀"+" "+'▼');
    }

    const customMarkerIcon = L.icon({
        iconUrl: markerIcon,
        iconSize: [45, 45],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
    });

    if (!event.eventData){
        return(
            <Preloader/>
        )
    }

    if (event.eventData.latitude) {
        return (
            <div className={classes.Event}>
                <h1>{event.eventData.title}</h1>
                <div
                    className={classes.SingleEventItem}>Activity: {event.eventData.category === null ? 'N/A' : event.eventData.category.title}</div>
                <div className={classes.SingleEventItem}>Host:
                    <NavLink to={`/profile/${event.eventData.host.id}`} className={classes.SingleEventLink}>
                            <span>
                                <img src={event.eventData.host.image} className={classes.HostImage}/>
                                <span>{event.eventData.host.name}</span>
                            </span>
                    </NavLink>
                </div>
                <div className={classes.SingleEventItem}>Address: {event.eventData.location}</div>
                <div className={classes.SingleEventItem}>Time: {event.eventData.time}</div>
                <div className={classes.SingleEventItem}>Description: {event.eventData.description}</div>
                <div className={classes.MapStyling}>
                    <MapContainer center={[eventData.latitude,eventData.longitude]} zoom={12} style={{height: '300px', width: '600px'}} bubblingMouseEvents={true}>
                        <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' attribution=''/>
                        {event.eventData && (
                            <div>
                                {event.eventData.latitude && event.eventData.longitude && (
                                    <Marker position={[event.eventData.latitude, event.eventData.longitude]}
                                            eventPropagationTo="container" icon={customMarkerIcon}>
                                    </Marker>
                                )}
                            </div>
                        )}
                    </MapContainer>
                </div>
                {event.eventData.host.id !== event.AuthId ? event.eventData.is_participating ?
                        <div className={classes.SingleEventItem}>
                            <button className={classes.Button} onClick={QuitEvent}>Quit</button>
                        </div> :
                        <div className={classes.SingleEventItem}>
                            <button className={classes.Button} onClick={JoinEvent}>Join</button>
                        </div> :
                    <div className={classes.SingleEventItem}>
                        <NavLink to={`Edit`}>
                            <button className={classes.Button}>Edit Event</button>
                        </NavLink>
                    </div>

                }
                <div>
                    <Collapsible
                        transitionCloseTime={200}
                        className={classes.Collapsible}
                        openedClassName={classes.CollapsibleActive}
                        contentInnerClassName={classes.CollapsibleInner}
                        trigger={triggerText}
                        onOpen={handleCollapsibleOpen}
                        onClose={handleCollapsibleClose}
                    >
                        <div>
                            {event.eventData.participants.map(u =>
                                <div key={u.id} className={classes.Participant}>
                                    <NavLink to={'/profile/' + u.id}>
                                        <img src={u.image} className={classes.UserImage}/>
                                    </NavLink>
                                    <div className={classes.UserInfoWrapper}>
                                        <span className={classes.UserName}> {u.name}</span>
                                        {event.eventData.host.id === event.AuthId ?
                                            <span className={classes.Kick} onClick={() => KickUser(u.id)}>Kick</span> :
                                            <></>
                                        }
                                    </div>
                                </div>)}
                        </div>
                    </Collapsible>
                </div>
            </div>
        )
    }
}
