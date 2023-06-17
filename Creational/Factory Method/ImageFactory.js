const Png = require("./Png");
const Jpeg = require("./Jpeg");

class ImageFactory {
    createImage(type, name) {
        if (type == 'png') {
            return new Png(name);
        } else if (type == 'jpeg') {
            return new Jpeg(name);
        } else {
            throw new Error(`Image type ${type} not supported`);
        }
    }
}

module.exports = ImageFactory;