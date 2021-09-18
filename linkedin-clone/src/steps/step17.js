// Redux

/* 
1. Install redux, npm install react-redux, npm install redux
2. Wrap the entire app in redux store. Go to index.js
3. Create a folder called reducers in src, create index.js file in it
4. Create userReducer.js in reducers folder
5. Inside src, create a new folder called store. Create a file index.js in store
*/


// modified index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store = { store }>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);



// index.js under reducers folder
import { combineReducers } from "redux";
import  userReducer  from "./userReducer";

 const rootReducer = combineReducers({
     userState: userReducer,
});

export default rootReducer;

//userReducer.js under reducers folder

const INITIAL_STATE = {
    user: null,
};

const userReducer = (state = INITIAL_STATE, action) => {

    switch(action.type) {
        default: 
        return state;
    }
};

export default userReducer;

//Think of reducer as the state of data



//index.js under store folder
import { createStore, applyMiddleware } from 'redux';

import  rootReducer  from '../reducers';

const store = createStore(rootReducer, {});

export default store;