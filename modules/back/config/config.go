// see : https://code-macchiato.com/post/go-lang-with-design-pattern-singleton
package config

// 外部アクセスを行うインタフェース
type Config interface {
	GetString(key string)(string, bool)
	PutString(key string, value string)
	GetInt(key string)(int, bool)
	PutInt(key string, value int)
	GetBool(key string)(bool,bool)
	PutBool(key string, value bool)
}

// 値保持のための構造体
type config struct {
	stringValue map[string]string
	intValue map[string]int
	boolValue map[string]bool
}

// configのインスタンスを生成
func newConfig() *config {
	conf := new(config)
	conf.stringValue = make(map[string]string)
	conf.intValue = make(map[string]int)
	conf.boolValue = make(map[string]bool)
	return conf
}

// シングルトンインスタンス
var instance *config

// シングルトンインスタンスを取得
func GetConfig() Config {
	if instance == nil {
		instance = newConfig()
	}
	return instance
}

// string系アクセスメソッド定義
func (c *config) GetString(key string) (string, bool) {
	v, ok := c.stringValue[key]
	return v, ok
}
func (c *config) PutString(key string, value string) {
	c.stringValue[key] = value
}

// int系アクセスメソッド定義
func (c *config) GetInt(key string) (int, bool) {
	v, ok := c.intValue[key]
	return v, ok
}
func (c *config) PutInt(key string, value int) {
	c.intValue[key] = value
}

// bool系アクセスメソッド定義
func (c *config) GetBool(key string) (bool, bool) {
	v, ok := c.boolValue[key]
	return v, ok
}
func (c *config) PutBool(key string, value bool) {
	c.boolValue[key] = value
}