function Dog (name) {
  this.name = name;
}

Dog.prototype.say = function() {
  console.log(`${this.name} 멍멍`)
}

let dog = new Dog('진돗개')
dog.say();

class Cat {
  constructor (name) {
    this.name = name
  }
  say () {
    console.log(`${this.name} 냐옹`)
  }
}
const cat = new Cat('애용');
cat.say();