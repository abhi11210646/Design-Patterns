import Service1 from "./service1.mjs";
import Service2 from "./service2.mjs";

const flags = {
    SUCCESS: 3,
    FAILED: 4,
    IN_PROGRESS: 2,
    NOT_STARTED: 1
}

async function checkMigrationStatus(uid) {
    // a flag is stored somewhere(maybe in service1 itself) which keeps track of migration status
    let status = flags.NOT_STARTED; // based on {uid}
    // as soon as service migrated then it will return true
    return status;
}

export default class ServiceProxy {
    constructor(name) {
        this.service1 = new Service1(name);
        this.service2 = new Service2(name);
    }
    async get(options) {
        const { uid }  = options;
        const status = await checkMigrationStatus(uid);
        if (status == flags.SUCCESS) {
            return this.service2.get(options);
        }
        return this.service1.get(options);
    }
    async delete(options) {
        const { uid }  = options;
        const status = await checkMigrationStatus();
        if (status == flags.SUCCESS) {
            return this.service2.delete(options);
        } else if (status == flags.IN_PROGRESS) {
            throw new Error("Retry... Migration in progress");
        } else {
            return this.service1.delete(options);
        }
    }
    async save(options) {
        const { uid }  = options;
        const status = await checkMigrationStatus(uid);
        if (status == flags.SUCCESS) {
            return this.service2.save(options);
        } else if (status == flags.IN_PROGRESS) {
            throw new Error("Retry... Migration in progress");
        } else {
            return this.service1.save(options);
        }
    }
}