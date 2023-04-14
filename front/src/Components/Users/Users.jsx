import React from "react";
import styles from './users.module.css'
import {NavLink} from "react-router-dom";

class Users extends React.Component {
    render () {
        return <div className={styles.users}>
            {
                this.props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <NavLink to={'/profile/'+u.id}>
                            <img src={u.photourl} className={styles.userPhoto}/>
                        </NavLink>
                    </div>
                    <div>
                        {u.followed ? <button onClick={() => {
                            this.props.unfollow(u.id)
                        }}> Unfollow </button> : <button onClick={() => {
                            this.props.Follow(u.id)
                        }}> Follow </button>}
                    </div>
                </span>
                    <span>
                    <span>
                        <div> {u.fullName}</div>
                    </span>
                    <span>
                        <div>
                            {u.city}
                        </div>
                    </span>
                </span>
                </div>)
            }
        </div>
    }
}
export default Users