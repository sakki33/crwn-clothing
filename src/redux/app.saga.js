import { take } from 'redux-saga/effects';

export function* incrementSaga() {
  yield take('INCREMENT');
  console.log('I am incremented');
}