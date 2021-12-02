import { SettingAction, SettingObj } from "../../Types";

export const SETTING = "SETTING";

/**
 * 設定アクション.
 * @param {*} caseSetting 
 * @returns 
 */
export const settingAction = (caseSetting: SettingObj): SettingAction => ({
    type: SETTING,
    payload: {
        caseSetting: caseSetting
    }
});
