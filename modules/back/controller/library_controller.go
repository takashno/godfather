package controller

import (
	"net/http"
	"strconv"

	"github.com/gin-gonic/gin"
	"github.com/takashno/godfather/tree/main/modules/back/model"
	"github.com/takashno/godfather/tree/main/modules/back/service"
)

type LibraryController struct{}

func (pc LibraryController) ListLibrary(c *gin.Context) {

	// JSON BodyのParse
	// request := model.LibraryListRequest{}
	// err := c.Bind(&request)
	// if err != nil {
	// 	c.String(http.StatusBadRequest, "Bad Request")
	// 	return
	// }
	request := model.LibraryListRequest{}
	limit, _ := strconv.Atoi(c.Query("limit"))
	request.Pagination.Limit = limit
	page, _ := strconv.Atoi(c.Query("page"))
	request.Pagination.Page = page
	request.Pagination.Sort = c.Query("sort")

	// Service実行
	libraryService := service.LibraryService{}
	result, err := libraryService.LibraryList(&request)
	if err != nil {
		c.String(http.StatusInternalServerError, "Server Error")
		return
	}

	// メッセージ返却
	c.JSON(http.StatusOK, result)
}

func (pc LibraryController) RegistWords(c *gin.Context) {

	// JSON BodyのParse
	request := model.RegistWordsRequest{}
	err := c.Bind(&request)
	if err != nil {
		c.String(http.StatusBadRequest, "Bad Request")
		return
	}

	// Service実行
	libraryService := service.LibraryService{}
	result, err := libraryService.RegistWords(&request)
	if err != nil {
		c.String(http.StatusInternalServerError, "Server Error")
		return
	}

	// メッセージ返却
	c.JSON(http.StatusOK, result)
}
