# ES6 Features
## let
```js
for(let i = 0; i <10; i++){
}

let x = 100
```
## const
```js
const pi = 3.14
```
## Destructuring (Array)
```js
let nos = [3,1,5,2,4]

let [x, y] = nos

// swap the values of two variables
[y,x] = [x,y]
```
## Rest Operator (Array)
```js
let nos = [3,1,5,2,4]
let [x,y, ...z] = nos
```
## Spread Operator (Array)
```js
let nos = [3,1,5,2,4]
let newNos = [ ...nos, 100, 200, 300]
```

## Rest & Spread Operator in functions
```js
function sum(...args /* rest operator to receive the arguments as an array */){
    let result = 0;
    for (let idx = 0; idx < args.length; idx++){
        result += args[idx];
    }
    return result;
}

sum(10)
sum(10,20)
sum(10,20,30,40,50)

// Using spread operator
let nos = [3,1,5,2,4]
sum(...nos)
```

## Destructuring (Object)
```js
var product = {
    id : 100,
    name : 'Pen',
    cost : 10,
    category : 'stationary'
}

// variable names MUST match the attribute names
let {id, category} = product

// if the variable names are different from the attribute names
let { id : x, category : y } = product
```
## Rest Operator (Object)
```js
var product = {
    id : 100,
    name : 'Pen',
    cost : 10,
    category : 'stationary'
}

let { cost, ...z } = product
```
## Spread Operator (Object)
```js
var product = {
    id : 100,
    name : 'grapes',
    cost : 100,
    category : 'food'
}
var perishableProduct = { ...product, category : 'fruits',  expiry : '2 Days' }
```

## Object Destructuring in functions
```js
var product = {
    id : 10,
    name : 'grapes',
    cost : 100,
    category : 'food'
}

function PrintProduct({id, cost}){
    console.log('id = ', id, 'cost = ', cost);
}

PrintProduct(product)
```
## Default arguments
```js
function add(x = 10,y = 20){
    return x + y;
}

add()

add(100)

add(undefined, 200)

add(100,200)
```
## Arrow functions
```js
/*
// function statement
function add(x,y){
    return x + y;
}

// function expression
let add = function(x,y){
    return x + y;
}

// arrow functions
// if the function body has a block of code
    - wrap the function body within '{}'
    - explicitly 'return' the result
let add = (x,y) => {
    return x + y;
}
*/

// if the function body is just an expression
let add = (x,y) => x + y;
```
## Template strings
```js
let x = 10, y = 20

let s = `sum of ${x} and ${y} is ${x + y}`
```
## Iterator (for..of)
```js
let nos = [3,1,5,2,4]

for (let no of nos)
    console.log(no)
```
## Object Construction Enhancements
```js
let id = 100, name = 'Pen', cost = 10

let product = { id, name, cost }

// methods
let product = { 
    id, name, cost,
    print(){
        console.log(this.id, this.name, this.cost);
    }
}
product.print()
```
## Classes
```js
class Product {
    // class attributes
    // private attributes
    #id = 0;
    
    // public attributes
    name = '';
    cost = 0;
    
    // accessors
    set id(val){
        if (val < 0){
            throw new Error('invalid id');
        }
        this.#id = val;
    }
    get id(){
        return this.#id;
    }
    
    // static attributes
    static ModelType = 'Product';
    
    // constructor
    constructor(id, name, cost){
        this.id = id; //invoke the 'id' setter
        this.name = name;
        this.cost = cost;
    }
    
    // methods
    Format(){
        return `id = ${this.id}, name = ${this.name}, cost = ${this.cost}`
    }
    
    // static methods
    static IsProduct(obj){
        return obj instanceof Product
    }
}

var pen = new Product(100, 'Pen', 10)


// inheritance
class PerishableProduct extends Product{
    expiry = '';

    constructor(id, name, cost, expiry){
        super(id, name, cost)
        this.expiry = expiry
    }

    // override methods
    Format(){
        return `${super.Format()}, expiry = ${this.expiry}`
    }
}

var grapes = new PerishableProduct(200, 'Grapes', 100, '2 Days')
```
## Reference
- https://github.com/lukehoban/es6features
