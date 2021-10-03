package model

type LibraryListRequest struct {
	Pagination PaginationRequest `json:"pagination"`
}

type LibraryListRespose struct {
	Words      []Word             `json:"words"`
	Pagination PaginationResponse `json:"pagination"`
}

// /library/list API Response Model.
type Word struct {
	Word      string `json:"word"`
	Converted string `json:"converted"`
}
