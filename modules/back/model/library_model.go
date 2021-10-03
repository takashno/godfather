package model


type LibraryListRespose struct {
	Words []Word `json:"words"`
}

// /library/list API Response Model.
type Word struct {
	Word string `json:"word"`
	Converted string `json:"converted"`
}