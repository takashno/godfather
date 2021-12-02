import { act } from "react-dom/test-utils";
import { LibraryRegistrationAction, LIBRARY_REGISTRATION_ACTION_TYPES} from "../../Types";
import initialState from "../store/initialState";

/**
 * Word登録Reducers
 * @param {*} state 
 * @param {*} action 
 * @returns 
 */
const LibraryRegistrationReducer = (state = initialState.libraryRegistration, action: LibraryRegistrationAction) => {
    switch (action.type) {
        case LIBRARY_REGISTRATION_ACTION_TYPES.INIT:
            return {
                target: action.payload.target,
                results: action.payload.results
            }
        case LIBRARY_REGISTRATION_ACTION_TYPES.REGISTRATION:
            return {
                target: action.payload.target,
                results: action.payload.results
            }
        default:
            return state;
    }
};

export default LibraryRegistrationReducer;