import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const TextArea = props =>
  (
    <textarea
      onChange={props.onChangeInput}
      className="text-input"
      name="description"
      value={props.inputData}
    />
  );

TextArea.propTypes = {
  onChangeInput: PropTypes.func.isRequired,
  inputData: PropTypes.string.isRequired,
};

export default TextArea;
