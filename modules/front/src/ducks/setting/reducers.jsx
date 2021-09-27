import { SETTING } from "./actions";
import initialState from "../store/initialState";

/**
 * 設定Reducers
 * @param {*} state 
 * @param {*} action 
 * @returns 
 */
const settingReducer = (state = initialState.setting, action) => {
    switch (action.type) {
        case SETTING:
            return {
                caseSetting : action.payload.caseSetting
            };
        default:
            return state;
    }
};

export default settingReducer;