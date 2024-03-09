
// Legacy service used by many application in organization
function Service() {
    // constructor
    this.name = "ABCDDD";
}

Service.prototype.getName = function (cb) {
    return cb(null, this.name);
}

Service.prototype.setName = function (name, cb) {
    this.name = name;
    if (name == "") {
        return cb(new Error("name can't be empty"));
    }
    return cb(null)
}

module.exports = Service;