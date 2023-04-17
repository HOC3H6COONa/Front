import React from 'react'
import classes from './Activities.module.css'

class Activities extends React.Component {
    debugger;
    render () {
        return <div>
            {
                this.props.activities.map(e => <div key={e.eventId}>
                    <div>
                        <div className={classes.item}>
                            Event: {e.event} Activity: {e.activity} Host: {e.host} Time: {e.time} Address: {e.address}
                        </div>
                    </div>
                </div>)
            }
        </div>
    }
}

export default Activities;