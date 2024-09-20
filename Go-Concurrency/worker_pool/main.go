package worker_pool

import (
	"fmt"
	"time"
)

// Task - start - Calculate square of a given number
type Square struct {
	n int
}

func (s *Square) Process() {
	// Simulate work
	time.Sleep(time.Second)
	fmt.Printf("Square of %d is %d \n", s.n, s.n*s.n)
}

// End

// Task - start -
type Hello struct {
	msg string
}

func (h *Hello) Process() {
	// Simulate work
	time.Sleep(time.Second)
	fmt.Printf("Greetings: %s\n", h.msg)
}

// End

func Example() {
	// tasks that implements Task interface of worker Pool
	tasks := []Task{
		&Square{n: 1}, &Square{n: 2},
		&Square{n: 3},
		&Hello{msg: "Good Morning!"},
		&Square{n: 4},
		&Square{n: 5}, &Square{n: 6},
	}
	workers := 2
	workerPool := NewWorkerPool(tasks, workers)
	workerPool.Run()
}
