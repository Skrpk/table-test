import { connect } from 'react-redux';

import GridController from './GridController';
import {
  generateTable,
  hideTable,
} from './gridControllerActions';

const mapStateToProps = state => ({
  showGrid: state.gridController.get('showGrid'),
  parsedData: state.gridController.get('parsedData'),
});

const mapDispatchToProps = dispatch => ({
  generateTable: inputData => dispatch(generateTable(inputData)),
  hideTable: inputData => dispatch(hideTable()),
});

export default connect(mapStateToProps, mapDispatchToProps)(GridController);
