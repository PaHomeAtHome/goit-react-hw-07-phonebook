import { configureStore } from '@reduxjs/toolkit';
import { filterReducer } from './reducers/reducers';
import { combineReducers } from 'redux';

import { reducerPath, reducer, middleware } from './API/api';

const reducers = combineReducers({
  filter: filterReducer,
  [reducerPath]: reducer,
});

export const store = configureStore({
  reducer: reducers,
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(middleware),
});
