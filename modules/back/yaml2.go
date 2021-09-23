package main

import (
	"fmt"
	"os"
	yaml "gopkg.in/yaml.v3"
)

type Convert struct {
	Locale string `yaml:"locale"`
	Converted  string `yaml:"converted"`

}

type Word struct {
	Word string `yaml:"word"`
	Converteds []Convert `yaml:"converteds"`
}

type Library struct {
	// 埋め込み のフィールドに 'inline' タグをつける
	Words []Word `yaml:"words"`
}

func main() {
	library := Library{}
	b, _ := os.ReadFile("library.yaml")
	yaml.Unmarshal(b, &library)
	for i, v := range library.Words {
		fmt.Println(i, v.Word, len(v.Converteds))
	}
	m := map[string]string{}
	for _, v := range library.Words {
		m[v.Word] =  v.Converteds[0].Converted
	}
	fmt.Println(m["あいうえお"])  

	for k, v := range m {
		fmt.Println("Key:" + k + ", Value:" + v)
	}
}