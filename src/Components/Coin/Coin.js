import React, { Component } from 'react';
import { connect } from 'react-redux';
import $ from 'jquery';

import * as actions from '../../store/actions';
import classes from './Coin.module.css';

import Spinner from '../UI/Spinner_v2/Spinner_v2';

class Coin extends Component {
    state = {
        info: false,
        spinner: false,
        searchState: {
            img: null,
            value: {
                lis: 0,
                usd: 0,
                eur: 0
            }
        },
    }

    infoFunc = (id) => {
        this.setState({ spinner: true });
        $.ajax({
            method: 'GET',
            url: `https://api.coingecko.com/api/v3/coins/${id}`
        })
        .done(response => {
            this.setState((prevState) => {
                return {
                    spinner: false,
                    searchState: {
                        img: response.image.small,
                        value: { ils: response.market_data.current_price.ils,
                            usd: response.market_data.current_price.usd,
                            eur: response.market_data.current_price.eur
                        }
                    },
                    info: !prevState.info
                }
            })      
        })
    }

    toggleCounterHandler = () => {
        const analyzeData = this.props.coins.filter(coin => coin.id === this.props.id);
        if (!this.props.liveReports.find(report => report.id === this.props.id )) {
            this.props.addLiveReports(analyzeData);
        } else {
            const extractData = analyzeData[0];
            this.props.removeLiveReports(extractData);
        }
    }

    isChecked = () => {
        if (this.props.liveReports.find(report => report.id === this.props.id ))
        return true
        else return false
    }
    
    render() {
        let moreDetails = null;
        if (this.state.info) {
            moreDetails = <div className={classes.More_details}>
                <img src={this.state.searchState.img} alt={"img"}/>
                <p>ILS: {this.state.searchState.value.ils.toFixed(2)} ש"ח - USD: {this.state.searchState.value.usd.toFixed(2)}$ - EUR: {this.state.searchState.value.eur.toFixed(2)}€</p>
            </div>
        }

        let spinner = null;
        if (this.state.spinner) {
            spinner = <Spinner />
        }

        return (
        <div className={classes.Currency_container}>
            <div className={classes.Currency_details_1}>
                <h3>{this.props.sort}</h3>
                <label className={classes.Switch}>
                    <input type="checkbox" onChange={() => this.toggleCounterHandler()} checked={this.isChecked()} />
                    <span className={[classes.Slider, classes.Round].join(' ')}></span>
                </label>
            </div>
            <div className={classes.Currency_details_2}>
                <p>{this.props.logo}</p>
                <button onClick={() => this.infoFunc(this.props.id)}><i className="fas fa-arrow-circle-down fa-3x"></i></button>
            </div>
            <div>
                {spinner}
                {moreDetails}
            </div>
        </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        coins: state.list,
        check: state.isChecked,
        liveReports: state.liveReports
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addLiveReports: (data) => dispatch(actions.saveData(data)),
        removeLiveReports: (data) => dispatch(actions.removeData(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Coin);