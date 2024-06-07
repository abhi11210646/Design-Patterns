package main

func main() {
	var drivingRoute RouteStrategy = DrivingRoute{}
	m := &Map{strategy: drivingRoute}
	m.buildRoute("Point A", "Point B")

	var walkingRoute RouteStrategy = WalkingRoute{}
	m.setStrategy(walkingRoute)
	m.buildRoute("Point C", "Point D")
}
