import React, {Component} from 'react';
import {Consumer} from "../../context";
import TextInputGroup from "../layout/TextInputGroup";
import axios from 'axios';

//import uuid from 'uuid';

class EditContact extends Component {
  state = {
    name: '',
    email: '',
    phone: '',
    errors: {}
  };

  async componentDidMount() {
    const {id} = this.props.match.params;
    const res = await axios.get('https://jsonplaceholder.typicode.com/users/' + id);

    const contact = res.data;

    this.setState({
      name: contact.name,
      email: contact.email,
      phone: contact.phone
    })
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

    const {id} = this.props.match.params;

    const editedContact = {
      name,
      email,
      phone
    };

    const res = await axios.put('https://jsonplaceholder.typicode.com/users/' + id, editedContact);

    dispatch({
      type: 'UPDATE_CONTACT',
      payload: res.data
    });

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
              Edit Contact
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
                <input type="submit" value="Edit Contact" className="btn btn-secondary btn-block"/>
              </form>
            </div>
          </div>)
        }}
      </Consumer>)
  }
}

export default EditContact;