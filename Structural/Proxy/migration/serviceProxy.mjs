import Service1 from "./service1.mjs";
import Service2 from "./service2.mjs";

async function checkMigrationStatus() {
    // a flag is stored somewhere(maybe in service1 itself) which keeps track of migration status
    let status = false;
    // as soon as service migrated then it will return true
    return status;
}

export default class ServiceProxy {
    constructor(name) {
        this.service1 = new Service1(name);
        this.service2 = new Service2(name);
    }
    async get() {
        if (await checkMigrationStatus()) {
            return this.service2.get();
        }
        return this.service1.get();
    }
    async delete() {
        if (await checkMigrationStatus()) {
            return this.service2.delete();
        }
        return this.service1.delete();
    }
    async save() {
        if (await checkMigrationStatus()) {
            return this.service2.save();
        }
        return this.service1.save();
    }
}