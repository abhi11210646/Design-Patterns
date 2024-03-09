import ServiceProxy from "./serviceProxy.mjs"

(async function () {

    const serviceProxy = new ServiceProxy("db service");

    console.log(await serviceProxy.get());

    console.log(await serviceProxy.get());

    console.log(await serviceProxy.get());

    console.log(await serviceProxy.get());

})()

// Another use case with migration could "Double writes"(depends on application data)
// So you write to both of services  adn read from service1 by proxy and side by side you migrate old data.