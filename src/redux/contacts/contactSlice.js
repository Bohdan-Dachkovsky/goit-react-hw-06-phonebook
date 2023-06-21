import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  contacts: [
    { id: 1, name: 'Rasel Dosh', number: '093-8383-355' },
    { id: 2, name: 'Jonsion Resta', number: '093-8459-689' },
    { id: 3, name: 'Boris Bankli', number: '095-4543-344' },
  ],
  filter: '',
}

export const contactSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUser:(state, action) => {
   return { ...state, contacts: [action.payload], filter: ''
   } 
    }
    ,
    dltContact:(state, action) => {
      const deletedContacts = state.contacts.filter(
        item => item.id !== action.payload
      );
      state.contacts = deletedContacts;
    },
    searchContacts(state, action) {
      state.contacts = state.contacts.filter(todo => todo.name === action.payload)
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
