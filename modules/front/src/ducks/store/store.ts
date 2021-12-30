
import {
    createStore as reduxCreateStore,
    combineReducers,
    applyMiddleware,
    compose
} from 'redux';
import thunk from 'redux-thunk';
import { connectRouter, routerMiddleware } from 'connected-react-router'
import NamingReducer from '../naming/reducers';
import settingReducer from '../setting/reducers';
import LibraryReducer from '../library/reducers';
import LibraryRegistrationReducer from '../libraryRegistration/reducers'
import { History } from 'history';
import LibraryUploadReducer from '../libraryUpload/reducers';

interface ExtendedWindow extends Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
  declare var window: ExtendedWindow;
  
  const composeReduxDevToolsEnhancers = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  

// 現在どこのページにいるのか？というような情報を持っているのがhistory
export const createStore = (history: History) => {
    return reduxCreateStore(
        combineReducers({
            router: connectRouter(history),
            naming: NamingReducer,
            setting: settingReducer,
            registedWords: LibraryReducer,
            libraryRegistration: LibraryRegistrationReducer,
            libraryUpload: LibraryUploadReducer
        }),
        composeReduxDevToolsEnhancers(applyMiddleware(
            routerMiddleware(history),
            thunk
        ))
    )
}