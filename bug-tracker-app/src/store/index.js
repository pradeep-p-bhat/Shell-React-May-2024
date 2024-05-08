import {legacy_createStore as createStore, combineReducers, applyMiddleware} from 'redux';
import bugsReducer from '../bugs/reducers/bugsReducer';
import projectsReducer from '../projects/reducer';

// log middleware
/* 
function logMiddlewareFactory(store){
    return function logMiddleware(next) {
        return function logMiddlewareActionProcessor (action) {
            console.group(action.type)
            console.log('Before :', store.getState())
            console.log('Action :', action)
            next(action)
            console.log("After :", store.getState());
            console.groupEnd()
        };
    };
} 
*/

const logMiddlewareFactory = ({getState, dispatch}) => next => action => {
    console.group(action.type)
    console.log('Before :', getState())
    console.log('Action :', action)
    next(action)
    console.log("After :", getState());
    console.groupEnd()
}

const rootReducer = combineReducers({
    bugsState : bugsReducer,
    projectsState : projectsReducer
})

/* 
const preloadedState = {
  bugsState: [
    {
      id: 1,
      name: "Server communication failure",
      isClosed: true,
      createdAt: new Date(),
    },
    {
      id: 2,
      name: "User access denied",
      isClosed: false,
      createdAt: new Date(),
    },
    {
      id: 3,
      name: "Data integrity checks failed",
      isClosed: true,
      createdAt: new Date(),
    },
  ],
  projectsState: [
    { id: 1, name: "Time Tracker" },
    { id: 2, name: "Expense Tracker" },
  ],
}; 
*/

const hibernatedState = window.localStorage.getItem('bugStore') 
const preloadedState = hibernatedState ? JSON.parse(hibernatedState) : { bugsState : [], projectsState : []}
const store = createStore(
  rootReducer,
  preloadedState, 
  applyMiddleware(logMiddlewareFactory)
);
export default store;