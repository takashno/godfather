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
            
            console.log('kita-');

            let results = [
                {
                    target: "対象ワード11",
                    lowerCamelCase: "targetWord1",
                    lowerSnakeCase: "target_word_1" + Math.random().toString(36).slice(-8),
                    upperCamelCase: "TargetWord1" + Math.random().toString(36).slice(-8),
                    upperSnakeCase: "TARGET_WORD_1"
                },
                {
                    target: "対象ワード22",
                    lowerCamelCase: "targetWord2",
                    lowerSnakeCase: "target_word_2",
                    upperCamelCase: "TargetWord2",
                    upperSnakeCase: "TARGET_WORD_2" + Math.random().toString(36).slice(-8)
                }
            ];

            return {
                target: action.payload.target,
                results : results
            };
        default:
            return state;
    }
};

export default NamingReducer;