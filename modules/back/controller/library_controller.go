package controller

import (
	"io"
	"log"
	"net/http"
	"os"
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

// ライブラリ定義のYAMLをダウンロード
func (pc LibraryController) DownloadLibrary(c *gin.Context) {

	request := model.DownloadLibraryRequest{}

	libraryService := service.LibraryService{}
	response, err := libraryService.DownloadLibrary(&request)
	if err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": err})
		return
	}
	m := http.DetectContentType(response.Contents[:512])
	c.Header("Content-Disposition", "attachment; filename=library.yaml")
	c.Data(http.StatusOK, m, response.Contents)
}

func (pc LibraryController) UploadLibrary(c *gin.Context) {
	file, header, err := c.Request.FormFile("library")
	if err != nil {
		c.String(http.StatusBadRequest, "Bad request")
		return
	}
	fileName := header.Filename
	dir, _ := os.Getwd()
	filePath := dir + "\\library\\" + fileName
	out, err := os.Create(filePath)
	if err != nil {
		log.Fatal(err)
	}
	defer out.Close()
	_, err = io.Copy(out, file)
	if err != nil {
		log.Fatal(err)
	}

	libraryService := service.LibraryService{}
	libraryService.UploadLibrary(filePath)

	c.JSON(http.StatusOK, gin.H{
		"status": "ok",
	})
}
