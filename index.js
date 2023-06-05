// Your code here

//Create classes Cat, Dog, and Bird
//Each of these classes will accept the parameters name and sex and will store those values as properties.

//For an instance of Cat, speak returns "name says meow!",
class Cat {
    constructor(name, sex){
        this.name = name;
        this.sex = sex;
    }
    speak () {
        return `${this.name} says meow!`
    }
}

//For an instance of Dog, speak returns "name says woof!"
class Dog {
    constructor(name, sex){
        this.name = name;
        this.sex = sex;
    }
    speak () {
        return `${this.name} says woof!`
    }
}

//For an instance of Bird, speak returns conditional output. If the instance of Bird is male,
//speak returns "It's me! name, the parrot!". If it is not male, speak returns "name says squawk!".
class Bird {
    constructor(name, sex){
        this.name = name;
        this.sex = sex;
    }
    speak () {
        return this.sex === "male" ? `It's me! ${this.name}, the parrot!` : `${this.name} says squawk!`;
    }
}

//bostic = new Bird("bostic", "male"); console.log(bostic.speak());
