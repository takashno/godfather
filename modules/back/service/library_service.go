package service

import (
	"fmt"
	"sort"

	"github.com/takashno/godfather/tree/main/modules/back/library"
	"github.com/takashno/godfather/tree/main/modules/back/model"
)

type LibraryService struct{}

// ロジックは後で見直す…
func (LibraryService) LibraryList(request *model.LibraryListRequest) (model.LibraryListRespose, error) {

	library := library.GetLibrary()

	// 返却モデル
	response := new(model.LibraryListRespose)

	// 全Keyを取得＆ソート
	keys := library.WordKeys()
	keys = sort.StringSlice(keys)

	// 全サイズ
	totalSize := len(keys)

	// 全ページ数
	totalPage := len(keys) / request.Pagination.Limit
	if len(keys)%request.Pagination.Limit > 0 {
		totalPage = totalPage + 1
	}

	// 返却結果
	var words []model.Word

	if request.Pagination.Page <= totalPage {
		// 開始インデックス
		from := 0
		if request.Pagination.Page > 1 {
			from = request.Pagination.Limit * (request.Pagination.Page - 1)
		}
		// 終了インデックス
		to := from + request.Pagination.Limit
		if len(keys) < from+request.Pagination.Limit {
			to = len(keys)
		}
		// 対象とするKeyスライス
		targetKeys := keys[from:to]
		for _, k := range targetKeys {
			word := new(model.Word)
			w, _ := library.ResolveWord(k)
			word.Word = k
			word.Converted = w
			words = append(words, *word)
		}
	}

	paginationRespose := new(model.PaginationResponse)
	paginationRespose.Limit = request.Pagination.Limit
	paginationRespose.Page = request.Pagination.Page
	paginationRespose.Sort = request.Pagination.Sort
	paginationRespose.TotalPage = totalPage
	paginationRespose.TotalSize = totalSize
	paginationRespose.FirstPage = request.Pagination.Page == 1
	paginationRespose.LastPage = request.Pagination.Page == totalPage

	response.Words = words
	response.Pagination = *paginationRespose

	return *response, nil
}

func (LibraryService) RegistWords(request *model.RegistWordsRequest) (model.RegistWordsRespose, error) {

	library := library.GetLibrary()

	registWordsRespose := new(model.RegistWordsRespose)

	for _, v := range request.Words {

		_, ok := library.ResolveWord(v.Word)

		wordRegistResult := new(model.WordRegistResult)
		wordRegistResult.Word = v.Word

		if ok {
			wordRegistResult.Converted = "-"
			wordRegistResult.FailureReason = "duplicate"
			wordRegistResult.Status = "fail"
		} else {
			// 存在しない場合に、登録を行う
			library.RegistWord(v.Word, v.Converted)
			wordRegistResult.Converted = v.Converted
			wordRegistResult.Status = "success"
		}

		registWordsRespose.Words = append(registWordsRespose.Words, *wordRegistResult)
	}

	fmt.Println(registWordsRespose)

	return *registWordsRespose, nil

}

func (LibraryService) DownloadLibrary(request *model.DownloadLibraryRequest) (model.DownloadLibraryRespose, error) {
	downloadLibraryResponse := new(model.DownloadLibraryRespose)
	// ファイルを直接見ても新たに登録されたワードは見れないからオンメモのライブラリから直接取得するように修正
	// contents, err := os.ReadFile("./library.yaml")
	// if err != nil {
	// 	return *downloadLibraryResponse, err
	// }
	// downloadLibraryResponse.Contents = contents
	library := library.GetLibrary()
	contents := library.ToYamlBytes()
	downloadLibraryResponse.Contents = contents
	return *downloadLibraryResponse, nil
}
