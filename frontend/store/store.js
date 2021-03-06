import { createStore, applyMiddleware } from 'redux';
import thunk from '../middleware/thunk';
import logger from 'redux-logger';

import rootReducer from '../reducers/root_reducer';

export default (preloadedState = {}) => (
  createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(thunk, logger)
  )
);