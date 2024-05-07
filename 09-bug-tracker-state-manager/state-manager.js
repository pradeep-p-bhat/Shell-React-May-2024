let StateManager = (function () {
  let _currentState = undefined,
    _subscribers = [],
    _reducer = undefined,
    _init_action = { type : '@@INIT/ACTION' }

  function getState() {
    return _currentState;
  }

  function subscribe(callbackFn) {
    _subscribers.push(callbackFn);
  }

  // private
  function triggerChange() {
    _subscribers.forEach(callbackFn => callbackFn());
  }

  function dispatch(action) {
    let newState = _reducer(_currentState, action);
    if (newState === _currentState) return;
    _currentState = newState;
    triggerChange();
  }

    //   store factory to enforce that the store can be created ONLY with a reducer
  function createStore(reducerFn){
    if (typeof reducerFn !== 'function')
        throw new Error('invalid argument. reducer is mandatory to create a store!')
    _reducer = reducerFn;
    // To get the valid default state
    _currentState = _reducer(_currentState, _init_action);
    let store = { getState, subscribe, dispatch };
    return store;
  }

  function bindActionCreators(actionCreators, dispatch) {
    const actionDispatchers = {};
    for (let key in actionCreators) {
      actionDispatchers[key] = function (...args) {
        const action = actionCreators[key](...args);
        dispatch(action);
      };
    }
    return actionDispatchers;
  }

  return {
    createStore,
    bindActionCreators
  }
  
})();