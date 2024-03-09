const Singleton = (function () {
    let instance = null;
    class DB {
        constructor() { console.log("[app.js]DB constructor called") }
    }
    return {
        getInstance: function () {
            if (!instance) {
                instance = new DB();
            }
            return instance;
        }
    }
})();

console.log(Singleton.getInstance() === Singleton.getInstance()); //true

// In javascript, we can not make constructor private, 
// so no way to stop instant creation from outside thats why we need a IIFE.


