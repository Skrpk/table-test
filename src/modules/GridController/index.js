import { connect } from 'react-redux';

import GridController from './GridController';
import {
  generateTable,
} from './gridControllerActions';

const mapStateToProps = state => ({
  showGrid: state.gridController.get('showGrid'),
  parsedData: state.gridController.get('parsedData'),
});

const mapDispatchToProps = dispatch => ({
  generateTable: inputData => dispatch(generateTable(inputData)),
});

export default connect(mapStateToProps, mapDispatchToProps)(GridController);
