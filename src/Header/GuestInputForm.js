import React from 'react';
import PropTypes from 'prop-types';

const GuestInputForm = props =>
      <form onSubmit={props.handleNewGuest} >
        <input
          type="text"
          onChange={props.handleNameInput}
          value={props.pendingGuest}
          placeholder="Invite Someone" />
        <button type="submit" name="submit" value="submit">Submit</button>
    </form>;

GuestInputForm.propTypes = {
  handleNewGuest: PropTypes.func.isRequired,
  handleNameInput: PropTypes.func.isRequired,
  pendingGuest: PropTypes.string.isRequired
}

export default GuestInputForm;

