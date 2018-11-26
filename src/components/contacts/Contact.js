import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";
import {Consumer} from "../../context";
import axios from 'axios'

class Contact extends Component {
  state = {
    showContactInfo: false
  };

  static propTypes = {
    contact: PropTypes.object.isRequired
  };

  onShowClick = () => {
    this.setState({
      showContactInfo: !this.state.showContactInfo
    })
  };

  onDeleteClick = async (id, dispatch) => {
    try {
      await axios.delete('https://jsonplaceholder.typicode.com/users/' + id);
      dispatch({
        type: 'DELETE_CONTACT',
        payload: id
      })
    } catch (e) {
      dispatch({
        type: 'DELETE_CONTACT',
        payload: id
      })
    }
  };

  render() {
    const {id, name, email, phone} = this.props.contact;
    const {showContactInfo} = this.state;

    return (
      <Consumer>
        {value => {
          const {dispatch} = value;
          return (
            <div className="card card-body mb-3">
              <h4>{name} <i onClick={this.onShowClick}
                            className="fas fa-sort-down"
                            style={{cursor: 'pointer'}}/><i
                onClick={this.onDeleteClick.bind(this, id, dispatch)}
                className="fas fa-trash" style={{float: 'right', cursor: 'pointer'}}/>
                <Link to={`contact/edit/${id}`} >
                  <i style={{float: 'right', cursor: 'pointer', color: '#212529'}}
                    className="fas fa-pencil-alt mr-2"/>
                </Link>
              </h4>
              {showContactInfo ? (<ul className="list-group">
                <li className="list-group-item">Email: {email}</li>
                <li className="list-group-item">Phone: {phone}</li>
              </ul>) : null}
            </div>
          )
        }}
      </Consumer>
    );
  }
}

/*Contact.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};*/

export default Contact;