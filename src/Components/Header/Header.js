import React from 'react';
import classes from './Header.module.css';

const Header = () => {
    return (
        <div className={classes.Header_container}>
            <div className={classes.Title_container}>
                <h1>Cryptonite</h1>
                <p>Keep track on your profits in one single platform - easy as that</p>
            </div>
            <div className={classes.Logo_container}>
                <span><i className="fas fa-dice-d20 fa-5x"></i></span>
            </div>
        </div>
    )
}

export default Header;