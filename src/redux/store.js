import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer, filterReducer } from './reducers/reducers';
import { combineReducers } from 'redux';

import { contactsApi } from './API/api';

const reducers = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
  [contactsApi.reducerPath]: contactsApi.reducer,
});

export const store = configureStore({
  reducer: reducers,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(contactsApi.middleware),
});
