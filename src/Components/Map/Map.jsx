import React from 'react'
import classes from './Map.module.css'

class Map extends React.Component {
    render () {
        return (
            <div className={classes.IMG}>
                <img className={classes.IMG}
                     src='https://upload.wikimedia.org/wikipedia/ru/e/ef/%D0%A1%D0%BA%D1%80%D0%B8%D0%BD%D1%88%D0%BE%D1%82_%D1%81%D0%B5%D1%80%D0%B2%D0%B8%D1%81%D0%B0_%D0%AF%D0%BD%D0%B4%D0%B5%D0%BA%D1%81.%D0%9A%D0%B0%D1%80%D1%82%D1%8B.png'/>
            </div>
        );
    }
}

export default Map;