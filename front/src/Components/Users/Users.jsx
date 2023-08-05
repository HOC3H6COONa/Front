import React from "react";
import styles from './users.module.css'
import {NavLink} from "react-router-dom";
import classes from "./users.module.css";
import MyInput from "../../utilits/UI/input/MyInput";
import {useState, useMemo} from 'react'

const Users = (props) => {

    const [searchQuery, setSearchQuery] = useState('')

    const SearchUsers = useMemo(()=>{
        if (searchQuery) {
            return props.users.filter(e => e.name.toLowerCase().includes(searchQuery.toLowerCase().trim()))
        }
            return props.users
    },[searchQuery, props.users])


    return (<div>
            <div
                className={classes.Padding}>
                <MyInput
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}
                    placeholder="Найти пользователя . . ."
                />
            </div>
            {SearchUsers.length ?
                    SearchUsers.map(u => <div key={u.id}>
                <span>
                    <div className={classes.userItem}>
                        <NavLink to={'/profile/' + u.id}>
                            <img src={u.image} className={classes.userPhoto} alt="User"/>
                        </NavLink>
                            <h1 className={classes.name}> {u.name}</h1>
                    </div>
                </span>
                <span>
                        <div></div>
                    </span>
            </div>)
            :<h1>Пользователи не найдены</h1>}
        </div>)
}
export default Users