import {call, put, takeLatest} from 'redux-saga/effects';
import {movieActions} from '../reducers/movie';
import {PayloadAction} from '@reduxjs/toolkit';
import {MovieApi} from 'src/Services/Api/movie';
import {GetListMoivelResponse} from 'src/Constanst/interface/api/TheMovie';

function* getListMovie({payload}: PayloadAction<number>) {
  const response: GetListMoivelResponse = yield call(
    MovieApi.getListMoive,
    payload,
  );
  yield put(movieActions.setListMovie(response.results));
}

function* getMore({payload}: PayloadAction<number>) {
  const response: GetListMoivelResponse = yield call(
    MovieApi.getListMoive,
    payload,
  );
  yield put(movieActions.setPage(payload));
  yield put(movieActions.addListMovie(response.results));
}

function* onRefresh() {
  yield put(movieActions.setRefresh());

  const response: GetListMoivelResponse = yield call(MovieApi.getListMoive, 1);
  yield put(movieActions.addListMovie(response.results));
}

export default [
  takeLatest(movieActions.getListMovie.type, getListMovie),
  takeLatest(movieActions.getMore.type, getMore),
  takeLatest(movieActions.onRefresh.type, onRefresh),
];
