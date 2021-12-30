import { LibraryUploadAction, LibraryUploadResult, LIBRARY_UPLOAD_ACTION_TYPES } from "../../Types";

/**
 * Upload初期化アクション
 * @param {*} uploadResult 
 * @returns LibraryUploadAction
 */
 export const libraryUploadInitAction = (uploadResult: LibraryUploadResult): LibraryUploadAction => ({
    type: LIBRARY_UPLOAD_ACTION_TYPES.INIT,
    payload: {
        result: uploadResult
    }
});

/**
 * Uploadアクション
 * @param {*} uploadResult 
 * @returns LibraryUploadAction
 */
export const libraryUploadAction = (uploadResult: LibraryUploadResult): LibraryUploadAction => ({
    type: LIBRARY_UPLOAD_ACTION_TYPES.UPLOAD,
    payload: {
        result: uploadResult
    }
});