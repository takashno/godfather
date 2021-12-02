import { libraryRegistrationAction } from './actions'
import axios from 'axios'
import { Action, Dispatch } from 'redux';
import { Godfahter, Word } from '../../Types';

export const libraryRegistrationOperation = (
    word: string,
    converted: string) => {
    return async (dispach: Dispatch<Action>, getState: () => Godfahter) => {
        const state = getState();
        const registWord: Word = {
            word: word,
            converted: converted
        };
        const registWords: Word[] = [];
        registWords.push(registWord);
        const request = {
            words: registWords
        };
        console.log('library/registration start.');
        const respose = await axios.post('http://localhost:3000/library/registration', request);
        console.log('library/registration end.');
        console.log(respose.data);
        dispach(libraryRegistrationAction(request, respose.data.words));   
    }
}