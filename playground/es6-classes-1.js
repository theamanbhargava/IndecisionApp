/**
 * Created by root on 10/8/17.
 */

class Person {
    constructor(name = 'Anonymous', age = '0'){
        this.name = name;
        this.age = age;
    }
    getGreeting(){
        return `Hi! I am ${this.name}`;
    };

    getDescription(){
        return `${this.name} is ${this.age} years old. `;
    }
}

class Student extends Person {
    constructor(name, age, major='Undecided'){
        super(name, age);
        this.major = major;
    }
    hasMajor(){
        return !!this.major;
    }
    getDescription(){
        let description = super.getDescription();
        if(this.hasMajor()){
            description += `Major is ${this.major}`;
        }
        return description;
    }
}

class Traveler extends Person {
    constructor(name, age, homeAddress){
        super(name, age);
        this.homeAddress = homeAddress;
    }
    hasHomeAddress(){
        return !!this.homeAddress;
    }
    getDescription(){
        let description = super.getDescription();
        if(this.hasHomeAddress()){
            description += `I am visiting from ${this.homeAddress}`;
        }
        return description;
    }
}

const me = new Student("Aman", 18, 'CSE');

console.log(me.getGreeting());
console.log(me.getDescription());
console.log(me.hasMajor());

const notMe = new Traveler("Aman Bhargava", 18, "Jaipur");

console.log(notMe.getGreeting());
console.log(notMe.getDescription());