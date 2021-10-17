export const REGISTED_WORDS = "REGISTED_WORDS";

/**
 * RegistWordリスト取得アクション.
 * @param {*} target 
 * @returns 
 */
export const registedWordsAction = (criteria, results) => {
    return {
        type: REGISTED_WORDS,
        payload: {
            criteria: criteria,
            results: results
        }
    };
};