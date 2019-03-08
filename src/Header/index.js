import React from 'react';
import PropTypes from 'prop-types';

import GuestInputForm from './GuestInputForm';

const Header = props =>
    <header>
      <h1>RSVP</h1>
      <p>React Practice App</p>

      <GuestInputForm
        handleNewGuest={props.addNewGuest}
        handleNameInput={props.handleNameInput}
        pendingGuest={props.pendingGuest}/>

    </header>;

Header.propTypes = {
  addNewGuest: PropTypes.func.isRequired,
  handleNameInput: PropTypes.func.isRequired,
  pendingGuest: PropTypes.string.isRequired
}

export default Header;