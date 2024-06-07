package main

type Map struct {
	strategy RouteStrategy
}

func (m *Map) buildRoute(s, e string) {
	m.strategy.buildRoute(s, e)
}

func (m *Map) setStrategy(s RouteStrategy) {
	m.strategy = s
}
