package service

import (
	"strings"
	"strconv"
	"go.uber.org/zap"
	"log"
	"github.com/takashno/godfather/tree/main/modules/back/model"
	"github.com/takashno/godfather/tree/main/modules/back/library"
	"github.com/takashno/godfather/tree/main/modules/back/util"
)

type NamingService struct {}

// ロジックは後で見直す…
func (NamingService) ResolveWord(request *model.NamingRequest) ([]model.Naming, error) {

	library := library.GetLibrary()

	logger, err := zap.NewProduction()
	if err != nil{
		log.Fatal(err.Error())
	}

	// 命名結果
	namingResult := make([]model.Naming,len(request.Targets))

	for i, v := range request.Targets {

		logger.Debug("Naming --> Index:" + strconv.Itoa(i) + ", Target:" + v)

		// 解決済文字列
		converted := ""
		// 解決中文字列
		resolving := ""

		// 文字列全体が辞書にヒットする場合は、そちらを優先する
		resolveWordFull, ok := library.ResolveWord(v);
		if (ok) {
			converted = resolveWordFull
		}

		// 文字列全体解決ができていない場合に、個別文字列解決を行う
		if ( len(converted) == 0 ) {
			// 1文字毎に分割
			slice := strings.Split(v, "")
			sliceLen := len(slice)
			for i := 0; i < sliceLen; i++ {
				// 解決中文字列に1文字ずつ足していく
				resolving = resolving + slice[i]
				// ヒットするか調べる
				resolveWord, ok := library.ResolveWord(resolving)
				if ok {
					// ヒットした場合、解決済文字列に追加
					if (len(converted) == 0) {
						converted = converted + resolveWord
					} else  {
						converted = converted + "_" + resolveWord
					}
					// 解決中文字列をクリア
					resolving = ""
				}
			}
		}

		naming1 := new(model.Naming)
		naming1.Target = v
		naming1.LowerCamelCase = "lowerCamelCase"
		naming1.LowerSnakeCase = util.ToLowerSnakeCase(converted)
		naming1.UpperCamelCase = "UpperCamelCase"
		naming1.UpperSnakeCase = util.ToUpperSnakeCase(converted)
		namingResult[i] = *naming1

	}
	return namingResult, nil
}