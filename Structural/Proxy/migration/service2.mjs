//Database service 2
export default class Service2 {
    constructor(name) {
        this.name = name;
    }
    async get() {
        return 2;

    }
    async delete() {
        return true;
    }
    async save() {
        return true;
    }
}