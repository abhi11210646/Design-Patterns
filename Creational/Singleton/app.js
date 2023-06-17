const singleton = (function () {
    let instance = null;
    // 2nd version
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
                instance.constructor = null;
            }
            return instance;
        }
    }
})();

console.log(singleton.getInstance() === singleton.getInstance()); //true


// JavaScript has native support
const singletonDefault = require("./default");
const singletonDefault2 = require("./default");

console.log(singletonDefault === singletonDefault2);  //true
