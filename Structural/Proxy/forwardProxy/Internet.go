package main

type RealInternet struct {
}

func (i *RealInternet) access(url string) string {
	return "Site: " + url
}
