import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

class Grid extends React.Component {
  renderRow = (rowArray, isHead) => {
    let result;
    if (isHead) {
      result = rowArray.map((cellData, index) => (
        <th
          key={Math.random(index)}
        >
          {cellData}
        </th>
      ));
    } else {
      result = rowArray.map((cellData, index) => (
        <td
          key={Math.random(index)}
        >
          {cellData}
        </td>
      ));
    }

    return (
      <tr key={Math.random()}>{result}</tr>
    );
  }

  render() {
    const { data } = this.props;

    return (
      <table className="table">
        <thead>{this.renderRow(data[0], true)}</thead>
        <tbody>
          {
            data.splice(1, data.length).map(element => this.renderRow(element))
          }
        </tbody>
      </table>
    );
  }
}

Grid.propTypes = {
  data: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)).isRequired,
};

export default Grid;
