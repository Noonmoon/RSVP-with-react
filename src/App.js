import React, { Component } from 'react';
import './App.css';

import Header from './Header';
import Main from './MainContent';

const uuidv1 = require('uuid/v1');

class App extends Component {

  state = {
    isFiltered: false,
    pendingGuest: "",
    guests: []
  }

  toggleGuestProperty = (property, id) =>
    this.setState({
      guests: this.state.guests.map(guest => {
        if (guest.id === id) {
          return {
            ...guest,
            [property]: !guest[property]
          };
        }
        return guest;
      })
    });

  toggleConfirmation = id =>
    this.toggleGuestProperty('isConfirmed', id);

  removeGuest = id =>
    this.setState({
      guests: this.state.guests.filter(guest => guest.id !== id)
    });

  toggleEditing = id =>
    this.toggleGuestProperty('isEditing', id);

  setName = (name, id) =>
    this.setState({
      guests: this.state.guests.map(guest => {
        if (guest.id === id) {
          return {
            ...guest,
            name
          };
        }
        return guest;
      })
    });

  toggleFilter = () =>
    this.setState({ isFiltered: !this.state.isFiltered });

  handleNameInput = (e) => {
    this.setState({ pendingGuest: e.target.value })
  };

  addNewGuest = e => {
    e.preventDefault();
    this.setState({
      guests: [
        {
          id: uuidv1(),
          name: this.state.pendingGuest,
          isConfirmed: false,
          isEditing: false
        },
        ...this.state.guests
      ],
      pendingGuest: ''
    });
  };

  getTotalInvited = () => this.state.guests.length;

  getConfirmed = () =>
    this.state.guests.reduce(
      (total, guest) => guest.isConfirmed ? total + 1 : total, 0);

  render() {
    const totalInvited = this.getTotalInvited();
    const numberAttending = this.getConfirmed();
    const numberUnconfirmed = totalInvited - numberAttending;
    return (
      <div className="App">

        <Header
          addNewGuest={this.addNewGuest}
          handleNameInput={this.handleNameInput}
          pendingGuest={this.state.pendingGuest}/>

        <Main
          toggleFilter={this.toggleFilter}
          isFiltered={this.state.isFiltered}
          totalInvited={totalInvited}
          numberAttending={numberAttending}
          numberUnconfirmed={numberUnconfirmed}
          guests={this.state.guests}
          toggleConfirmation={this.toggleConfirmation}
          toggleEditing={this.toggleEditing}
          setName={this.setName}
          removeGuest={this.removeGuest}
          pendingGuest={this.state.pendingGuest}/>
      </div>
    );
  }
}

export default App;
