class File {
    constructor(name) {
        this.name = name;
        this.size = Math.round(Math.random() * 999);
    }
    stats(level = 0) {
        const indent = ' '.repeat(level * 2);
        console.log(`${indent}File: ${this.name}, Size: ${this.size} bytes`);
        return this.size;
    }
}

export default File;