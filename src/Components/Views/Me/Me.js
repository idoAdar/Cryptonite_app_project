import React from 'react';
import Img from '../Me/Small.jpg'
import classes from './Me.module.css';

const Me = () => {
    return (
        <div>
            <div className={classes.profile_container}>
                <div>
                    <h1 className={classes.profile_text}>Ido Adar</h1>    
                </div>
                <div>
                    <img src={Img} alt="Me.jpg" className={classes.profile_img}/>
                </div>
                <div>
                    <p className={classes.profile_text}>This coin project build with React (Incl Redux & Router) and based on cryptocompare API</p>
                </div>
            </div>
        </div>
    )
}

export default Me;