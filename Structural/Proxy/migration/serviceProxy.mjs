import Service1 from "./service1.mjs";
import Service2 from "./service2.mjs";

const flags = {
    SUCCESS: 3,
    FAILED: 4,
    IN_PROGRESS: 2,
    NOT_STARTED: 1
}

async function checkMigrationStatus() {
    // a flag is stored somewhere(maybe in service1 itself) which keeps track of migration status
    let status = flags.NOT_STARTED;
    // as soon as service migrated then it will return true
    return status;
}

export default class ServiceProxy {
    constructor(name) {
        this.service1 = new Service1(name);
        this.service2 = new Service2(name);
    }
    async get() {
        const status = await checkMigrationStatus();
        if (status == flags.SUCCESS) {
            return this.service2.get();
        }
        return this.service1.get();
    }
    async delete() {
        const status = await checkMigrationStatus();
        if (status == flags.SUCCESS) {
            return this.service2.delete();
        } else if (status == flags.IN_PROGRESS) {
            throw new Error("Retry... Migration in progress");
        } else {
            return this.service1.delete();
        }
    }
    async save() {
        const status = await checkMigrationStatus();
        if (status == flags.SUCCESS) {
            return this.service2.save();
        } else if (status == flags.IN_PROGRESS) {
            throw new Error("Retry... Migration in progress");
        } else {
            return this.service1.delete();
        }
    }
}