const singleton = (function () {
    let instance = null;
    class DB {
        constructor() { console.log("DB constructor called") }
    }
    return {
        // getInstance: function () {
        //     if (!instance) instance = new Object("object of DB");
        //     return instance;
        // },
        // 2nd version
        getInstance: function () {
            if (!instance) {
                instance = new DB();
            }
            return instance;
        }
    }
})();

console.log(singleton.getInstance() === singleton.getInstance()); //true



// Default behavior of ES2015
const singletonDefault = require("./default");
const singletonDefault2 = require("./default");

console.log(singletonDefault === singletonDefault2);  //true
