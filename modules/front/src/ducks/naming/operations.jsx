import { namingAction } from './actions'
import axios from 'axios'

export const namingOperation = (target, lowerCamelCase, lowerSnakeCase, upperCamelCase, upperSnakeCase) => {
    return async (dispach, getState) => {
        const state = getState();
        console.log(state);

        // textareaの値を改行コードで分割
        const targets = target.split(/\n/);
        const obj = {
            targets: targets,
            lowerCamelCase: lowerCamelCase === "on",
            lowerSnakeCase: lowerSnakeCase === "on",
            upperCamelCase: upperCamelCase === "on",
            upperSnakeCase: upperSnakeCase === "on"
        };
        const respose = await axios.post('http://localhost:3000/naming', obj);
        dispach(namingAction(target, respose.data));   
    }
}