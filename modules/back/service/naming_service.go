package service

import (
	"fmt"
	"strings"
	"strconv"
	"go.uber.org/zap"
	"log"
	"github.com/takashno/godfather/tree/main/modules/back/model"
	"github.com/takashno/godfather/tree/main/modules/back/library"
	"github.com/takashno/godfather/tree/main/modules/back/util"
)

type NamingService struct {
	// ResolveWord(target string) ([]model.Naming)
}


func (NamingService) ResolveWord(request *model.NamingRequest) ([]model.Naming, error) {

	library := library.GetLibrary()

	logger, err := zap.NewProduction()
	if err != nil{
		log.Fatal(err.Error())
	}

	// 命名結果
	namingResult := make([]model.Naming,len(request.Targets))

	for i, v := range request.Targets {
		logger.Info("index:" + strconv.Itoa(i) + " target:" + v)

		converted := ""
		resolving := ""

		slice := strings.Split(v, "")
		len := len(slice)
		for i := 0; i < len; i++ {
			fmt.Printf("%s ", slice[i])
			resolving = resolving + slice[i]
			resolveWord, ok := library.ResolveWord(resolving)
			if ok {
				converted = converted + "_" + resolveWord
				resolving = ""
			}
		}
		fmt.Println("converted----->"+converted)

		naming1 := new(model.Naming)
		naming1.Target = v
		naming1.LowerCamelCase = "lowerCamelCase"
		naming1.LowerSnakeCase = converted
		naming1.UpperCamelCase = "UpperCamelCase"
		naming1.UpperSnakeCase = util.ToUpperSnakeCase(converted)
		namingResult[i] = *naming1

	}

	
	// _, ok := library.ResolveWord("あい")
	// if ok {
	// 	naming1 := new(model.Naming)
	// 	naming1.Target = "target"
	// 	naming1.LowerCamelCase = "lowerCamelCase"
	// 	naming1.LowerSnakeCase = "lower_snake_case"
	// 	naming1.UpperCamelCase = "UpperCamelCase"
	// 	naming1.UpperSnakeCase = "UPPER_SNAKE_CASE"
	// 	namingResult[0] = *naming1
	// } else {
	// 	naming1 := new(model.Naming)
	// 	naming1.Target = "nothing"
	// 	naming1.LowerCamelCase = "lowerCamelCase"
	// 	naming1.LowerSnakeCase = "lower_snake_case"
	// 	naming1.UpperCamelCase = "UpperCamelCase"
	// 	naming1.UpperSnakeCase = "UPPER_SNAKE_CASE"
	// 	namingResult[0] = *naming1
	// }
	return namingResult, nil
}