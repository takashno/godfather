  
import {
    createStore as reduxCreateStore,
    combineReducers,
    applyMiddleware
} from 'redux';
import {connectRouter, routerMiddleware} from 'connected-react-router'
import NamingReducer from '../naming/reducers';

// 現在どこのページにいるのか？というような情報を持っているのがhistory
export const createStore = (history) => {
    return reduxCreateStore(
        combineReducers({
            router: connectRouter(history),
            naming: NamingReducer
        }),
        applyMiddleware(
            routerMiddleware(history)
        )
    )
}