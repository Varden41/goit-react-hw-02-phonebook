import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { LabelStyled, InputStyled } from './Filter.styled';

class Filter extends Component {
  onSearch = e => {
    this.props.onFilter(e.target.value);
  };

  render() {
    return (
      <>
        <LabelStyled htmlFor="search">
          Find contacts by name
          <InputStyled
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            type="text"
            name="search"
            value={this.props.filter}
            onChange={this.onSearch}
          />
        </LabelStyled>
      </>
    );
  }
}

Filter.propTypes = {
  onFilter: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};

export default Filter;
