import axios from 'axios'
import { Godfahter } from '../../Types'
import { Dispatch } from 'react'
import { Action } from 'redux'
import { backendHost } from '../utils/envUtils'
import { libraryUploadAction } from './actions'

/**
 * 辞書アップロードOperations.
 * @param fileInput 
 * @returns 
 */
export const libraryUploadOperation = (fileInput: React.RefObject<HTMLInputElement>) => {
    return async (dispatch: Dispatch<Action>, getState: () => Godfahter) => {
        const submitData = new FormData()
        if (fileInput !== null 
            && fileInput.current !== null 
            && fileInput.current.files != null) {
            submitData.append("library", fileInput.current.files[0])
            console.log('library upload start.');
            const response = await axios.post(backendHost() + `/library/upload`, submitData,
                {
                    headers: {
                        'content-type': 'multipart/form-data',
                    },
                });
            console.log('library upload end.');
            dispatch(libraryUploadAction(response.data));
        }
    }
}