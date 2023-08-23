import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactList from './ContactList';
import ContactForm from './ContactForm';
import Filter from './Filter';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  dataHandler = (name, number) => {
    if (
      this.state.contacts.find(
        contact => contact.name.toLocaleLowerCase() === name.toLocaleLowerCase()
      )
    ) {
      return alert(`${name} is already in contacts.`);
    }
    this.setState(previeusState => {
      return {
        contacts: [...previeusState.contacts, { id: nanoid(), name, number }],
      };
    });
  };

  onFilter = filteredText => {
    this.setState({ filter: filteredText });
  };

  onFilteredContacts = () => {
    const { contacts, filter } = this.state;

    return contacts.filter(contact => {
      return contact.name.toLowerCase().includes(filter.toLowerCase());
    });
  };

  onDelete = deleteId => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(contact => contact.id !== deleteId),
      };
    });
  };

  render() {
    const filteredContacts = this.onFilteredContacts();
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.dataHandler} />
        <h2>Contacts</h2>
        <Filter onFilter={this.onFilter} filter={this.state.filter} />
        <ContactList
          filteredContacts={filteredContacts}
          onDelete={this.onDelete}
        />
      </div>
    );
  }
}

export default App;
