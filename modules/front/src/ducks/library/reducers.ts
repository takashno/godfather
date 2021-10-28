import { RegistWordsAction, REGIST_WORDS } from "../../Types";
import initialState from "../store/initialState";

/**
 * 命名Reducers
 * @param {*} state 
 * @param {*} action 
 * @returns 
 */
const LibraryReducer = (state = initialState.registedWords, action: RegistWordsAction) => {
    switch (action.type) {
        case REGIST_WORDS:
            return {
                criteria: action.payload.criteria,
                results : action.payload.results
            };
        default:
            return state;
    }
};

export default LibraryReducer;