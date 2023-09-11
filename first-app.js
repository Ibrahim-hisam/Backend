//Arrow function returning the product of two variables
const prodouct = (a, b) => a * b;
console.log(prodouct(2,4));

// Student Object
const student = {
    name: 'Ibrahim',
    age: 23,
    greet(){
    console.log('Hi, My name is ' + this.name + ", my age is " + this.age);
    }
};  

student.greet();