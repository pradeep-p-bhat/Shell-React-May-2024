import {legacy_createStore as createStore} from 'redux';
import bugsReducer from '../bugs/reducers/bugsReducer';
import projectsReducer from '../projects/reducer';


// const store = createStore(bugsReducer);
const store = createStore(projectsReducer);
export default store;