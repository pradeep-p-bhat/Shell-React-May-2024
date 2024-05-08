import {legacy_createStore as createStore, combineReducers} from 'redux';
import bugsReducer from '../bugs/reducers/bugsReducer';
import projectsReducer from '../projects/reducer';


// const store = createStore(bugsReducer);
// const store = createStore(projectsReducer);

const rootReducer = combineReducers({
    bugsState : bugsReducer,
    projectsState : projectsReducer
})
const store = createStore(rootReducer);
console.log('store state : ', store.getState())
export default store;