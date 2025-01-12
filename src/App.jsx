import React, {useState} from 'react';
import Header from './Header.jsx';
import AddContact from './AddContact.jsx';
import ContactList from  './ContactList.jsx';
import './App.css';

function App() {
  // const contacts = [
  //   {
  //     id: 1,
  //     name: "Binil",
  //     email: "binil@gmail.com"
  //   },
  //   {
  //     id: 2,
  //     name: "Samyam",
  //     email: "samyam@gmail.com"
  //   },
  // ];

  const [contacts, setContacts] = useState([]);

  const addContactHandler = (contact) => {
    console.log(contact);
  }

  return (
    <div className='ui container'>
      <Header/>
      <AddContact addContactHandler = {addContactHandler}/>
      <ContactList contacts = {contacts}/>
    </div>
  );
}

export default App;