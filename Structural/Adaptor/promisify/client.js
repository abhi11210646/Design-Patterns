const Service = require("./service");
const ServiceAdaptor = require("./serviceAdaptor");

(async function () {

    const adaptor = new ServiceAdaptor(new Service());

    console.log(await adaptor.getName());

    await adaptor.setName("set name by adapter");

    console.log(await adaptor.getName());

})()