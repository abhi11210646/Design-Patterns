package main

import "fmt"

type WalkingRoute struct{}

func (w WalkingRoute) buildRoute(s, e string) {
	fmt.Println("Building walking route from " + s + " to " + e)
}
