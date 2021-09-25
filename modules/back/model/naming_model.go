package model

// /naming API Request Model.
type NamingRequest struct {
	Targets []string `form:"targets" json:"targets"`
	LowerCamelCase bool `form:"lowerCamelCase" json:"lowerCamelCase"`
	LowerSnakeCase bool `form:"lowerSnakeCase"`
	UpperCamelCase bool `form:"upperCamelCase"`
	UpperSnakeCase bool `form:"upperSnakeCase"`
}

// /naming API Response Model.
type Naming struct {
	Target string `json:"target"`
	Missings []string `json:"missings"`
	LowerCamelCase string `json:"lowerCamelCase"`
	LowerSnakeCase string `json:"lowerSnakeCase"`
	UpperCamelCase string `json:"upperCamelCase"`
	UpperSnakeCase string `json:"upperSnakeCase"`
}