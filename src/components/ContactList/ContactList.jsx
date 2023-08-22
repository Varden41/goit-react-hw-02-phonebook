import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ButtonStyled, ListItem } from './ContactList.styled';

class ContactList extends Component {
  render() {
    const { filteredContacts } = this.props;

    return (
      <ul>
        {filteredContacts.map(contact => {
          return (
            <ListItem key={contact.id}>
              {contact.name}: {contact.number}{' '}
              <ButtonStyled
                onClick={() => {
                  this.props.onDelete(contact.id);
                }}
              >
                Delete
              </ButtonStyled>
            </ListItem>
          );
        })}
      </ul>
    );
  }
}

ContactList.propTypes = {
  filteredContacts: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
};

ContactList.propTypes = {
  filteredContacts: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
};
export default ContactList;
