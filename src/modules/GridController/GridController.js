import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

import TextArea from '../../shared/components/TextArea';
import Grid from '../../shared/components/Grid';

export default class GridController extends React.Component {
  state = {
    inputData: '',
  }

  _onChangeInput = (e) => {
    this.setState({ inputData: e.target.value });
  }

  render() {
    return (
      <div
        className="wrapper"
      >
        <div>
          <TextArea
            inputData={this.state.inputData}
            onChangeInput={this._onChangeInput}
          />
        </div>
        <button
          className="submit-button"
          onClick={this.props.generateTable}
        >
          Generate Best grid ever!
        </button>
        {
          this.props.showGrid ?
            <Grid /> : null
        }
      </div>
    );
  }
}

GridController.propTypes = {
  showGrid: PropTypes.bool.isRequired,
  generateTable: PropTypes.func.isRequired,
};
