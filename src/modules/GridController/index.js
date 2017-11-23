import { connect } from 'react-redux';

import GridController from './GridController';
import {
  generateTable,
} from './gridControllerActions';

const mapStateToProps = state => ({
  showGrid: state.gridController.get('showGrid'),
});

const mapDispatchToProps = dispatch => ({
  generateTable: () => dispatch(generateTable()),
});

export default connect(mapStateToProps, mapDispatchToProps)(GridController);
