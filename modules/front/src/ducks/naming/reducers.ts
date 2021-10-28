import { NAMING, NamingAction } from "../../Types";
import initialState from "../store/initialState";

/**
 * ネーミング機能Reducers.
 * @param {*} state 
 * @param {*} action 
 * @returns 
 */
const NamingReducer = (state = initialState.naming, action: NamingAction) => {
    switch (action.type) {
        case NAMING:
            return {
                target: action.payload.target,
                results: action.payload.results
            };
        default:
            return state;
    }
};

export default NamingReducer;