package service

import (
	"sort"

	"github.com/takashno/godfather/tree/main/modules/back/library"
	"github.com/takashno/godfather/tree/main/modules/back/model"
)

type LibraryService struct{}

// ロジックは後で見直す…
func (LibraryService) LibraryList(request *model.LibraryListRequest) (model.LibraryListRespose, error) {

	library := library.GetLibrary()

	// logger, err := zap.NewProduction()
	// if err != nil {
	// 	log.Fatal(err.Error())
	// }

	// 返却モデル
	response := new(model.LibraryListRespose)

	// 全Keyを取得＆ソート
	keys := library.WordKeys()
	keys = sort.StringSlice(keys)
	from := 0
	if request.Pagination.Page > 1 {
		from = request.Pagination.Limit * (request.Pagination.Page - 1)
	}
	to := from + request.Pagination.Limit
	if len(keys) < from+request.Pagination.Limit {
		to = len(keys)
	}
	targetKeys := keys[from:to]

	// 全サイズ
	totalSize := len(keys)

	// 全ページ数
	totalPage := len(keys) / request.Pagination.Limit
	if len(keys)%request.Pagination.Limit > 0 {
		totalPage = totalPage + 1
	}

	// 返却結果
	var words []model.Word
	for _, k := range targetKeys {
		word := new(model.Word)
		w, _ := library.ResolveWord(k)
		word.Word = k
		word.Converted = w
		words = append(words, *word)
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
