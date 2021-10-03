package model

type PaginationRequest struct {
	Limit int    `json:"limit"`
	Page  int    `json:"page"`
	Sort  string `json:"sort"`
}

type PaginationResponse struct {
	Limit     int    `json:"limit"`
	Page      int    `json:"page"`
	TotalPage int    `json:"totalPage"`
	TotalSize int    `json:"totalSize"`
	Sort      string `json:"sort"`
	LastPage  bool   `json:"lastPage"`
	FirstPage bool   `json:"firstPage"`
}
