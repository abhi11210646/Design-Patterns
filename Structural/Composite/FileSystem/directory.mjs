class Directory {
  constructor(name) {
      this.name = name;
      this.children = [];
  }

  add(file) {
      this.children.push(file);
  }

  getChildren() {
      return this.children;
  }

  stats(level = 0) {
      let totalSize = 0;
      const indent = ' '.repeat(level * 2);
      console.log(`${indent}`);
      console.log(`${indent}Directory: ${this.name}`);
      this.children.forEach((child) => {
          totalSize += child.stats(level + 1);
      });
      console.log(`${indent}${this.name} folder has a total size of ${totalSize} bytes`);
      console.log(`${indent}`);
      return totalSize;
  }
}

export default Directory;