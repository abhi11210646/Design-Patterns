package worker_pool

import "sync"

type Task interface {
	Process()
}

type workerPool struct {
	tasks    []Task
	taskChan chan Task
	workers  int
	wg       sync.WaitGroup
}

func NewWorkerPool(tasks []Task, c int) *workerPool {
	return &workerPool{tasks: tasks, workers: c}
}

// Actual worker that will execute the tasks
func (w *workerPool) worker() {
	for task := range w.taskChan {
		task.Process()
		w.wg.Done()
	}
}

// Start:
func (w *workerPool) Run() {
	w.taskChan = make(chan Task, len(w.tasks))

	// Start workers
	for range w.workers {
		go w.worker()
	}

	// Add all the task to wait for
	w.wg.Add(len(w.tasks))
	// Send task to channel to be picked by worker if free
	for _, task := range w.tasks {
		w.taskChan <- task
	}
	// Close channel
	close(w.taskChan)
	// Wait for all task to finish
	w.wg.Wait()
}
