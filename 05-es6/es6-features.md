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

```
## Rest Operator (Object)
```js

```
## Spread Operator (Object)
```js

```
## Default arguments
```js

```
## Arrow functions
```js

```
## Template strings
```js

```
## Iterator (for..of)
```js

```
## Object Construction Enhancements
```js

```
## Classes
```js

```
