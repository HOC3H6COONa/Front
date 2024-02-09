import React, {useEffect} from "react";
import styles from './users.module.css'
import {NavLink} from "react-router-dom";
import classes from "./users.module.css";
import MyInput from "../../utilits/UI/input/MyInput";
import {useState, useMemo} from 'react'
import {UsersApi} from "../../api/usersapi";
import {useSelector,useDispatch} from "react-redux";
import {getUsers} from "../../Redux/users-reducer";

const Users = (props) => {

    const [usersData, setUsersData] = useState({})

    const users = useSelector((state)=>(state.usersPage.users))

    const dispatch = useDispatch();

    useEffect(()=>{
        const fetchUsers = async()=> {
            dispatch(getUsers())
            setUsersData(users)
        }
        fetchUsers()
    },[dispatch])

    const [searchQuery, setSearchQuery] = useState('')

    const SearchUsers = useMemo(()=>{
        if (searchQuery) {
            return usersData.filter(e => e.name.toLowerCase().includes(searchQuery.toLowerCase().trim()))
        }
            return usersData
    },[searchQuery, usersData])


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
                    <NavLink to={'/profile/' + u.id} className={classes.link}>
                    <div className={classes.userItem}>
                            <img src={u.image} className={classes.userPhoto} alt="User"/>
                            <h1 className={classes.name}> {u.name}</h1>
                    </div>
                    </NavLink>
                </span>
                <span>
                        <div></div>
                    </span>
            </div>)
            :<h1>Пользователи не найдены</h1>}
        </div>)
}
export default Users