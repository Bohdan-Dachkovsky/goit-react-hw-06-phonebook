import { createSlice } from '@reduxjs/toolkit';

export const contactSlice = createSlice({
  name: 'user',
  initialState: {
    contacts: [
      { id: 1, name: 'Rasel Dosh', number: '093-8383-355' },
      { id: 2, name: 'Jonsion Resta', number: '093-8459-689' },
      { id: 3, name: 'Boris Bankli', number: '095-4543-344' },
    ],
    filter: '',
  },
  reducers: {
    addUser:(state, action) => {
       state.contacts[0].push(action.payload)
      console.log(action.payload)
    },
    dltContact:(state, action) => {
      const deletedContacts = state.contacts.filter(
        item => item.id !== action.payload
      );
      if (state.contacts?.id ?? true) {
        state.contacts = deletedContacts;
      }
    },
    searchContacts:(state, action) => {
      return state.filter(todo => todo.id !== action.payload)
        },
  },
});

export const {
  addUser,
  dltContact,
  searchContacts,
  filteredContacts,
} = contactSlice.actions;
export default contactSlice.reducer;
