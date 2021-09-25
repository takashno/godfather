package main

import (
	"github.com/takashno/godfather/tree/main/modules/back/router"
	"github.com/takashno/godfather/tree/main/modules/back/library"
)

// メイン
func main() {
	// ライブラリの初期化
	library.Init()
	// HTTPルーティングの初期化
	router.Init()
}