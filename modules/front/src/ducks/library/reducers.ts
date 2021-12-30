import { RegistWordsAction, LIBRARY_ACTION_TYPES } from "../../Types";
import initialState from "../store/initialState";

/**
 * 辞書Reducers
 * @param {*} state 
 * @param {*} action 
 * @returns 
 */
const LibraryReducer = (state = initialState.registedWords, action: RegistWordsAction) => {
    switch (action.type) {
        case LIBRARY_ACTION_TYPES.REGIST_WORDS:
            return {
                criteria: action.payload.criteria,
                results : action.payload.results
            };
        default:
            return state;
    }
};

export default LibraryReducer;