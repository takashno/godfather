package main

import (
    "encoding/json"
    "fmt"
    "log"
    "net/http"
)

type Naming struct {
    Target   string `json:"Target"`
    Results  []Result `json:"Results"`
}

type Result struct {
	Target string `json:Target`
	LowerCamelCase string `json:LowerCamelCase`
	LowerSnakeCase string `json:LowerSnakeCase`
	UpperCamelCase string `json:UpperCamelCase`
	UpperSnakeCase string `json:UpperSnakeCase`
}

func homePage(w http.ResponseWriter, r *http.Request) {
    fmt.Fprintf(w, "This is Godfather backend api.")
}

func handleRequests() {
    http.HandleFunc("/", homePage)
    http.HandleFunc("/naming", returnNaming)
    log.Fatal(http.ListenAndServe(":8081", nil))
}
func returnNaming(w http.ResponseWriter, r *http.Request) {
    naming := Naming{Target: "target words"}
    for i := 0; i < 10; i++ {
        naming.Results = append(
            naming.Results,
            Result{Target: "a", LowerCamelCase: "lowerCamelCase", LowerSnakeCase: "lower_snake_case", UpperCamelCase : "UpperCamelCase", UpperSnakeCase : "UPPER_SNAKE_CASE"})
    }
    fmt.Println("Endpoint Hit: returnAllArticles")
    json.NewEncoder(w).Encode(naming)
}

func main() {
    handleRequests()
}
