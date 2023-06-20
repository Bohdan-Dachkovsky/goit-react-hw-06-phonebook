import React from 'react'
import ContactForm from './components/ContactForm/ContactForm.jsx'
import ContactList from './components/ContactList/ContactList.jsx'
import Filter from './components/Filter/Filter.jsx'
import { selectedPerson } from './redux/contacts/selectors.js'
import { useSelector } from 'react-redux'



export const App = () => {
  const contacts = useSelector(selectedPerson)

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <h1>Phonebook</h1>
      <ContactForm />
      {contacts?.length && <Filter />}
      <ContactList />
    </div>
  )
}
