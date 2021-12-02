import { LibraryRegistrationAction, Word, LibraryRegistrationResult, LibraryRegistrationRequest, LIBRARY_REGISTRATION_ACTION_TYPES} from "../../Types";


/**
 * LibraryRegistration初期化アクション.
 * @param {*} target 
 * @returns 
 */
export const libraryRegistrationInitAction = (target: LibraryRegistrationRequest, results: LibraryRegistrationResult[]): LibraryRegistrationAction => ({
    type: LIBRARY_REGISTRATION_ACTION_TYPES.INIT,
    payload: {
        target: target,
        results: results
    }
});

/**
 * LibraryRegistrationアクション.
 * @param {*} target 
 * @returns 
 */
export const libraryRegistrationAction = (target: LibraryRegistrationRequest, results: LibraryRegistrationResult[]): LibraryRegistrationAction => ({
    type: LIBRARY_REGISTRATION_ACTION_TYPES.REGISTRATION,
    payload: {
        target: target,
        results: results
    }
});