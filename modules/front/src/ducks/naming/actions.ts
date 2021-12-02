import { NAMING, NamingAction, NamingResult } from "../../Types";

/**
 * ネーミングアクション.
 * @param {*} target 
 * @returns 
 */
export const namingAction = (target: string[], results: NamingResult[]): NamingAction => ({
    type: NAMING,
    payload: {
        target: target,
        results: results
    }
});