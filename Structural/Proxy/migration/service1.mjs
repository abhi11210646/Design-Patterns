//Database service 1
export default class Service1 {
    constructor(name) {
        this.name = name;
    }
    async get() {
        return 1;

    }
    async delete() {
        return true;
    }
    async save() {
        return true;
    }
}