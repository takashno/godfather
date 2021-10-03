package service

import (
	"fmt"
	"log"
	"strconv"
	"strings"

	"github.com/ikawaha/kagome-dict/ipa"
	"github.com/ikawaha/kagome/v2/tokenizer"
	"github.com/takashno/godfather/tree/main/modules/back/library"
	"github.com/takashno/godfather/tree/main/modules/back/model"
	"github.com/takashno/godfather/tree/main/modules/back/util"
	"go.uber.org/zap"
)

type NamingService struct{}

// ロジックは後で見直す…
func (NamingService) ResolveWord(request *model.NamingRequest) ([]model.Naming, error) {

	library := library.GetLibrary()

	logger, err := zap.NewProduction()
	if err != nil {
		log.Fatal(err.Error())
	}

	t, err := tokenizer.New(ipa.Dict(), tokenizer.OmitBosEos())
	if err != nil {
		panic(err)
	}

	// 命名結果
	namingResult := make([]model.Naming, len(request.Targets))

	for i, v := range request.Targets {

		logger.Debug("Naming --> Index:" + strconv.Itoa(i) + ", Target:" + v)

		// 文字列全体が辞書にヒットする場合は、そちらを優先する
		resolveWordFull, ok := library.ResolveWord(v)
		if ok {
			naming1 := new(model.Naming)
			naming1.Target = v
			naming1.ConvertTarget = v
			naming1.LowerCamelCase = resolveWordFull
			naming1.LowerSnakeCase = util.ToLowerSnakeCase(resolveWordFull)
			naming1.UpperCamelCase = util.FirstOnlyToUpper(resolveWordFull)
			naming1.UpperSnakeCase = util.ToUpperSnakeCase(resolveWordFull)
			namingResult[i] = *naming1
			continue
		}

		// tokenize
		fmt.Println("---tokenize---")
		var convertSlice []string
		tokens := t.Tokenize(v)
		for _, token := range tokens {
			features := strings.Join(token.Features(), ",")
			kind := token.Features()[0]
			if kind == "名詞" {
				convertSlice = append(convertSlice, token.Surface)
				fmt.Printf("%s\t%s\t%v\n", token.Surface, token.Features()[0], features)
			} else {
				fmt.Printf("%s\t%s\t%v\n", token.Surface, token.Features()[0], features)
			}
		}

		// 最終的に変換対象とした文字列を結合
		convertTarget := ""
		for _, s := range convertSlice {
			convertTarget = convertTarget + s
		}

		// 変換中スライス
		resolvingSlice := make([]string, len(convertSlice))
		// 変換失敗文字スライス
		var missingSlice []string
		// 変換用一時文字列
		resolving := ""
		for i := 0; i < len(convertSlice); i++ {

			// 名詞分離した文字列ごとに処理を行う
			resolving = convertSlice[i]

			// 登録辞書にヒットするか調べる
			resolveWord, ok := library.ResolveWord(resolving)
			if ok {
				// ヒットした場合、解決済文字列に追加
				resolvingSlice[i] = resolveWord
			} else {
				// ヒットしない場合、解決済文字列と変換失敗スライスに追加
				resolvingSlice[i] = resolving
				missingSlice = append(missingSlice, resolving)
			}
		}

		// LowerCamelCase化
		resolvedLowerCamelCase := ""
		for _, s := range resolvingSlice {
			if len(resolvedLowerCamelCase) != 0 {
				resolvedLowerCamelCase = resolvedLowerCamelCase + util.FirstOnlyToUpper(s)
			} else {
				resolvedLowerCamelCase = s
			}
		}

		naming1 := new(model.Naming)
		naming1.Target = v
		naming1.ConvertTarget = convertTarget
		naming1.Missings = missingSlice
		naming1.LowerCamelCase = resolvedLowerCamelCase
		naming1.LowerSnakeCase = util.ToLowerSnakeCase(resolvedLowerCamelCase)
		naming1.UpperCamelCase = util.FirstOnlyToUpper(resolvedLowerCamelCase)
		naming1.UpperSnakeCase = util.ToUpperSnakeCase(resolvedLowerCamelCase)
		namingResult[i] = *naming1

	}
	return namingResult, nil
}
