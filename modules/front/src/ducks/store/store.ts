
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
import LibraryRegistrationReducer from '../libraryRegistration/reducers'
import { History } from 'history';

// 現在どこのページにいるのか？というような情報を持っているのがhistory
export const createStore = (history: History) => {
    return reduxCreateStore(
        combineReducers({
            router: connectRouter(history),
            naming: NamingReducer,
            setting: settingReducer,
            registedWords: LibraryReducer,
            libraryRegistration: LibraryRegistrationReducer
        }),
        applyMiddleware(
            routerMiddleware(history),
            thunk
        )
    )
}