
import {
    createStore as reduxCreateStore,
    combineReducers,
    applyMiddleware
} from 'redux';
import thunk from 'redux-thunk';
import { connectRouter, routerMiddleware } from 'connected-react-router'
import NamingReducer from '../naming/reducers';
import settingReducer from '../setting/reducers';
import LibraryReducer from '../library/reducers';

// 現在どこのページにいるのか？というような情報を持っているのがhistory
export const createStore = (history) => {
    return reduxCreateStore(
        combineReducers({
            router: connectRouter(history),
            naming: NamingReducer,
            setting: settingReducer,
            registedWords: LibraryReducer
        }),
        applyMiddleware(
            routerMiddleware(history),
            thunk
        )
    )
}