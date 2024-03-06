package main

import "fmt"

var internet IAccess

func main() {
	internet = NewForwardProxy()

	result := internet.access("google.com")
	fmt.Println(result) // Accessed

	result2 := internet.access("abc.com")
	fmt.Println(result2) // Denied
}
