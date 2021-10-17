package router

import (
	"fmt"
	"time"

	"github.com/gin-contrib/cors"
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

	// ここからCorsの設定
	router.Use(cors.New(cors.Config{
		// アクセスを許可したいアクセス元
		AllowOrigins: []string{
			"http://localhost:3001",
			"http://localhost:3002",
		},
		// アクセスを許可したいHTTPメソッド(以下の例だとPUTやDELETEはアクセスできません)
		AllowMethods: []string{
			"POST",
			"GET",
			"OPTIONS",
		},
		// 許可したいHTTPリクエストヘッダ
		AllowHeaders: []string{
			"Access-Control-Allow-Credentials",
			"Access-Control-Allow-Headers",
			"Content-Type",
			"Content-Length",
			"Accept-Encoding",
			"Authorization",
		},
		// cookieなどの情報を必要とするかどうか
		AllowCredentials: false,
		// preflightリクエストの結果をキャッシュする時間
		MaxAge: 24 * time.Hour,
	}))

	router.POST("/naming", naming.Naming)
	libraryGroup := router.Group("/library")
	{
		libraryGroup.GET("/list", library.ListLibrary)
		libraryGroup.POST("/regist/words", library.RegistWords)
	}
	return router
}
