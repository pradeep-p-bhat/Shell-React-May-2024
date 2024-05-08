import { useDispatch } from 'react-redux';
import * as bugActionCreators from '../actions';
import { bindActionCreators } from 'redux';

function useBugDispatchers() {
  // prepare action dispatchers
  const dispatch = useDispatch();
  return bindActionCreators(bugActionCreators, dispatch);
}

export default useBugDispatchers;
