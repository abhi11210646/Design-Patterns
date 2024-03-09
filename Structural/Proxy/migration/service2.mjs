//Database service 2
export default class Service2 {
    constructor(name) {
        this.name = name;
    }
    async get(options) {
        return 2;

    }
    async delete(options) {
        return true;
    }
    async save(options) {
        return true;
    }
}