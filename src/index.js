import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

const sagaMiddleware = createSagaMiddleware();

function* getPets() {
  const petResponse = yield axios.get('/pet');
  yield put({type: 'SET_PETS', payload: petResponse.data});
}

const petReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_PETS':
      return action.payload;
    default: 
      return state;
  }
}

function* rootSaga() {
  yield takeEvery('FETCH_PETS', getPets);
}

const storeInstance = createStore(
  combineReducers({
    petReducer
  }),
  applyMiddleware(sagaMiddleware, logger)
)

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={storeInstance}>
    <App />
  </Provider>,
  document.getElementById('root')
);

