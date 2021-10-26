// see : https://code-macchiato.com/post/go-lang-with-design-pattern-singleton
package library

import (
	"log"
	"os"
	"sort"

	"go.uber.org/zap"
	yaml "gopkg.in/yaml.v3"

	"github.com/takashno/godfather/tree/main/modules/back/model"
)

// 外部アクセスを行うインタフェース
type Library interface {
	ResolveWord(key string) (string, bool)
	RegistWord(key string, value string)
	ResolveReservedWord(key string) (string, bool)
	RegistReservedWord(key string, value string)
	WordKeys() []string
}

// 値保持のための構造体
type library struct {
	words         map[string]string
	reservedWords map[string]string
}

// libraryのインスタンスを生成
func newLibrary() *library {
	lib := new(library)
	lib.words = make(map[string]string)
	lib.reservedWords = make(map[string]string)
	return lib
}

// シングルトンインスタンス
var instance *library

// シングルトンインスタンスを取得
func GetLibrary() Library {
	if instance == nil {
		instance = newLibrary()
	}
	return instance
}

// 登録ワードアクセスメソッド定義
func (c *library) ResolveWord(key string) (string, bool) {
	v, ok := c.words[key]
	return v, ok
}
func (c *library) RegistWord(key string, value string) {
	c.words[key] = value
}

// 予約語アクセスメソッド定義
func (c *library) ResolveReservedWord(key string) (string, bool) {
	v, ok := c.reservedWords[key]
	return v, ok
}
func (c *library) RegistReservedWord(key string, value string) {
	c.reservedWords[key] = value
}

func (c *library) WordKeys() []string {
	ks := []string{}
	for k, _ := range c.words {

		ks = append(ks, k)
	}
	// Keyでソートして返却する.
	sort.SliceStable(ks, func(i, j int) bool { return ks[i] < ks[j] })
	return ks
}

/* ------------------------------------------------ */

// ライブラリ初期化処理
func Init() {

	logger, err := zap.NewProduction()
	if err != nil {
		log.Fatal(err.Error())
	}

	logger.Info("start library initialize.")

	// YAMLを読み込むための構造体を生成
	libraryFile := model.YamlLibraryFile{}

	// ファイル読み込み（TODO：環境変数対応）
	b, _ := os.ReadFile("./library.yaml")
	yaml.Unmarshal(b, &libraryFile)

	// 保持するためのライブラリを生成
	library := GetLibrary()

	// ライブラリへ読み込んだ情報を登録
	for _, v := range libraryFile.Words {
		library.RegistWord(v.Word, v.Converteds[0].Converted)
		logger.Info("word : " + v.Word + " converted : " + v.Converteds[0].Converted)
	}
	logger.Info("end library initialize.")
}
