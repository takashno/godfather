import { Action } from "redux";

export interface NamingResult {
    status: string;
    target: string;
    convertTarget: string;
    missings: string[];
    lowerCamelCase: string;
    lowerSnakeCase: string;
    upperCamelCase: string;
    upperSnakeCase: string;
}

export interface SettingObj {
    lowerCamelCase: boolean;
    lowerSnakeCase: boolean;
    upperCamelCase: boolean;
    upperSnakeCase: boolean;
}

export interface Criteria {
    limit: number;
    page: number;
}

export interface Naming {
    target: string[];
    results: NamingResult[];
}

export interface LibraryUploadResult {
    status: string;
}

/**
 * ページネーション.
 */
export interface Pagination {
    limit: number;
    page: number;
    sort: string;
    totalSize: number;
    totalPage: number;
    firstPage: boolean;
    lastPage: boolean;
}

/**
 * ワード.
 */
export interface Word {
    word: string;
    converted: string;
}

export interface RegistWordsResult {
    pagination: Pagination;
    words: Word[];
}

/**
 * 登録ワード
 */
export interface RegistedWords {
    criteria: Criteria;
    results: RegistWordsResult;
}

export interface LibraryUpload {
    result: LibraryUploadResult;
}


export interface LibraryRegistrationRequest {
    words: Word[];
}

export interface LibraryRegistrationResult {
    status: string;
    failureReason: string;
    word: string;
    converted: string;
}

export interface LibraryRegistration {
    target: LibraryRegistrationRequest;
    results: LibraryRegistrationResult[];
}

export interface LibraryUpload {
    result: LibraryUploadResult
}

export interface Setting {
    caseSetting: SettingObj;
}

/**
 * Godfather全体のStateインタフェース.
 */
export interface Godfahter {
    naming: Naming;
    registedWords: RegistedWords;
    libraryRegistration: LibraryRegistration;
    libraryUpload: LibraryUpload;
    setting: Setting;
}

export const LIBRARY_ACTION_TYPES = {
    LIBRARY_INIT: 'LIBRARY_INIT',
    REGIST_WORDS: 'REGIST_WORDS'
}
export const NAMING: 'NAMING' = 'NAMING';
export const SETTING: 'SETTING' = 'SETTING';
export const LIBRARY_REGISTRATION_ACTION_TYPES = {
    INIT: "LIBRARY_REGISTRATION_INIT",
    REGISTRATION: 'LIBRARY_REGISTRATION'
}
export const LIBRARY_UPLOAD_ACTION_TYPES = {
    INIT: "UPLOAD_LIBRARY_INIT",
    UPLOAD: 'UPLOAD_LIBRARY'
}

export interface RegistWordsAction extends Action {
    type: string;
    payload: {
        criteria: Criteria;
        results: RegistWordsResult;
    }
}

export interface NamingAction extends Action {
    type: typeof NAMING;
    payload: {
        target: string[];
        results: NamingResult[];
    }
}

export interface SettingAction extends Action {
    type: typeof SETTING;
    payload: Setting;
}

export interface LibraryRegistrationAction extends Action {
    type: String;
    payload: LibraryRegistration;
}

export interface LibraryUploadAction extends Action {
    type: string;
    payload: LibraryUpload;
}