
export class Singleton {
   name = "Singleton class"
   // should not be accessible from outside
   private static instance: Singleton | null = null;
   private constructor() { }
   // static 
   static getInstance(): Singleton {
      if (!Singleton.instance) Singleton.instance = new Singleton();
      return Singleton.instance;
   }
   getName() {
      return this.name;
   }
}

console.log(Singleton.getInstance() == Singleton.getInstance());

console.log(Singleton.getInstance().getName());
