import { libraryRegistrationAction } from './actions'
import axios from 'axios'
import { Action, Dispatch } from 'redux';
import { Godfahter, Word } from '../../Types';

export const libraryRegistrationOperation = (
    word: string,
    converted: string) => {
    return async (dispach: Dispatch<Action>, getState: () => Godfahter) => {
        const state = getState();
        const request: Word = {
            word: word,
            converted: converted
        };
        const respose = await axios.post('http://localhost:3000/library/registration', request);
        dispach(libraryRegistrationAction(request, respose.data));   
    }
}