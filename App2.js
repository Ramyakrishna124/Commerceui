class Person{

    constructor(name,age,gender){
       this.name = name
       this.age  = age
       this.gender = gender
}

play(){
    console.log("playing")
}

run(){
    console.log("running")
}
}



let person1 = new Person('vb',23,'Female')
console.log(person1)