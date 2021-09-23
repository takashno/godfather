export const NAMING = "NAMING"
export const SETTING = "SETTING"

/**
 * 命名アクション.
 * @param {*} target 
 * @returns 
 */
export const naming = (target) => {
    return {
      type: NAMING,
      target: target
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
      lowerCamelCase: lowerCamelCase,
      lowerSnakelCase: lowerSnakelCase,
      upperCamelCase: upperCamelCase,
      upperSnakelCase: upperSnakelCase
    };
};