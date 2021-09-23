const initialState = {
    naming: {
        target: ['対象を入力してください.命名したいワード'],
        results: [
            {
                target: "対象のワード",
                lowerCamelCase: "lowerCamelCase変換文字",
                lowerSnakeCase: "lower_snake_case変換文字",
                upperCamelCase: "UpperCamelCase変換文字",
                upperSnakeCase: "UPPER_SNAKE_CASE変換文字"
            }
        ]
    },
    setting: {
        lowerCamelCase: true,
        lowerSnakeCase: false,
        upperCamelCase: false,
        upperSnakeCase: false
    }
}
export default initialState;