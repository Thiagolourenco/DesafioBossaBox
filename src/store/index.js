import { createStore, compose, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import rootReducers from "./ducks";
import rootSaga from "./sagas";

const middlewares = [];
const sagaMiddleware = createSagaMiddleware();

middlewares.push(sagaMiddleware);

const composer =
  process.env.NODE_ENV === "development"
    ? compose(applyMiddleware(...middlewares))
    : applyMiddleware(...middlewares);

const store = createStore(rootReducers, composer);

sagaMiddleware.run(rootSaga);

export default store;
