import React from 'react';
import PropTypes from 'prop-types'
import classnames from 'classnames'

const TextInputGroup = ({
                          label,
                          name,
                          value,
                          placeholder,
                          type,
                          onChange,
                          error
                        }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input placeholder={placeholder}
             type={type}
             name={name}
             className={classnames('form-control', {'is-invalid': error})}
             value={value}
             onChange={onChange}/>
      {error && <div className="invalid-feedback">This field is invalid</div>}
    </div>
  )
};

TextInputGroup.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string.isRequired
};

TextInputGroup.defaultProps = {
  type: 'text'
};

export default TextInputGroup;