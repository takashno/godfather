
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

export interface Setting {
    caseSetting: SettingObj;
}

/**
 * Godfather全体のStateインタフェース.
 */
export interface Godfahter {
    naming: Naming;
    registedWords: RegistedWords;
    setting: Setting;
}
