import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {bindActionCreators} from 'redux';
import * as bugActionCreators from './bugs/actions';
import store from './store'
import Bugs from './bugs';

/* const bugActionDispatchers = StateManager.bindActionCreators(bugActionCreators, store.dispatch); */
const bugActionDispatchers = bindActionCreators(bugActionCreators, store.dispatch);

const root = ReactDOM.createRoot(document.getElementById('root'));
function renderApp(){
    const bugs = store.getState()
    root.render(<Bugs bugs={bugs} {...bugActionDispatchers} />)
}
renderApp()
store.subscribe(renderApp)



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


// ES6 modules
/* 
import * as calc from './calculator'; //importing the module object from 'calculator.js'
console.log(calc); 
*/

/* 
import * as calc from './calculator'
console.log(calc.add(100,200)) 
*/

/* 
import * as calc from "./calculator";
// const add = calc.add
const { add } = calc;
console.log(add(100, 200));
*/

/* 
import { add } from "./calculator";
console.log(add(100, 200)); 
*/

// importing 'default' exported object
/* 
import calc from './calculator';
console.log(calc) 
*/

/* import both 'default' and module entities */
/* 
import calc, { multiply } from './calculator'
console.log(calc, multiply) 
*/