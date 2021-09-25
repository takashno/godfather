package controller

import (
	"github.com/gin-gonic/gin"
	"net/http"
	"github.com/takashno/godfather/tree/main/modules/back/service"
)

type NamingController struct{}

func (pc NamingController) Naming(c *gin.Context) {

	// QueryParameterの取得
	target := c.Query("target")
	lowerCamelCase := c.Query("lowerCamelCase")
	lowerSnakelCase := c.Query("lowerSnakelCase")
	upperCamelCase := c.Query("upperCamelCase")
	upperSnakeCase := c.Query("upperSnakeCase")

	// Service実行
	namingService := service.NamingService{}
	result := namingService.ResolveWord(target,lowerCamelCase,lowerSnakelCase,upperCamelCase,upperSnakeCase)

	// メッセージ返却
	c.JSON(http.StatusOK, result)
}