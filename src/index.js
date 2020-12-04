import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
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

function* newPets(action) {
  try{
      yield axios.post('/pet', action.payload)
  } catch (error){
      console.log('error in the pet post' , error);
  }
}

function* getOwners() {
  const ownerResponse = yield axios.get('/owner');
  yield put({type: 'SET_OWNER', payload: ownerResponse.data});
}

function* newOwner(action) {
  try {
    yield axios.post('/owner', action.payload)
  } catch (error) {
    console.log('error in the owner post', error)
  }
}

const petReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_PETS':
      return action.payload;
    default: 
      return state;
  }
}

const ownerReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_OWNER':
      return action.payload;
    default:
      return state;
  }
}

function* rootSaga() {
  yield takeEvery('FETCH_PETS', getPets);
  yield takeEvery('FETCH_OWNERS', getOwners)
  yield takeEvery('NEW_PET', newPets);
  yield takeEvery('NEW_OWNER', newOwner)
}

const storeInstance = createStore(
  combineReducers({
    petReducer,
    ownerReducer
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