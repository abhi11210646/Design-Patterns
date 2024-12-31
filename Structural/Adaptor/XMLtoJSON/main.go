package main

func main() {
	xml := &XML{}                   // object from xml
	jsonAdapter := &JSONAdaptor{ // create adapter which takes xml object
		xml,
	}
	jsonAdapter.JSONdata() // call adaptor method which in turn call xml method
}
