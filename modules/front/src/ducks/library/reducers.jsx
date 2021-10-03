import { REGISTED_WORDS } from "./actions";
import initialState from "../store/initialState";

/**
 * 命名Reducers
 * @param {*} state 
 * @param {*} action 
 * @returns 
 */
const LibraryReducer = (state = initialState.registedWords, action) => {
    switch (action.type) {
        case REGISTED_WORDS:
            return {
                criteria: action.payload.criteria,
                results : action.payload.results
            };
        default:
            return state;
    }
};

export default LibraryReducer;