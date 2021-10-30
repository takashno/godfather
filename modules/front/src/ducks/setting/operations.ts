import { Dispatch } from 'react';
import { Action } from 'redux';
import { Godfahter, SettingObj } from '../../Types';
import { settingAction } from './actions'

export const settingOperation = (caseSetting: SettingObj) => {
    return async (dispach: Dispatch<Action>, getState: () => Godfahter) => {
        dispach(settingAction(caseSetting));   
    }
}