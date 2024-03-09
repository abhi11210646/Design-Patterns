module.exports = class ServiceAdaptor {
    constructor(service) {
        this.service = service;
    }
    async getName() {
        return new Promise((resolve, reject) => {
            this.service.getName(function (err, name) {
                if (err) return reject(err);
                return resolve(name);
            });
        })
    }
    async setName(name) {
        return new Promise((resolve, reject) => {
            this.service.setName(name, function (err, response) {
                if (err) return reject(err);
                return resolve(response);
            });
        })
    }
}