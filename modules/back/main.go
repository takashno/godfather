package main

import (
	"github.com/takashno/godfather/tree/main/modules/back/router"
	"github.com/takashno/godfather/tree/main/modules/back/library"
)

func main() {
	library.Init()
	router.Init()
}