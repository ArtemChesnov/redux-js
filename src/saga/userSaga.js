import { put, takeEvery, call } from 'redux-saga/effects'
import { setUsers, FETCH_USERS } from '../store/customerReducer'

const fetchUswersFromApi = () =>
  fetch('https://jsonplaceholder.typicode.com/users')

function* fetchUserWorker() {
  const data = yield call(fetchUswersFromApi)
  const json = yield call(() => new Promise((res) => res(data.json())))
  yield put(setUsers(json))
}

export function* userWatcher() {
  yield takeEvery(FETCH_USERS, fetchUserWorker)
}
