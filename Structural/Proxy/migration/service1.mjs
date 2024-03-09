//Database service 1
export default class Service1 {
    constructor(name) {
        this.name = name;
    }
    async get(options) {
        return 1;

    }
    async delete(options) {
        return true;
    }
    async save(options) {
        return true;
    }
}