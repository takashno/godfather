package main

import (
    "encoding/json"
    "fmt"
    "log"
    "net/http"
	"os"
	yaml "gopkg.in/yaml.v3"
	"reflect"
)

type Naming struct {
    Target   string `json:"target"`
    Results  []Result `json:"results"`
}

type Result struct {
	Target string `json:target`
	LowerCamelCase string `json:lowerCamelCase`
	LowerSnakeCase string `json:lowerSnakeCase`
	UpperCamelCase string `json:upperCamelCase`
	UpperSnakeCase string `json:upperSnakeCase`
}

type Convert struct {
	Locale string `yaml:"locale"`
	Converted  string `yaml:"converted"`

}

type Word struct {
	Word string `yaml:"word"`
	Converteds []Convert `yaml:"converteds"`
}

type Library struct {
	Words []Word `yaml:"words"`
}


func homePage(w http.ResponseWriter, r *http.Request) {
    fmt.Fprintf(w, "This is Godfather backend api.")
}

func handleRequests() {
    http.HandleFunc("/", homePage)
    http.HandleFunc("/naming", returnNaming)
    log.Fatal(http.ListenAndServe(":8081", nil))
}

func Range(input string){
	for _, c := range input {
		fmt.Printf("%c ", c)
		fmt.Println(reflect.TypeOf(c))
	}
	fmt.Println("")
}

func returnNaming(w http.ResponseWriter, r *http.Request) {
	target := r.FormValue("target")
    naming := Naming{Target: target}
    for i := 0; i < 10; i++ {
        naming.Results = append(
            naming.Results,
            Result{Target: "a", 
			LowerCamelCase: "lowerCamelCase", 
			LowerSnakeCase: "lower_snake_case", 
			UpperCamelCase : "UpperCamelCase", 
			UpperSnakeCase : "UPPER_SNAKE_CASE"})
    }
    fmt.Println("Endpoint Hit: returnAllArticles")
    json.NewEncoder(w).Encode(naming)
}

func initLibrary() *map[string]string {
	library := Library{}
	b, _ := os.ReadFile("library.yaml")
	yaml.Unmarshal(b, &library)
	m := map[string]string{}
	for _, v := range library.Words {
		m[v.Word] =  v.Converteds[0].Converted
	}
	fmt.Println("read library.yaml result.")
	fmt.Println("-----------------------------")
	for k, v := range m {
		fmt.Println("Key:" + k + ", Value:" + v)
	}
	fmt.Println(m["あい"])
	fmt.Println("-----------------------------")
	return &m
}

func main() {
	var m *map[string]string
    m = initLibrary()
	fmt.Println(m)
	for k, v := range *m {
		fmt.Println("Key:" + k + ", Value:" + v)
	}
	// ここでMAPの値が取り出せない… *m["あい"]とかで行けると思っているんだが…
    handleRequests()
}
