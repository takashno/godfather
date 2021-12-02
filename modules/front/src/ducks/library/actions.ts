import { Criteria, RegistWordsResult, REGIST_WORDS, RegistWordsAction } from "../../Types";


/**
 * RegistWordリスト取得アクション.
 * @param {*} target 
 * @returns 
 */
export const registedWordsAction = (criteria: Criteria, results: RegistWordsResult): RegistWordsAction => ({
    type: REGIST_WORDS,
    payload: {
        criteria: criteria,
        results: results
    }
});