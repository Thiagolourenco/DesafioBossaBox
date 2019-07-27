import { call, put } from "redux-saga/effects";
import api from "../../services/api";

import { Creators as ListToolsActions } from "../ducks/listTools";

export function* getTools() {
  try {
    const response = yield call(api.get, "/tools");

    yield put(ListToolsActions.getToolsSuccess(response.data));
  } catch (e) {
    console.log(e);
  }
}
