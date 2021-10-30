
import { waitForDomChange } from "@testing-library/react";
import { Godfahter } from "../../Types"

const initialState: Godfahter = {
    naming: {
        target: ['対象を入力してください.命名したいワード'],
        results: [
            {
                status: "ステータス",
                target: "対象のワード",
                convertTarget: "変換対象の文字",
                missings: [
                    "変換できなかった文字"
                ],
                lowerCamelCase: "lowerCamelCase変換文字",
                lowerSnakeCase: "lower_snake_case変換文字",
                upperCamelCase: "UpperCamelCase変換文字",
                upperSnakeCase: "UPPER_SNAKE_CASE変換文字"
            }
        ]
    },
    registedWords: {
        criteria: {
            limit: 10,
            page: 1
        },
        results: {
            pagination: {
                limit: 10,
                page: 1,
                sort: "",
                totalSize: 10,
                totalPage: 1,
                firstPage: false,
                lastPage: false
            },
            words: [
                {
                    word: "変換前",
                    converted: "変換後"
                }
            ]
        }
    },
    libraryRegistration: {
        target: {
            word: "登録対象ワード",
            converted: "変換後ワード"
        },
        result: {
            status: "ステータス",
            target: {
                word: "登録対象ワード",
                converted: "変換後ワード"
            }
        }
    },
    setting: {
        caseSetting: {
            lowerCamelCase: true,
            lowerSnakeCase: false,
            upperCamelCase: false,
            upperSnakeCase: true
        }
    }
}
export default initialState;