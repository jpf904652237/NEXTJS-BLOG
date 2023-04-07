// 类
class Student {
    constructor(name, number) {
      this.name = name;
      this.number = number;
    }
    sayHi() {
      console.log(`Hi, I'm ${this.name}, my number is ${this.number}`);
    }
}

// 通过类申明对象/实例
const xialuo = new Student('夏洛', 100);
console.log('xialuo.name===>', xialuo.name);
console.log('xialuo.number===>', xialuo.number);
xialuo.sayHi();