import React from 'react';

export default (props) => {
  return (
    <div>
      <h1 className="display-5">About Contact Manager</h1>
      <span>{props.match.params.id}</span>
      <p className="lead">Simple app to manage contacts</p>
      <p className="secondary">Version 1.0.0</p>
    </div>
  )
};