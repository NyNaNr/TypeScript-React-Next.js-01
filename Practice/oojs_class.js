class Person {
    name;

    constructor(name) {
        this.name = name
    
    }

    introduceSelf() {
        console.log(`Hi! I'm ${this.name}`)
    }
}
 
const tom = new Person('Tom');
tom.introduceSelf()


// 継承
class Professor extends Person{
    teaches;

    constructor(name, teaches) {
        super(name);
        this.teaches = teaches;
    }

    introduceSelf() {
        console.log(
            `My name is ${this.name}, and I will be your ${this.teaches} professor.`
        )
    }

    grade(paper) {
        const grade = Math.floor(Math.random() * (5 - 1) + 1);
        console.log(grade)
    }

}

const yu = new Professor('Yu', 'Education');
yu.grade()

// カプセル化
class Student extends Person{
    #year;

    constructor(name, year) {
        super(name);
        this.#year = year;
    
    }

    introduceSelf() {
        console.log(
            `Hi! I'm ${this.name}, and I 'm in year ${this.#year}.`
        );
    }

    canStudentArchery() {
        return this.#year > 1;
    }
}

const ayumi = new Student('Ayumi',2);
ayumi.introduceSelf()
console.log(ayumi.canStudentArchery())


// https://developer.mozilla.org/ja/docs/Learn/JavaScript/Objects/Test_your_skills:_Object-oriented_JavaScript
// OOJS テスト


class Shape {

  name;
  sides;
    sideLength;
    
    constructor(name, sides, sideLength) {
        this.name = name;
        this.sides = sides;
        this.sideLength = sideLength;
    }

    calcPerimeter() {
        const result = this.sides * this.sideLength
        console.log(`${this.name} of Perimeter: ${result}`)
    }

}
    
const square = new Shape('square', 4, 5);
square.calcPerimeter()

const triangle = new Shape('triangle', 3, 3);
triangle.calcPerimeter()