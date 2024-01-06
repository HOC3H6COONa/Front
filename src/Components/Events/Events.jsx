import React, {useMemo, useState} from 'react'
import classes from './Events.module.css'
import {NavLink, useHistory, useNavigate} from 'react-router-dom';
import MyInput from "../../utilits/UI/input/MyInput";
import MyModal from "../../utilits/UI/MyModal/MyModal";
import Nav from "../Nav/Nav";
import NewEventContainer from "./NewEvent/NewEventContainer";

export const Events = (props) => {

        const [selectedSort, setSelectedSort] = useState('')
        const [searchQuery, setSearchQuery] = useState('')
        const [modal, setModal] = useState(false);
        const navigate = useNavigate();


        const sortedEvents = useMemo(()=>{
            if (selectedSort){
                return [...props.eventsList].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]))
            }
            return props.eventsList
        },[selectedSort, props.eventsList])

        const sortedAndSearchEvents = useMemo(()=>{
            if (searchQuery) {
                return sortedEvents.filter(e => e.title.toLowerCase().includes(searchQuery.toLowerCase().trim()))
            }
            return sortedEvents
        },[searchQuery, sortedEvents])



        return (
            <div>
                <div className={classes.Padding}>
                    <button className={classes.Button}
                            onClick={props.AuthId !== null ? ()=>setModal(true):() => navigate('/Login')}
                    >New Event</button>

                    <MyModal visible={modal} setVisible={setModal}>
                        <NewEventContainer/>
                    </MyModal>
                </div>
                <div>
                    <div
                        className = {classes.Padding}>
                        <MyInput
                            value = {searchQuery}
                            onChange = {e => setSearchQuery(e.target.value)}
                            placeholder ="Find event . . ."
                        />
                    </div>
                    {sortedAndSearchEvents.length ?
                        sortedAndSearchEvents.map(e =>
                        <div key={e.id}>
                            <div>
                                <NavLink to={`/Event/${e.id}`} className={classes.EventLink}>
                                    <div className={classes.item}>
                                        <span className={classes.eventItem}>Event: {e.title}</span>
                                        <span
                                            className={classes.eventItem}>Activity:{e.category === null ? 'N/A' : e.category.title}</span>
                                        <span className={classes.eventItem}>Address: {e.location}</span>
                                        <span className={classes.eventItem}>Time: {e.time}</span>
                                    </div>
                                </NavLink>
                            </div>
                        </div>
                    ):
                    <div>
                        <h1>Events not found</h1>
                    </div>
                    }
                </div>
            </div>
        )
}