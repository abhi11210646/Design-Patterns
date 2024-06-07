package main

import "fmt"

type XML struct{}

func (xml *XML) XMLdata() {
	fmt.Println("Fetching XML data")
}
