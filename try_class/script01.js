// ES2015
class Human {
  constructor(name) {
    this.name = name;
  }
  callName() {
    console.log(this.name);
  }
}
class Hayashi extends Human {
  constructor(name, age) {
    super(name);
    this.age = age;
  }
  callName() {
    super.callName(this.name);
  }
  callAge() {
    console.log(this.age);
  }
}

let hys = new Hayashi('Yuichi', 30);
hys.callName();
hys.callAge();