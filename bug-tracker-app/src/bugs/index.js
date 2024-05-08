import { useSelector, useDispatch } from 'react-redux';

import BugStats from './views/BugStats';
import BugEdit from './views/BugEdit';
import BugSort from './views/BugSort';
import BugList from './views/BugList';
import './index.css';
import useBugs from './hooks/useBugs'
import useBugDispatchers from './hooks/useBugDispatchers';


const Bugs = () => {
  
  const { bugs, closedCount } = useBugs()
  const { createNew, remove, toggle, removeClosed, load } = useBugDispatchers()
  
  return (
    <>

      <h3>Bugs</h3>
      <button onClick={load}>Load Bugs</button>
      <BugStats count={bugs.length} closedCount={closedCount} />
      <BugEdit createNew={createNew} />
      <BugSort />
      <BugList {...{ bugs, toggle, remove, removeClosed }} />
    </>
  );
};

export default Bugs;