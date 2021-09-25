export const NAMING = "NAMING";
export const SETTING = "SETTING";

/**
 * ネーミングアクション.
 * @param {*} target 
 * @returns 
 */
export const namingAction = (target, results) => {
    return {
        type: NAMING,
        payload: {
            target: target,
            results: results
        }
    };
};

/**
 * 設定アクション.
 * @param {*} lowerCamelCase 
 * @param {*} lowerSnakelCase 
 * @param {*} upperCamelCase 
 * @param {*} upperSnakelCase 
 * @returns 
 */
export const setting = (lowerCamelCase, lowerSnakelCase, upperCamelCase, upperSnakelCase) => {
    return {
        type: SETTING,
        payload: {
            lowerCamelCase: lowerCamelCase,
            lowerSnakelCase: lowerSnakelCase,
            upperCamelCase: upperCamelCase,
            upperSnakelCase: upperSnakelCase
        }
    };
};