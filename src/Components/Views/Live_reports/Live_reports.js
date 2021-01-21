import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions';
import classes from './Live_reports.module.css';

import CanvasJSReact from "../../../canvasjs.react";
const CanvasJSChart = CanvasJSReact.CanvasJSChart;

class LiveReportPage extends Component {
    state = {
        price: {},
        isSelect: false
    }

    componentWillMount() {
        if (this.props.reports.length > 0) {
            const symbolArray = [];
            this.props.reports.forEach(report => {
                symbolArray.push(report.symbol);
            });
            this.props.updateChart(symbolArray);
        } else {
            this.setState({isSelect: true});
        }
    }

    componentDidUpdate(nextProps) {
        const data = [];
        if (nextProps.chartInfo !== this.props.chartInfo) {
            const values = this.props.chartInfo[0];
            for (let key in values) {
                const extraction = Object.values(values[key]);
                const value = extraction[0];
                const reportDetails = {
                    type: "spline",
                    name: `${key}`,
                    showInLegend: false,
                    xValueFormatString: "Coins:",
                    dataPoints: [
                        { x: new Date(2019), y: `${value}` * 150 },
                        { x: new Date(2020), y: `${value}` * 150 },
                        { x: new Date(2021), y: `${value}` * 150 },
                        { x: new Date(2021), y: `${value}` * 150 },
                        { x: new Date(2021), y: `${value}` * 150 },
                        { x: new Date(2021), y: `${value}` * 150 },
                        ]
                    }
                    data.push(reportDetails);
            }

            const configChart = {
            theme: "light1",
            animationEnabled: true,
            title:{
                text: "Tracking Selected Coins:"
            },
            subtitles: [{
                text: "Follow your profit in real time..."
            }],
            axisX: {
                title: "Real time value"
            },
            axisY: {
                title: "Coin value",
                titleFontColor: "#6D78AD",
                lineColor: "#6D78AD",
                labelFontColor: "#6D78AD",
                tickColor: "#6D78AD"
            },
            toolTip: {
                shared: true
            }}
        configChart.data = data;
        this.setState({price: configChart});
        }
    }

    componentWillUnmount() {
        this.props.clear();
    }

    render() {
        let noSelection = null;
        if (this.state.isSelect) {
            noSelection = <h1 className={classes.Empty}>Please make sure to select some coins...</h1>
        }

        return (
            <div>
                {noSelection}
               <CanvasJSChart options={this.state.price} />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        reports: state.liveReports,
        chartInfo: state.chartData
    }
}

const mapDispatchToProps = dispatch => {
    return {
        updateChart: (keys) => dispatch(actions.thunkChartFunc(keys)),
        clear: () => dispatch(actions.clear())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LiveReportPage);