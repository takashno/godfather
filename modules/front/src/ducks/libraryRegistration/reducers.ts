import { LibraryRegistrationAction, LIBRARY_REGISTRATION } from "../../Types";
import initialState from "../store/initialState";

/**
 * Word登録Reducers
 * @param {*} state 
 * @param {*} action 
 * @returns 
 */
const LibraryRegistrationReducer = (state = initialState.libraryRegistration, action: LibraryRegistrationAction) => {
    switch (action.type) {
        case LIBRARY_REGISTRATION:
            return {
                target: action.payload.target,
                result: {
                    status: action.payload.result.status,
                    target: action.payload.result.target
                }
            }
        default:
            return state;
    }
};

export default LibraryRegistrationReducer;