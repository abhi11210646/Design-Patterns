const ImageFactory = require("./ImageFactory");

function main() {
    const imageFactory = new ImageFactory();
    console.log(imageFactory.createImage('png','cat'));
}

main();