/*class rectangle{
    constructor(width, height, colour){
        this.width = width;
        this.height = height;
        this.colour = colour;
    }
    calcArea(){
        var area = 0;
        area = (this.width)*(this.height);
        return area
    }
}

let rect = new rectangle(4,5,'red');
console.log(rect.width);
console.log(rect.height);
console.log(rect.colour);
console.log(rect.calcArea());
*/
/*
class Person{
    constructor(firstName, lastName, age, email){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.email= email;
    }
    toString(){
        return (this.firstName+" "+this.lastName+ " "+"(email:"+this.email+", age:"+this.age+")")
        
    }
}
let person = new Person('Maria', 'Petterson', 22, 'mp@gmail.com');
console.log(person.toString());

class Person{
    constructor(firstName, lastName, age, email){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.email= email;
    }
    toString(){
        return (this.firstName+" "+this.lastName+ " "+"(email:"+this.email+", age:"+this.age+")")
        
    }
}
let person1 = new Person('Maria', 'Petterson', 22, 'mp@gmail.com');
let person2 = new Person('Lexicon');
let person3 = new Person('Stefan', 'Larsson', 25);
let person4 = new Person('Peter', 'Jansson', 24, 'ptr@live.com');
console.log(person1.toString());
console.log(person2.toString());
console.log(person3.toString());
console.log(person4.toString());

class Circle{
    constructor(radius){
        this.radius = radius
    }
    get diameter(){
        return (this.radius * 2);
    }
    set diameter(_value){
        this.radius = (_value/2);
    }
    area(){
        let a = (3.14 * this.radius * this.radius);
        return a;
    }
    
}


let c = new Circle(2);
console.log(`Radius: ${c.radius}`);
console.log(`Diameter: ${c.diameter}`);
console.log("Area: "+c.area());
c.diameter = 1.6;
console.log(`Radius: ${c.radius}`);
console.log(`Diameter: ${c.diameter}`);
console.log("Area: "+c.area());
*/

class Point{
    constructor(x, y){
        this.x = x;
        this.y = y;
    }
    static distance(p1,p2){
       const dx = p1.x-p2.x;
       const dy = p1.y-p2.y;
        return(Math.sqrt((dx*dx)+(dy*dy)))
    }
}
let p1 = new Point(5, 5);
let p2 = new Point(9, 8);
console.log(Point.distance(p1,p2)); 