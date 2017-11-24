import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

import TextArea from '../../shared/components/TextArea';
import Grid from '../../shared/components/Grid';

export default class GridController extends React.Component {
  state = {
    inputData: '',
    isButtonActive: false,
  }

  _onChangeInput = (e) => {
    this.setState({
      inputData: e.target.value,
      isButtonActive: e.target.value.length !== 0,
    });
    if (this.props.showGrid) {
      this.props.generateTable(e.target.value);
    }

    if (!e.target.value) {
      this.props.hideTable();
    }
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
          onClick={() => this.props.generateTable(this.state.inputData)}
          disabled={!this.state.isButtonActive}
        >
          Generate best table ever!
        </button>
        {
          this.props.showGrid ?
            <Grid data={this.props.parsedData} /> : null
        }
      </div>
    );
  }
}

GridController.propTypes = {
  showGrid: PropTypes.bool.isRequired,
  generateTable: PropTypes.func.isRequired,
  hideTable: PropTypes.func.isRequired,
  parsedData: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)).isRequired,
};
