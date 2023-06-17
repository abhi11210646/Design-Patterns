const Circle = require("./Circle");
function main() {
    const circle = new Circle(123, 234);
    console.log(circle.clone2());

    // JavaScript has native support
    console.log(Object.create(circle));
}
main();