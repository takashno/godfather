import { namingAction } from './actions'
import axios from 'axios'
import { Action, Dispatch } from 'redux';
import { Godfahter } from '../../Types';
import { backendHost } from '../utils/envUtils';

export const namingOperation = (
    target: string,
    lowerCamelCase: boolean,
    lowerSnakeCase: boolean,
    upperCamelCase: boolean,
    upperSnakeCase: boolean) => {
    return async (dispach: Dispatch<Action>, getState: () => Godfahter) => {
        const state = getState();
        // textareaの値を改行コードで分割
        const targets: string[] = target.split(/\n/);
        const filteredTargets: string[] = targets.filter(x => x);
        const obj = {
            targets: filteredTargets,
            lowerCamelCase: lowerCamelCase,
            lowerSnakeCase: lowerSnakeCase,
            upperCamelCase: upperCamelCase,
            upperSnakeCase: upperSnakeCase
        };
        const respose = await axios.post(backendHost() + '/naming', obj);
        dispach(namingAction(filteredTargets, respose.data));
    }
}