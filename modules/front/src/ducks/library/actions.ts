import { Criteria, RegistWordsResult, LIBRARY_ACTION_TYPES, RegistWordsAction } from "../../Types";


/**
 * RegistWordリスト取得アクション.
 * @param {*} target 
 * @returns 
 */
export const registedWordsAction = (criteria: Criteria, results: RegistWordsResult): RegistWordsAction => ({
    type: LIBRARY_ACTION_TYPES.REGIST_WORDS,
    payload: {
        criteria: criteria,
        results: results
    }
});