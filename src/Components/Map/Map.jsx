import React, {useEffect, useState} from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import {NavLink, useNavigate} from "react-router-dom";

import markerIcon from "C:/Users/79806/WebstormProjects/Front/front/src/utilits/UI/marker-icon.png";
import {useDispatch, useSelector} from "react-redux";
import {getUsers} from "../../Redux/users-reducer";
import {getEvents} from "../../Redux/eventsPage-reducer";

const Map = () => {

    const [eventsData, setEventsData] = useState([])

    const events = useSelector((state)=>(state.eventsPage.eventsList))

    const dispatch = useDispatch();

    useEffect(()=>{
        const fetchEvents = async()=> {
            await dispatch(getEvents())
        }
        fetchEvents()
    },[dispatch])

    useEffect(()=>{
        setEventsData(events)
    },[events])



    const center = [55.7558, 37.6173];
    const navigate = useNavigate();

    const customMarkerIcon = L.icon({
        iconUrl: markerIcon,
        iconSize: [45, 45],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
    });



    return (
        <div>
        <MapContainer center={center} zoom={12} style={{ height: '1000px' }} bubblingMouseEvents ={true} >
            <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' attribution='' />
            {eventsData &&(
                eventsData.map(e=>
                <div key={e.id}>
                    {e.latitude && e.longitude && (
                <Marker position={[e.latitude,e.longitude]} eventPropagationTo="container" icon={customMarkerIcon}>
                    <NavLink  to={`/Event/${e.id}`}>
                    <Popup>
                        <div>
                            {e.title} | {e.category.title}
                        </div>
                    </Popup>
                    </NavLink>
                </Marker>
                        )}
                </div>
                )
            )}
        </MapContainer>
        </div>
    );
};

export default Map;
