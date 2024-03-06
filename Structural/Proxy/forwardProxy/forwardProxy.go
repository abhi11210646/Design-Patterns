package main

type ForwardProxy struct {
	internet IAccess
}

func NewForwardProxy() *ForwardProxy {
	return &ForwardProxy{
		internet: &RealInternet{},
	}
}

var blokedSites = map[string]bool{
	"abc.com": true,
}

func (i *ForwardProxy) access(url string) string {
	if blokedSites[url] {
		return "Access Denied"
	}
	return i.internet.access(url)
}
