import { SettingObj } from "../../Types";

export const SETTING = "SETTING";

/**
 * 設定アクション.
 * @param {*} caseSetting 
 * @returns 
 */
export const settingAction = (caseSetting: SettingObj) => {
    return {
        type: SETTING,
        payload: {
            caseSetting: caseSetting
        }
    };
};
