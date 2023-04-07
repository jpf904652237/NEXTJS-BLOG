// 父类
class People {
  constructor(name) {
    this.name = name;
  }
  eat() {
    console.log(`${this.name} eat something`);
  }
}

// 子类继承父类
class Student extends People {
  constructor(name, number) {
    super(name);
    this.number = number;
  }
  sayHi() {
    console.log(`Hi, I'm ${this.name}, my number is ${this.number}`);
  }
}

// 老师子类
class Teacher extends People {
  constructor(name, major) {
    super(name);
    this.major = major;
  }
  teach() {
    console.log(`${this.name} teach ${this.major}`);
  }
}

const xialuo = new Student('夏洛', 100);
// console.log('xialuo.name===>', xialuo.name);
// console.log('xialuo.number===>', xialuo.number);
// xialuo.sayHi();
// xialuo.eat();

// 通过类申明对象/实例
const wanglaoshi = new Teacher('王老师', '语文');
// console.log('wanglaoshi.name===>', wanglaoshi.name);
// console.log('wanglaoshi.major===>', wanglaoshi.major);
// wanglaoshi.teach();
// wanglaoshi.eat();

// console.log(xialuo instanceof Student);
// console.log(xialuo instanceof People);
// console.log(xialuo instanceof Object);
// [] instanceof Array;
// [] instanceof Object;

// console.log('typeof Student===>', typeof Student); // function
// console.log('xialuo.__proto__ === Student.prototype===>', xialuo.__proto__ === Student.prototype);; // true
// console.log('xialuo.__proto__===>', xialuo.__proto__);