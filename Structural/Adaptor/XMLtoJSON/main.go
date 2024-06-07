package main

func main() {
	xml := &XML{}                          // object from xml
	var jsonAdapter JSONer = &JSONAdaptor{ // create adapter which takes xml object
		xml,
	}
	jsonAdapter.JSONdata() // call adaptor method which in turn call xml method
}
