package model

type LibraryListRequest struct {
	Pagination PaginationRequest `json:"pagination"`
}

type RegistWordsRequest struct {
	Words []Word `json:"words"`
}

type DownloadLibraryRequest struct {
}

type LibraryListRespose struct {
	Words      []Word             `json:"words"`
	Pagination PaginationResponse `json:"pagination"`
}

type RegistWordsRespose struct {
	Words []WordRegistResult `json:"words"`
}

type DownloadLibraryRespose struct {
	Contents []byte
}

// /library/list API Response Model.
type Word struct {
	Word      string `json:"word"`
	Converted string `json:"converted"`
}

type WordRegistResult struct {
	Status        string `json:"status"`
	Word          string `json:"word"`
	Converted     string `json:"convreted"`
	FailureReason string `json:"failureReason"`
}

type YamlConvert struct {
	Locale    string `yaml:"locale"`
	Converted string `yaml:"converted"`
}

type YamlWord struct {
	Word       string        `yaml:"word"`
	Converteds []YamlConvert `yaml:"converteds"`
}

type YamlLibraryFile struct {
	// 埋め込み のフィールドに 'inline' タグをつける
	Words []YamlWord `yaml:"words"`
}
