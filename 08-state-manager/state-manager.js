let StateManager = (function () {
  let _currentState = undefined,
    _subscribers = [],
    _reducer = undefined;

  function getState() {
    return _currentState;
  }

  function subscribe(callbackFn) {
    _subscribers.push(callbackFn);
  }

  // private
  function triggerChange() {
    _subscribers.forEach((callbackFn) => callbackFn);
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
    let store = { getState, subscribe, dispatch };
    return store;
  }

  return {
    createStore
  }
  
})();