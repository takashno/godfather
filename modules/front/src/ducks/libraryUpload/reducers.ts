import { LIBRARY_UPLOAD_ACTION_TYPES, LibraryUploadAction } from "../../Types";
import initialState from "../store/initialState";

/**
 * 辞書アップロードReducers
 * @param {*} state 
 * @param {*} action 
 * @returns 
 */
const LibraryUploadReducer = (state = initialState.libraryUpload, action: LibraryUploadAction) => {
    switch (action.type) {
        case LIBRARY_UPLOAD_ACTION_TYPES.INIT:
            return {
                result: action.payload.result
            }
        case LIBRARY_UPLOAD_ACTION_TYPES.UPLOAD:
            return {
                result: action.payload.result
            }
        default:
            return state;
    }
};

export default LibraryUploadReducer;