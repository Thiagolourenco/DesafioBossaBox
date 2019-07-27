import { all, takeLatest } from "redux-saga/effects";

import { Types as ListToolsTypes } from "../ducks/listTools";

import { getTools } from "./listTools";

export default function* rootSaga() {
  return yield all([takeLatest(ListToolsTypes.GET_REQUEST, getTools)]);
}
