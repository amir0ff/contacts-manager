import React, {Component} from 'react';
import {Consumer} from "../../context";
import TextInputGroup from "../layout/TextInputGroup";
import axios from 'axios';

//import uuid from 'uuid';

class AddContact extends Component {
  state = {
    name: '',
    email: '',
    phone: '',
    errors: {}
  };

  onSubmit = async (dispatch, event) => {
    event.preventDefault();
    //console.log(this.state);
    const {name, email, phone} = this.state;

    // Form Validations
    if (name === '') {
      this.setState({
        errors: {name: 'Name is required!'}
      });
      return;
    }
    if (email === '') {
      this.setState({
        errors: {email: 'Email is required!'}
      });
      return;
    }
    if (name === '') {
      this.setState({
        phone: {phone: 'Phone is required!'}
      });
      return;
    }

    const newContact = {
      /* id: uuid(),*/
      name,
      email,
      phone
    };

    const res = await axios.post('https://jsonplaceholder.typicode.com/users', newContact);

    dispatch({type: 'ADD_CONTACT', payload: res.data});

    // Clear State
    this.setState({
      name: '',
      email: '',
      phone: '',
      errors: {}
    });

    // Redirect
    this.props.history.push('/');

  };

  onChange = e => this.setState({
    [e.target.name]: e.target.value
  });

  render() {
    const {name, email, phone, errors} = this.state;

    return (
      <Consumer>
        {value => {
          const {dispatch} = value;
          return (<div className="card mb-3">
            <div className="card-header">
              Add Contact
            </div>
            <div className="card-body">
              <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                <TextInputGroup label="Name"
                                name="name"
                                placeholder="Enter Name"
                                value={name}
                                onChange={this.onChange}
                                error={errors.name}/>
                <TextInputGroup label="Email"
                                name="email"
                                type="email"
                                placeholder="Enter Email"
                                value={email}
                                onChange={this.onChange}
                                error={errors.email}/>
                <TextInputGroup label="Phone"
                                name="phone"
                                placeholder="Enter Phone"
                                value={phone}
                                onChange={this.onChange}
                                error={errors.phone}/>
                <input type="submit" value="Add Contact" className="btn btn-secondary btn-block"/>
              </form>
            </div>
          </div>)
        }}
      </Consumer>)
  }
}

export default AddContact;