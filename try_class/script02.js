// ES5
function Human (name) {
  this.name = name;
}
Human.prototype = {
  callName: function() {
    console.log(this.name);
  }
}

function Hayashi(name, age) {
  Human.call(this, name);
  this.age = age;
}

Hayashi.prototype = Object.create(Human.prototype);
Hayashi.prototype.constructor = Human;
Hayashi.prototype.callAge = function() {
  console.log(this.age);
}

var human = new Hayashi('Yuichi', 30);
human.callName();
human.callAge();