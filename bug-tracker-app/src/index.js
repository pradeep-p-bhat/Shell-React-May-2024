import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Provider, useDispatch, useSelector } from 'react-redux';
import reportWebVitals from './reportWebVitals';

import store from "./store";
import Bugs from './bugs';
import Projects from "./projects";

const ErrorPlaceHolder = () => {
  const error = useSelector(storeState => storeState.errorState)
  const dispatch = useDispatch();

  const clearClick = () => {
    const clearAction = { type : 'ERROR_CLEAR'}
    dispatch(clearAction);
  }
  return (
    <div>
      {error && (
        <div>
          <div>{error}</div>
          <button onClick={clearClick}>Clear</button>
        </div>
      )}
    </div>
  );
}

const App = () => {
  const onBtnHibernateClick = () => {
    const appState = store.getState();
    window.localStorage.setItem('bugStore', JSON.stringify(appState))
  }
  return (
    <Provider store={store}>
      <ErrorPlaceHolder/>
      <button onClick={onBtnHibernateClick}>Hibernate</button>
      <div className="container">
        <div className="container-child">
          <Bugs />
        </div>
        <div className="container-child">
          <Projects />
        </div>
      </div>
    </Provider>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>); 



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

