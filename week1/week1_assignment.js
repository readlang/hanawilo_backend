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



//-- PROBLEM 9 --
//-- PROBLEM 10 --
//-- PROBLEM 11 --
//-- PROBLEM 12 --
//-- PROBLEM 13 --
//-- PROBLEM 14 --
//-- PROBLEM 15 --
//-- PROBLEM 16 --
//-- PROBLEM 17 --
//-- PROBLEM 18 --

