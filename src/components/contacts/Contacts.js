import React, {Component} from 'react';
import Contact from './Contact'
import {Consumer} from "../../context";

class Contacts extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const {contacts} = value;
          return (
            <React.Fragment>
              <h1 className="display-4 bn2">Contact List</h1>
              {contacts.map(contact => (
                <Contact key={contact.id} contact={contact}/>
              ))}
            </React.Fragment>
          )
        }}
      </Consumer>
    );
  }
}

export default Contacts;