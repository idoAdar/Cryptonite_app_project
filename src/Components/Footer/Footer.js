import React from 'react';
import classes from './Footer.module.css';

const Footer = () => {
    return (
        <div>
            <div className={classes.Footer}>
            <div className={classes.IconFooter}>
                <h4>Keep in touch</h4>
                <i className="fab fa-apple fa-2x"></i>
                <i className="fas fa-carrot fa-2x"></i>
                <i className="fas fa-anchor fa-2x"></i>
                <i className="fab fa-apple fa-2x"></i>
                <i className="fas fa-burn fa-2x"></i>
                <i className="fas fa-chart-pie fa-2x"></i>
            </div>
            <div className={classes.FooterContent}>
                <h4>Info . Support . Marketing</h4>
                <h4>Terms of Live - Privacy Policy</h4>
                <p>- 2020 IdoAdar -</p>            
            </div>
        </div>
        </div>
    )
}

export default Footer;