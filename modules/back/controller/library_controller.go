package controller

import (
	"github.com/gin-gonic/gin"
	"net/http"
	"github.com/takashno/godfather/tree/main/modules/back/model"
	"github.com/takashno/godfather/tree/main/modules/back/service"
)

type LibraryController struct{}

func (pc NamingController) ListLibrary(c *gin.Context) {

	// JSON BodyのParse
	request := model.NamingRequest{}
	err := c.Bind(&request)
	if err != nil {
		c.String(http.StatusBadRequest, "Bad Request")
		return
	}

	// Service実行
	namingService := service.NamingService{}
	result, err := namingService.ResolveWord(&request)
    if err != nil{
        c.String(http.StatusInternalServerError, "Server Error")
        return
    }

	// メッセージ返却
	c.JSON(http.StatusOK, result)
}