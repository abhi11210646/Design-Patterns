package main

import "fmt"

type JSONAdaptor struct {
	xml *XML
}

func (json *JSONAdaptor) JSONdata() {
	json.xml.XMLdata()
	fmt.Println("Converting xml to json")
	fmt.Println("Return JSON data")
}
