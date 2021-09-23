import { NAMING } from "./actions";
import initialState from "../store/initialState";

/**
 * 命名Reducers
 * @param {*} state 
 * @param {*} action 
 * @returns 
 */
const NamingReducer = (state = initialState, action) => {
  switch (action.type) {
    case NAMING:
      // 命名
      return {
        // 記述量を少なく出来る、オブジェクトの展開した状態を表す（スプレッド構文）
        ...state,
        ...action.payload
        // draftName: action.draftName, 
        // draftMailaddress: action.draftMailaddress, 
        // draftNote: action.draftNote,
        // confirm: false,
        // name: action.name, 
        // mailaddress: action.mailaddress, 
        // note: action.note
      };
    default:
      return state;
  }
};

export default NamingReducer;