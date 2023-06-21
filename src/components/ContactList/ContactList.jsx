import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { filteredContacts } from '../../redux/findByName/selectors.js';
import styled from 'styled-components';
import { dltContact } from '../../redux/contacts/contactSlice.js';
import { selectedPerson } from '../../redux/contacts/selectors.js';
const TaskList = styled.ul`
  display: block;
  width: 600px;
  list-style: none;
  list-style-type: none;
`;
const List = styled.li`
  display: flex;
  align-items: center;
  padding: 12px;
  list-style: none;
  list-style-type: none;
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
`;
const Button = styled.button`
  border: 1px solid;
  margin-right: 4px;
  margin-left: 4px;
`;
export default function ContactList() {
  const contacts = useSelector(selectedPerson);
  const dispatch = useDispatch();
  const filtered = useSelector(filteredContacts);
 
 
  const contactsName = [...contacts].filter(contact =>
    contact?.name.toString()
      .toLowerCase()
      .includes(filtered.toString().toLowerCase(), console.log(contact.name)) 
      
  );
  return (
    <TaskList>
      <li>
        <h2>Contacts</h2>
        {!contacts.length ? <p>No data contacts!</p> : undefined}
      </li>
      
      {contactsName?.length > 0 ? (
       [...contacts].map((contact, idx, arr) => (
          <List key={idx}>
            {contact.name + ':' + contact.number}

            <Button
              type="button"
              name="delete"
              onClick={() => dispatch(dltContact(contact.id))}
            >
              Delete
            </Button>
          </List>
        ))
      ) : (
        <p>Not available contacts!</p>
      )}
    </TaskList>
  );
}
