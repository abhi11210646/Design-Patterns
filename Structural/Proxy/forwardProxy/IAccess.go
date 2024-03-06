package main

type IAccess interface {
	access(string) string
}
