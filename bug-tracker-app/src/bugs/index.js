import { useSelector, useDispatch } from 'react-redux';

import BugStats from './views/BugStats';
import BugEdit from './views/BugEdit';
import BugSort from './views/BugSort';
import BugList from './views/BugList';
import './index.css';
import * as bugActionCreators from './actions';
import { bindActionCreators } from 'redux';

const Bugs = () => {
  // extract data from the store
  const bugs = useSelector((storeState) => {
    return storeState.bugsState;
  })

  // prepare action dispatchers
  const dispatch = useDispatch()
  const { createNew, remove, toggle, removeClosed } = bindActionCreators(bugActionCreators, dispatch)

  const closedCount = bugs.reduce(
    (prevResult, bug) => (bug.isClosed ? prevResult + 1 : prevResult),
    0
  );
  
  return (
    <>
      <h3>Bugs</h3>
      <BugStats count={bugs.length} closedCount={closedCount} />
      <BugEdit createNew={createNew} />
      <BugSort />
      <BugList {...{ bugs, toggle, remove, removeClosed }} />
    </>
  );
};

export default Bugs;