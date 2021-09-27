export const NAMING = "NAMING";

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