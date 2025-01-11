import React from 'react';
import Header from './Header.jsx';
import AddContact from './AddContact.jsx';
import ContactList from  './ContactList.jsx';
import './App.css';

function App() {
  const contacts = [
    {
      id: 1,
      name: "Binil",
      email: "binil@gmail.com"
    },
    {
      id: 2,
      name: "Samyam",
      email: "samyam@gmail.com"
    },
  ];

  return (
    <div>
      <Header/>
      <AddContact/>
      <ContactList contacts = {contacts}/>
    </div>
  );
}

export default App;