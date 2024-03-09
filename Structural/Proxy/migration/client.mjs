import ServiceProxy from "./serviceProxy.mjs"

(async function () {

    const serviceProxy = new ServiceProxy("db service");

    console.log(await serviceProxy.get());

    console.log(await serviceProxy.get());

    console.log(await serviceProxy.get());

    console.log(await serviceProxy.get());

})()

// (depends on application data)
// In this usecase, we are checking status of individual account's migration status

// (depends on application data)
// Another use case with migration could be "Double writes"
// So you write to both of services and read from service1 by proxy and side by side you migrate old data.