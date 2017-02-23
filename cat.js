class Cat{
  constructor(name,owner){
    this.name = name;
    this.owner = owner;
  }

  cuteStatement(){
    return `${this.owner} loves ${this.name}`
  }
  meow(){
    return "meow"
  }
}

function newStatement(){
  return `Everyone loves ${this.name}`
}

Cat.prototype.cuteStatement = newStatement

const cat1 = new Cat("n","o");
const cat2 = new Cat("n2","o2");
// console.log(cat1.cuteStatement())
cat1.meow = function() {return "bark"}
console.log(cat1.meow())
console.log(cat2.meow())
