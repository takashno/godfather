import { LibraryUploadAction, LibraryUploadResult, LIBRARY_UPLOAD_ACTION_TYPES } from "../../Types";


/**
 * Uploadアクション
 * @param {*} uploadResult 
 * @returns LibraryUploadAction
 */
export const libraryUploadAction = (uploadResult: LibraryUploadResult): LibraryUploadAction => ({
    type: LIBRARY_UPLOAD_ACTION_TYPES.UPLOAD_LIBRARY,
    payload: {
        result: uploadResult
    }
});