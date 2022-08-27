import { createAction } from '@reduxjs/toolkit';

export const changeFilter = createAction(
  'filter/filterChanged',
  function prepare(value) {
    return {
      payload: {
        value,
      },
    };
  }
);
