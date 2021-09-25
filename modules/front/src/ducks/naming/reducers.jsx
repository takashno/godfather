import { NAMING } from "./actions";
import initialState from "../store/initialState";

/**
 * 命名Reducers
 * @param {*} state 
 * @param {*} action 
 * @returns 
 */
const NamingReducer = (state = initialState.naming, action) => {
    switch (action.type) {
        case NAMING:
            return {
                target: action.payload.target,
                results : action.payload.results
            };
        default:
            return state;
    }
};

export default NamingReducer;