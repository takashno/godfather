package controller

import (
	"github.com/gin-gonic/gin"
	"net/http"
)

type LibraryController struct{}

func (pc LibraryController) List(c *gin.Context) {
	c.JSON(http.StatusOK, gin.H{
		"message": "hello world",
	})
}