package main

type RouteStrategy interface {
	buildRoute(start, end string)
}
