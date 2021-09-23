package main

import (
	"fmt"
	"os"
	yaml "gopkg.in/yaml.v3"
)

type Car struct {
	Wheels int `yaml:"wheels"`
}

type Truck struct {
	// 埋め込み のフィールドに 'inline' タグをつける
	Car  `yaml:",inline"`
	Tons int `yaml:"tons"`
}

func main() {
	truck := Truck{}
	b, _ := os.ReadFile("tmp.yaml")
	yaml.Unmarshal(b, &truck)
	fmt.Printf("Wheels: %+v\n", truck.Wheels)
	fmt.Printf("Tons: %v\n", truck.Tons)
}