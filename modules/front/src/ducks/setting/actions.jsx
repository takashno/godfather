export const SETTING = "SETTING";

/**
 * 設定アクション.
 * @param {*} caseSetting 
 * @returns 
 */
export const settingAction = (caseSetting) => {
    console.log(caseSetting)
    return {
        type: SETTING,
        payload: {
            caseSetting: caseSetting
        }
    };
};
