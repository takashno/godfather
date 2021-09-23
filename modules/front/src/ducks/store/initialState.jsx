const initialState = {
    naming: [
        {
            target: ['対象を入力してください.命名したいワード'],
            results: [
              {
                  case: "ケース",
                  name: "命名後の名称"
              }
        ]
        }
    ],
    setting: {
        lowerCamelCase: true,
        lowerSnakeCase: false,
        upperCamelCase: false,
        upperSnakeCase: false
    }
}
export default initialState;