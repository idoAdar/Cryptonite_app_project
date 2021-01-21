import React, { Component } from 'react';
import { connect } from 'react-redux';

import classes from './Home.module.css';
import Aux from '../../_Aux/_Aux';
import * as actions from '../../../store/actions';

import Coin from '../../Coin/Coin';
import Modal from '../../Modal/Modal';
import Spinner from '../../UI/Spinner_v1/Spinner_v1';

class Home extends Component {
    state = {key: ''};

    componentDidMount() {
        this.props.addCoinsToState();
    }

    shouldComponentUpdate = (nextProps, nextState) => {
        if (nextState.key !== this.state.key) {
            setTimeout(() => {
                const copyToSerach = this.props.listToSerach;
                let results = copyToSerach.filter(coin => coin.name.toLowerCase().indexOf(this.state.key.toLowerCase()) !== -1);
                this.props.updateSearch(results);
            }, 0);
        }
        return true;
    }

    render() {
        let spinner = null;
        if (this.props.isLoading) {
            spinner = <Spinner />
        }

        let coinsList = null;
        if (!this.props.isLoading) {
            coinsList = <div className={classes.Main_container}>
                {this.props.coins.map(coin => {
                    return <Coin key={Math.random()} id={coin.id} sort={coin.name} logo={coin.symbol}/>
                })}
            </div>
        }

        let modal = null;
        if (this.props.ctr === 5) {
            modal = <Modal />
        }

        return (
            <Aux>
                {modal}
                <div className={classes.Parallax}>
                {spinner}
                <form className={classes.Form_container}>
                    <input type="text" onChange={(e) => this.setState({ key: e.target.value })}/>
                    <button disabled>Search</button>
                </form>
                {coinsList}
                </div>
            </Aux>
        )
    }
}

const mapStateToProps = state => {
    return {
        coins: state.list,
        listToSerach: state.listToSerach,
        isLoading: state.isLoading,
        ctr: state.counter
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addCoinsToState: () => dispatch(actions.thunkFunc()),
        updateSearch: (res) => dispatch(actions.searchMethod(res))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);