import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import classes from './Modal.module.css';
import * as actions from '../../store/actions';
import Aux from '../_Aux/_Aux';
import Backdrop from '../UI/Backdrop/Backdrop';

class Modal extends Component {
    cancelFunc = () => {
        this.props.cancel();
    }

    nextFunc = () => {
        console.log(this.props.history.push('/live-reports'));
    }

    removeReport = (id) => {
       const updateReports = this.props.selected.filter(coin => coin.id !== id);
       this.props.updateLiveReport(updateReports);
    }

    render() {
        return (
            <Aux>
                <Backdrop />
                <div className={classes.Modal_grid}>
                    <div className={classes.Selected_logo}>
                        <div className={classes.Logo}>
                            <span><i className="fab fa-bitcoin fa-5x"></i></span>
                        </div>
                        <div>
                            <button onClick={this.nextFunc}>NEXT</button>
                            <button onClick={this.cancelFunc}>CANCEL</button>
                        </div>
                    </div>
                    <div className={classes.Selected_coins}>
                        <h3>Maximum Selected Coins:</h3>
                        {this.props.selected.map(coin => {
                            return (
                                <div key={coin.id} className={classes.Report}>
                                    <p>{coin.name}</p>
                                    <button onClick={() => this.removeReport(coin.id)}>X</button>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </Aux>
        )    
    }
}

const mapStateToProps = state => {
    return {
        selected: state.liveReports
    }
}

const mapDispatchToProps = dispatch => {
    return {
        cancel: () => dispatch(actions.reset()),
        updateLiveReport: (data) => dispatch(actions.updateLive(data))
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Modal));