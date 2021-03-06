import { createStore, applyMiddleware } from 'redux';
import rootReducer from './index.js';
import loggingMiddleware from 'redux-logger';
import thunkMiddleware from 'redux-thunk';


export default createStore(rootReducer, applyMiddleware(thunkMiddleware, loggingMiddleware));
