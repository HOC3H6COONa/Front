import classes from './Header.module.css'
import {NavLink} from "react-router-dom";
import {useEffect, useState} from 'react'
import {UsersApi} from "../../api/usersapi";
import {useDispatch, useSelector} from "react-redux";
import {logout} from "../../Redux/auth-reducer";


const Header = (props) =>{


    const [userData, setUsersData] = useState({})

    const {isAuth,image,name} = useSelector((state) => ({
        isAuth: state.auth.isAuth,
        image: state.auth.image,
        name: state.auth.name,
    }));

    const dispatch = useDispatch();

    const handleLogout = ()=>{
        dispatch(logout())
    }


    useEffect(()=>{
        const fetchUserData = async()=> {
            setUsersData({isAuth,image,name})
        }
        fetchUserData()
    },[isAuth,image,name])

    return(
        <header className={classes.AppHeader}>
            <a className={classes.item}> FRONT </a>
            <div className={classes.loginBlock}>
                {userData.isAuth ?
                    <span>
                        <img src ={userData.image} className={classes.image}/> |
                        <NavLink to ={'/Events'}>
                            <span  className={classes.loginBlock} onClick={handleLogout} >LogOut</span>
                        </NavLink>
                    </span>
                    :
                    <NavLink to={'/login'} className={classes.loginBlock}>
                        Login
                    </NavLink>
                }
            </div>
        </header>
    );
}

export default Header;
