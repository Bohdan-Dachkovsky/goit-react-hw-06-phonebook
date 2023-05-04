import React from 'react';
import { useDispatch } from 'react-redux';
import { searchContacts } from '../../redux/contacts/contactSlice.js';

export default function Filter() {
  const dispatch = useDispatch();

  return (
    <div>
      Find contacts by name
      <input
        type="text"
        onChange={e => dispatch(searchContacts(e.target.value))}
        placeholder="Search"
      />
    </div>
  );
}
