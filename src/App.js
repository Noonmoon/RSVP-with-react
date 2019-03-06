import React, { Component } from 'react';
import './App.css';
import GuestList from './GuestList';

class App extends Component {

  state = {
    isFiltered: false,
    pendingGuest: "",
    guests: [
      {
        name: 'Maya',
        isConfirmed: false,
        isEditing: false
      },
      {
        name: 'Taliyah',
        isConfirmed: false,
        isEditing: false
      },
      {
        name: 'Lana',
        isConfirmed: true,
        isEditing: false
      }
    ]
  }

  // "At" naming convention: used as it is realted to a single index
  // callback which reverses isconfirmed state of guest
  toggleGuestPropertyAt = (property, indexChange) =>
    this.setState({
      guests: this.state.guests.map((guests, index) => {
        if (index === indexChange) {
          return {
            ...guests,
            [property]: !guests[property]
          }
        }
        return guests;
      })
    });

  toggleConfirmationAt = index => this.toggleGuestPropertyAt('isConfirmed', index);

  toggleEditingAt = index => this.toggleGuestPropertyAt('isEditing', index);

  SetNameAt = (name, indexChange) =>
    this.setState({
      guests: this.state.guests.map((guests, index) => {
        if (index === indexChange) {
          return {
            ...guests,
            name
          }
        }
        return guests;
      })
    });

  toggleFilter = () =>
    this.setState({ isFiltered: !this.state.isFiltered });

  getTotalInvited = () => this.state.guests.length;

  getConfirmed = () => this.state.guests.filter(guest => guest.isConfirmed === true);

  render() {
    return (
      <div className="App">
        <header>
          <h1>RSVP</h1>
          <p>React Practice App</p>
          <form>
              <input type="text" value="Safia" placeholder="Invite Someone" />
              <button type="submit" name="submit" value="submit">Submit</button>
          </form>
        </header>
        <div className="main">
          <div>
            <h2>Invitees</h2>
            <label>
              <input type="checkbox"
                onChange={this.toggleFilter}
                checked={this.state.isFiltered}/> Hide those who haven't responded
            </label>
          </div>
          <table className="counter">
            <tbody>
              <tr>
                <td>Attending:</td>
                <td>2</td>
              </tr>
              <tr>
                <td>Unconfirmed:</td>
                <td>1</td>
              </tr>
              <tr>
                <td>Total:</td>
                <td>3</td>
              </tr>
            </tbody>
          </table>

          <GuestList
            guests={this.state.guests}
            toggleConfirmationAt={this.toggleConfirmationAt}
            toggleEditingAt={this.toggleEditingAt}
            setNameAt={this.setNameAt}
            isFiltered={this.state.isFiltered} />
        </div>
      </div>
    );
  }
}

export default App;
