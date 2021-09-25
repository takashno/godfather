package service

import (
	"github.com/takashno/godfather/tree/main/modules/back/model"
	"github.com/takashno/godfather/tree/main/modules/back/library"
)

type NamingService struct {
	// ResolveWord(target string) ([]model.Naming)
}


func (NamingService) ResolveWord(
	target string,
	lowerCamelCase string,
	lowerSnakeCase string,
	upperCamelCase string,
	upperSnakeCase string) ([]model.Naming) {

	namingResult := make([]model.Naming,1)

	library := library.GetLibrary()
	_, ok := library.ResolveWord(target)
	if ok {
		naming1 := new(model.Naming)
		naming1.Target = "target"
		naming1.LowerCamelCase = "lowerCamelCase"
		naming1.LowerSnakeCase = "lower_snake_case"
		naming1.UpperCamelCase = "UpperCamelCase"
		naming1.UpperSnakeCase = "UPPER_SNAKE_CASE"
		namingResult[0] = *naming1
	} else {
		naming1 := new(model.Naming)
		naming1.Target = "nothing"
		naming1.LowerCamelCase = "lowerCamelCase"
		naming1.LowerSnakeCase = "lower_snake_case"
		naming1.UpperCamelCase = "UpperCamelCase"
		naming1.UpperSnakeCase = "UPPER_SNAKE_CASE"
		namingResult[0] = *naming1
	}
	return namingResult
}