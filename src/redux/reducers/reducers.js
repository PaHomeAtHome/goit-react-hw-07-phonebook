import { createReducer } from '@reduxjs/toolkit';
import { addContact, changeFilter } from 'redux/actions/actions';
import { ContactForm } from 'components/ContactForm/ContactForm';

const preloadedState = {
  contacts: {
    items: [],
    filter: '',
  },
};

export const contactsReducer = createReducer(
  preloadedState.contacts,
  builder => {
    builder.addCase(addContact, (state, action) => {
      const { items } = state;
      const { name } = action.payload;

      if (items) {
        if (
          items.length > 0 &&
          items.find(
            contact => contact.name.toLowerCase() === name.toLowerCase()
          )
        ) {
          alert(name + ' is already in contacts');

          return;
        }
        if (items.length > 0) {
          localStorage.setItem(
            'contacts',
            JSON.stringify([...items, action.payload])
          );

          state.items = [...items, action.payload];
          console.log(ContactForm);
          return;
        }
      }

      if (!items) {
        localStorage.setItem('contacts', JSON.stringify([action.payload]));

        state.items = [action.payload];

        return;
      }

      if (items.length === 0) {
        localStorage.setItem('contacts', JSON.stringify([action.payload]));

        state.items = [action.payload];

        return;
      }
      return;
    });
  }
);

export const filterReducer = createReducer(preloadedState.contacts, builder => {
  builder.addCase(changeFilter, (state, action) => {
    const { value } = action.payload;
    state.filter = value;
  });
});
