import { settingAction } from './actions'

export const settingOperation = (caseSetting) => {
    return async (dispach, getState) => {
        dispach(settingAction(caseSetting));   
    }
}