package router

import (
	"fmt"
	"github.com/gin-gonic/gin"
	// "net/http"
	"github.com/takashno/godfather/tree/main/modules/back/controller"
)

// 生成時処理
func Init() {
	r := inintRoute()
	r.Run(":3000")
}

// ルーティング初期化処理
func inintRoute() *gin.Engine {
	
	fmt.Println("init route start.")

	// コントローラーの取得
	naming := new(controller.NamingController)
	library := new(controller.LibraryController)

	
	router := gin.Default()
	router.POST("/naming", naming.Naming)
	router.GET("/library", library.ListLibrary)
	return router
}