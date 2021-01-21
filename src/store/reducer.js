const initState = {
    list: '',
    listToSerach: '',
    isLoading: true,
    liveReports: [],
    chartData: [],
    counter: 0,
}

const reducer = (state = initState, action) => {
    switch (action.type) {
        case 'UPDATESTATE':
            return {
                ...state,
                isLoading: false,
                list: action.res,
                listToSerach: action.res
            }
        case 'SEARCH':
            return {
                ...state,
                list: action.res
            }
        case 'PUSH':
            return {
                ...state,
                liveReports: state.liveReports.concat(action.data),
                counter: state.counter + 1
            }
        case 'REMOVE':
            return {
                ...state,
                liveReports: state.liveReports.filter(report => report.id !== action.data.id),
                counter: state.counter - 1
            }
        case 'CHART':
            return {
                ...state,
                chartData: state.chartData.concat(action.data)
            }
        case 'CLEAR':
            return {
                list: '',
                isLoading: true,
                liveReports: [],
                chartData: [],
                counter: 0
            }
        case 'RESET':
            return {
                ...state,
                counter: 0,
                liveReports: []
            }
        case 'REMOVESELECTEDREPORT':
            return {
                ...state,
                liveReports: action.data,
            }
        default: return state;
    }
}

export default reducer;