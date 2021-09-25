package model

// // /naming API Response Model.
// type NamingResult struct {
// 	Result []Naming
// }

type Naming struct {
	Target string `json:"target"`
	LowerCamelCase string `json:"lowerCamelCase"`
	LowerSnakeCase string `json:"lowerSnakeCase"`
	UpperCamelCase string `json:"upperCamelCase"`
	UpperSnakeCase string `json:"upperSnakeCase"`
}