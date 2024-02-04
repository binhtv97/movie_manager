import {all} from 'redux-saga/effects';
// Saga Imports
import appSaga from './app';
import movieSaga from './movie';

export default function* rootSaga() {
  yield all([
    // Sagas
    ...appSaga,
    ...movieSaga,
  ]);
}
