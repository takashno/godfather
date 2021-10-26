import { NamingResult } from "../../Types";

export const NAMING = "NAMING";

/**
 * ネーミングアクション.
 * @param {*} target 
 * @returns 
 */
export const namingAction = (target: string[], results: NamingResult[]) => {
    return {
        type: NAMING,
        payload: {
            target: target,
            results: results
        }
    };
};