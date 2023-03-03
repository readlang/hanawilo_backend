// week 1 assignment

//-- PROBLEM 1 --
/* 
2 == '2'        TRUE
'he' == 'she'   FALSE
2 === 2         TRUE
'true' == true  FALSE
true === true   TRUE
'true' != true  TRUE
'true' !== true TRUE
*/


//-- PROBLEM 2 --
// let can be modified.  use when const doesn't work.
let variable = 0
// const can't be modified (it's immutable).  Use this whenever possible.
const anotherVariable = 1
// Var is the old way of declaring, like "let" but w/ global scope.  Avoid using this.
var badWayOfDeclaring = 2


//-- PROBLEM 3 --
const problem3 = () => {
    const firstClassFunction = () => {
        console.log("I'm a first class function")
        return ("hello")
    }
    function higherOrderFunction(functionParam) {
        console.log(functionParam())
    }
    // callback function is often written as "x => {some action performed on x}"
    let inputArray = [1,2,3]
    console.log(inputArray.map(ele => ele + 10))
}


//-- PROBLEM 4 --
/*
a- 'hi' b- 'bye' c- this will throw an error, as c is declared in a local scope, but 
the console.log(c) is trying to access outside of that scope
inner scopes can access outer-defined variables, but outer cannot access inner-scope defined variables
*/


//-- PROBLEM 5 --
const problemFive = () => {
    const someArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    for (i=0; i<someArray.length; i++) {
        console.log(someArray[i])
    }
    console.log("---")
    for (const element of someArray) {
        console.log(element)
    }
}


//-- PROBLEM 6 --
/**
 * concat - non-mutative
 * length - non-mutative
 * filter - non-mutative
 * find - non-mutative
 * slice - non-mutative
 * splice - mutative
 * includes - non-mutative
 * indexOf - non-mutative
 * isArray - non-mutative
 * join - non-mutative
 * map - non-mutative
 * pop - mutative
 * push - mutative
 * shift - mutative
 * unshift - mutative
 * sort - mutative
 * reduce  - non-mutative
*/


//-- PROBLEM 7 --
const problem7 = () => {
    const someObject = {
        color: 'black'
    }

    Object.assign(someObject, {name: "john doe"})
    someObject.age = 22
    someObject["address"] = '123 test address'
    console.log(Object.keys(someObject))
    console.log(Object.values(someObject))

    for (const key in someObject) {
        console.log(someObject[key])
    }

    return someObject    
}



//-- PROBLEM 8 --
const problem8 = () => {
    const numbers = [
        {
        num: 1
        },
        {
        num: 2
        },
        {
        num: 3
        }
    ]
    for (const ele of numbers) console.log(ele.num)
}
//problem8()


//-- PROBLEM 9 --
const problem9 = () => {
    const exampleSet = new Set()
    exampleSet.add("john doe")
    console.log(exampleSet)
    console.log(exampleSet.has("john doe"))
    console.log(exampleSet.delete("john doe"))
    console.log(exampleSet)
}
//problem9()


//-- PROBLEM 10 --
const problem10 = () => {
    const newMap = new Map() // create the map
    newMap.set("name", "john doe")
    console.log(newMap)
    const check = () => {
        for (const ele of newMap.values()) {
            if (ele === "john doe") return true
        } return false
    }
    console.log(check())
    newMap.delete("name")
    console.log(newMap)
}
//problem10()


//-- PROBLEM 11 --
/** Normal, synchronous programming executes one-after-another top to bottom through a file.
 * Any slow lines of code will block subsequent lines of code.
 * Asynchronous programming takes certain elements out of this execution order, and allows  
 * them to take longer, while the remaining elements go ahead and execute.  It is used
 * for something like a API data fetch, which can potentially take much longer than other code
 * to execute becuase the request has to travel to other servers on the web.
 */


//-- PROBLEM 12 --
/** Callback hell is where you have multiple nested callback functions, which is hard to 
 * follow and maintain.  The deeper the nesting the more confusing it is.
 */


//-- PROBLEM 13 --
/** A promise is what is given initially in an asynchronous action, before it completes.
 * For example in a Fetch before the response comes back.
 * There are 3 potential states: pending (waiting), fulfilled (success) or rejected (failure/error).
 */


//-- PROBLEM 14 --
/** Async / await is a way to specify an asynchronous function and the specific line of code 
 * that will have to be "waited" on to complete or return data. 
*/


//-- PROBLEM 15 --
const problem15a = async () => {
    try {
        const result = await fetch('https://rickandmortyapi.com/api/character')
        const data = await result.json()
        
        let characters = []
        for (const element of data.results) {
            characters.push(element.name)
        }
        return characters
    } catch (error) {
        console.log(error)
    }
}
// calls the fn and waits for the response to console.log
//problem15a().then(data => console.log(data)) 


const problem15b = async () => {
    try {
        const [result1, result2] = await Promise.all([
            fetch("https://rickandmortyapi.com/api/character/2"),
            fetch("https://randomuser.me/api/?results=1")
        ])
        const [data1, data2] = await Promise.all([
            result1.json(),
            result2.json()
        ])
        const {name: data1Name} = data1        
        const {results: [ {name: {first: data2First, last: data2Last}} ] } = data2

        return [data1Name, `${data2First} ${data2Last}`]
    } catch (error) {
        console.log(error)
    }
}
problem15b().then(data => console.log("#15b:", data))


//-- PROBLEM 16 & 17--
const problem16and17 = () => {
    class Shape {
        constructor(name, sides, sideLength) {
            this.name = name
            this.sides = sides
            this.sideLength = sideLength
        }
        calcPerimeter() {          // this is a method
            console.log(this.name, "perimeter: ", this.sides * this.sideLength)
        }
    }

    const square = new Shape("square", 4, 5)
    square.calcPerimeter()

    const triangle = new Shape("triangle", 3, 3)
    triangle.calcPerimeter()

    // this is problem 17:
    class Square extends Shape {

        constructor(sideLength) {
            super("square", 4, sideLength);
        }

        calcArea() {
            console.log(this.name, "area: ", this.sideLength ** 2 )
        }
    }
    const square2 = new Square(8)
    square2.calcPerimeter() // should be 32
    square2.calcArea() // should be 64
}
problem16and17()




//-- PROBLEM 18 --

