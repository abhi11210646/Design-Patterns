package main

import "fmt"

type DrivingRoute struct{}

func (d DrivingRoute) buildRoute(s, e string) {
	fmt.Println("Building driving route from " + s + " to " + e)
}
