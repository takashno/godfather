import { LIBRARY_REGISTRATION, LibraryRegistrationAction, Word, LibraryRegistrationResult } from "../../Types";


/**
 * LibraryRegistrationアクション.
 * @param {*} target 
 * @returns 
 */
export const libraryRegistrationAction = (target: Word, result: LibraryRegistrationResult): LibraryRegistrationAction => ({
    type: LIBRARY_REGISTRATION,
    payload: {
        target: target,
        result: result
    }
});