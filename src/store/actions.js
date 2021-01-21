import $ from 'jquery';

export const updateState = (results) => {
    return {
        type: 'UPDATESTATE',
        res: results
    }
}

export const thunkFunc = () => {
    return dispatch => {
        $.ajax({
            method: 'GET',
            url: 'https://api.coingecko.com/api/v3/coins/list'
        })
        .done(response => {
            const cuttingState = response.slice(850, 880);
            dispatch(updateState(cuttingState));
        })
    }
}

export const searchMethod = (res) => {
    return {
        type: 'SEARCH',
        res: res
    }
}

export const saveData = (data) => {
    return {
        type: 'PUSH',
        data: data
    }
}

export const removeData = (data) => {
    return {
        type: 'REMOVE',
        data: data
    }
}

export const updateChart = (data) => {
    return {
        type: 'CHART',
        data: data
    }
}

export const thunkChartFunc = (symbols) => {
    const keys = symbols.toString();
    return dispatch => {
        $.ajax({
            method: 'GET',
            url: `https://min-api.cryptocompare.com/data/pricemulti?fsyms=${keys}&tsyms=USD`
        })
        .done(response => {
            dispatch(updateChart(response));
        })
        .fail(err => {
            console.log(err);
        })
    }
}

export const clear = () => {
    return {
        type: 'CLEAR'
    }
}

export const reset = () => {
    return {
        type: 'RESET'
    }
}

export const updateLive = (data) => {
    return {
        type: 'REMOVESELECTEDREPORT',
        data: data
    }
}