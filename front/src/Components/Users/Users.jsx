import React from "react";
import styles from './users.module.css'
import {NavLink} from "react-router-dom";

const Users = (props) => {
        debugger;
        return (
            <div className={styles.users}>
                {props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <NavLink to={'/profile/'+u.id}>
                            <img src={u.image} className={styles.userPhoto}/>
                        </NavLink>
                    </div>
                    <div>
                        {u.followed ? <button onClick={() => {
                            props.unfollow(u.id)
                        }}> Unfollow </button> : <button onClick={() => {
                            props.Follow(u.id)
                        }}> Follow </button>}
                    </div>
                </span>
                    <span>
                    <span>
                        <div className={styles.name}> {u.name}</div>
                    </span>
                    <span>
                        <div>
                            {u.age}
                        </div>
                    </span>
                </span>
                </div>)
            }
        </div>
        )
}
export default Users