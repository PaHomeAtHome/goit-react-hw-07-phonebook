import { createReducer } from '@reduxjs/toolkit';
import { changeFilter } from 'redux/actions/actions';

const preloadedState = {
  contacts: {
    items: [],
    filter: '',
  },
};

export const filterReducer = createReducer(preloadedState.contacts, builder => {
  builder.addCase(changeFilter, (state, action) => {
    const { value } = action.payload;
    state.filter = value;
  });
});
